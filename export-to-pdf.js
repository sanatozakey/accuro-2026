const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

/**
 * Crawl the website and export all pages to a single combined PDF
 */
async function exportWebsiteToPDF() {
  const baseUrl = 'http://localhost:3000';
  const visitedUrls = new Set();
  const urlsToVisit = [baseUrl];
  const pageScreenshots = [];

  console.log('Starting website crawler and PDF export...\n');

  // Launch browser
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });

  // Ensure exports directory exists
  if (!fs.existsSync(path.join(__dirname, 'exports'))) {
    fs.mkdirSync(path.join(__dirname, 'exports'));
  }

  try {
    // Step 1: Crawl all pages and capture screenshots
    while (urlsToVisit.length > 0) {
      const currentUrl = urlsToVisit.shift();

      // Skip if already visited
      if (visitedUrls.has(currentUrl)) {
        continue;
      }

      visitedUrls.add(currentUrl);
      console.log(`📄 Visiting: ${currentUrl}`);

      // Create a new page for each URL
      const page = await context.newPage();

      try {
        // Navigate to the page
        await page.goto(currentUrl, {
          waitUntil: 'networkidle',
          timeout: 30000
        });

        // Wait a bit for any dynamic content
        await page.waitForTimeout(2000);

        // Extract the page title
        const title = await page.title();
        console.log(`  Title: ${title}`);

        // Capture full page screenshot
        const screenshotPath = path.join(__dirname, 'exports', `temp-screenshot-${visitedUrls.size}.png`);
        await page.screenshot({
          path: screenshotPath,
          fullPage: true
        });

        pageScreenshots.push({
          url: currentUrl,
          title: title,
          screenshotPath: screenshotPath,
          pageNumber: visitedUrls.size
        });

        console.log(`  ✅ Captured screenshot\n`);

        // Find all internal links on the page
        const links = await page.$$eval('a[href]', (anchors, base) => {
          return anchors
            .map(a => {
              try {
                const href = a.getAttribute('href');
                if (!href) return null;

                // Create absolute URL
                const url = new URL(href, base);

                // Only include URLs from the same origin
                if (url.origin === new URL(base).origin) {
                  // Remove hash
                  url.hash = '';
                  return url.href;
                }
                return null;
              } catch (e) {
                return null;
              }
            })
            .filter(url => url !== null);
        }, currentUrl);

        // Add new links to the queue
        links.forEach(link => {
          if (!visitedUrls.has(link) && !urlsToVisit.includes(link)) {
            urlsToVisit.push(link);
          }
        });

      } catch (error) {
        console.error(`  ❌ Error processing ${currentUrl}:`, error.message);
      } finally {
        await page.close();
      }
    }

    // Step 2: Create a single combined PDF with all screenshots
    console.log('\n📋 Creating combined PDF document...');
    const combinedPage = await context.newPage();

    // Build HTML with all screenshots
    const combinedHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Accuro Website - Complete Export</title>
        <style>
          @page {
            margin: 0;
          }
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
          }
          .cover-page {
            width: 100%;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            page-break-after: always;
          }
          .cover-page h1 {
            font-size: 48px;
            margin-bottom: 20px;
            text-align: center;
          }
          .cover-page p {
            font-size: 20px;
            opacity: 0.9;
          }
          .toc {
            padding: 40px;
            page-break-after: always;
          }
          .toc h2 {
            color: #2563eb;
            border-bottom: 3px solid #2563eb;
            padding-bottom: 10px;
            margin-bottom: 30px;
          }
          .toc-item {
            margin: 15px 0;
            padding: 15px;
            background: #f3f4f6;
            border-radius: 8px;
            border-left: 4px solid #2563eb;
          }
          .toc-title {
            font-weight: bold;
            color: #1f2937;
            margin-bottom: 5px;
          }
          .toc-url {
            color: #6b7280;
            font-size: 14px;
            word-break: break-all;
          }
          .page-container {
            page-break-after: always;
            position: relative;
          }
          .page-header {
            background: #2563eb;
            color: white;
            padding: 15px 20px;
            font-size: 14px;
          }
          .page-image {
            width: 100%;
            display: block;
          }
        </style>
      </head>
      <body>
        <!-- Cover Page -->
        <div class="cover-page">
          <h1>Accuro Website Export</h1>
          <p>Complete Website Documentation</p>
          <p style="font-size: 16px; margin-top: 40px;">
            ${new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
          <p style="font-size: 14px; opacity: 0.7;">
            ${pageScreenshots.length} pages captured
          </p>
        </div>

        <!-- Table of Contents -->
        <div class="toc">
          <h2>Table of Contents</h2>
          ${pageScreenshots.map((page, index) => `
            <div class="toc-item">
              <div class="toc-title">${index + 1}. ${page.title}</div>
              <div class="toc-url">${page.url}</div>
            </div>
          `).join('')}
        </div>

        <!-- All Page Screenshots -->
        ${pageScreenshots.map((page, index) => {
          const imageData = fs.readFileSync(page.screenshotPath, 'base64');
          return `
            <div class="page-container">
              <div class="page-header">
                Page ${index + 1}: ${page.url}
              </div>
              <img class="page-image" src="data:image/png;base64,${imageData}" />
            </div>
          `;
        }).join('')}
      </body>
      </html>
    `;

    await combinedPage.setContent(combinedHtml, { waitUntil: 'networkidle' });
    await combinedPage.waitForTimeout(2000);

    const combinedPdfPath = path.join(__dirname, 'exports', 'accuro-website-complete.pdf');
    await combinedPage.pdf({
      path: combinedPdfPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px'
      }
    });

    await combinedPage.close();

    // Clean up temporary screenshot files
    console.log('\n🧹 Cleaning up temporary files...');
    pageScreenshots.forEach(page => {
      try {
        fs.unlinkSync(page.screenshotPath);
      } catch (e) {
        // Ignore cleanup errors
      }
    });

    console.log('\n✅ Export completed successfully!');
    console.log(`\n📁 Combined PDF saved to: ${combinedPdfPath}`);
    console.log(`📄 Total pages: ${pageScreenshots.length}`);
    console.log('\nPages included:');
    pageScreenshots.forEach((page, index) => {
      console.log(`  ${index + 1}. ${page.url}`);
    });

  } finally {
    await browser.close();
  }
}

// Run the export
exportWebsiteToPDF()
  .then(() => {
    console.log('\n✨ All done!');
    process.exit(0);
  })
  .catch(error => {
    console.error('\n❌ Error:', error);
    process.exit(1);
  });
