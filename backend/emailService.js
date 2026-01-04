const nodemailer = require('nodemailer');
require('dotenv').config();

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async sendEmail(options) {
    const mailOptions = {
      from: `"Accuro Website" <${process.env.EMAIL_USER}>`,
      to: options.to,
      subject: options.subject,
      html: options.html,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log(`Email sent successfully to ${options.to}`);
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }

  // Send contact form notification to admin
  async sendContactNotification(contactData) {
    // Map inquiry type codes to readable labels
    const inquiryTypeLabels = {
      'product': 'Product Inquiry',
      'quote': 'Request Quote',
      'technical': 'Technical Support',
      'sales': 'Sales',
      'general': 'General Inquiry'
    };

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission - Accuro</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f5f5f5;">
          <tr>
            <td style="padding: 40px 20px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">

                <!-- Header with Logo and Navy Background -->
                <tr>
                  <td style="background: linear-gradient(135deg, #001F3F 0%, #003366 100%); padding: 40px 30px; text-align: center;">
                    <img src="https://uploadthingy.s3.us-west-1.amazonaws.com/hm7mtaNdbWyZ81qScpSM5S/accuro_logo.png" alt="Accuro Logo" style="height: 50px; width: auto; filter: brightness(0) invert(1);" />
                    <h1 style="color: #ffffff; margin: 20px 0 10px 0; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">
                      New Contact Form Submission
                    </h1>
                    <p style="color: #E0E7FF; margin: 0; font-size: 14px;">
                      You have a new inquiry from your website
                    </p>
                  </td>
                </tr>

                <!-- Alert Badge (if quote request) -->
                ${contactData.inquiryType === 'quote' ? `
                <tr>
                  <td style="padding: 20px 30px 0;">
                    <div style="background-color: #FEF3C7; border-left: 4px solid #F59E0B; padding: 12px 16px; border-radius: 4px;">
                      <p style="margin: 0; color: #92400E; font-size: 14px; font-weight: 600;">
                        🎯 Quote Request - Priority Follow-up Required
                      </p>
                    </div>
                  </td>
                </tr>
                ` : ''}

                <!-- Contact Information Section -->
                <tr>
                  <td style="padding: 30px;">
                    <h2 style="color: #001F3F; font-size: 18px; font-weight: 600; margin: 0 0 20px 0; border-bottom: 2px solid #3B82F6; padding-bottom: 10px;">
                      Contact Information
                    </h2>

                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="padding: 10px 0;">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                            <tr>
                              <td style="width: 30px; vertical-align: top;">
                                <span style="font-size: 20px;">👤</span>
                              </td>
                              <td>
                                <p style="margin: 0; font-size: 13px; color: #6B7280; text-transform: uppercase; letter-spacing: 0.5px;">Name</p>
                                <p style="margin: 4px 0 0 0; font-size: 16px; color: #1F2937; font-weight: 600;">${contactData.firstName} ${contactData.lastName}</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <tr>
                        <td style="padding: 10px 0;">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                            <tr>
                              <td style="width: 30px; vertical-align: top;">
                                <span style="font-size: 20px;">📧</span>
                              </td>
                              <td>
                                <p style="margin: 0; font-size: 13px; color: #6B7280; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                                <p style="margin: 4px 0 0 0; font-size: 16px;">
                                  <a href="mailto:${contactData.email}" style="color: #3B82F6; text-decoration: none; font-weight: 500;">${contactData.email}</a>
                                </p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <tr>
                        <td style="padding: 10px 0;">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                            <tr>
                              <td style="width: 30px; vertical-align: top;">
                                <span style="font-size: 20px;">📱</span>
                              </td>
                              <td>
                                <p style="margin: 0; font-size: 13px; color: #6B7280; text-transform: uppercase; letter-spacing: 0.5px;">Phone</p>
                                <p style="margin: 4px 0 0 0; font-size: 16px;">
                                  <a href="tel:${contactData.phone}" style="color: #3B82F6; text-decoration: none; font-weight: 500;">${contactData.phone}</a>
                                </p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      ${contactData.company ? `
                      <tr>
                        <td style="padding: 10px 0;">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                            <tr>
                              <td style="width: 30px; vertical-align: top;">
                                <span style="font-size: 20px;">🏢</span>
                              </td>
                              <td>
                                <p style="margin: 0; font-size: 13px; color: #6B7280; text-transform: uppercase; letter-spacing: 0.5px;">Company</p>
                                <p style="margin: 4px 0 0 0; font-size: 16px; color: #1F2937; font-weight: 500;">${contactData.company}</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      ` : ''}

                      ${contactData.inquiryType ? `
                      <tr>
                        <td style="padding: 10px 0;">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                            <tr>
                              <td style="width: 30px; vertical-align: top;">
                                <span style="font-size: 20px;">📋</span>
                              </td>
                              <td>
                                <p style="margin: 0; font-size: 13px; color: #6B7280; text-transform: uppercase; letter-spacing: 0.5px;">Inquiry Type</p>
                                <p style="margin: 4px 0 0 0;">
                                  <span style="display: inline-block; background-color: #DBEAFE; color: #1E40AF; padding: 4px 12px; border-radius: 12px; font-size: 14px; font-weight: 600;">
                                    ${inquiryTypeLabels[contactData.inquiryType] || contactData.inquiryType}
                                  </span>
                                </p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      ` : ''}

                      ${contactData.productInterest ? `
                      <tr>
                        <td style="padding: 10px 0;">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                            <tr>
                              <td style="width: 30px; vertical-align: top;">
                                <span style="font-size: 20px;">🔧</span>
                              </td>
                              <td>
                                <p style="margin: 0; font-size: 13px; color: #6B7280; text-transform: uppercase; letter-spacing: 0.5px;">Product Interest</p>
                                <p style="margin: 4px 0 0 0; font-size: 16px; color: #1F2937; font-weight: 500;">${contactData.productInterest}</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      ` : ''}
                    </table>
                  </td>
                </tr>

                <!-- Subject & Message Section -->
                ${contactData.subject ? `
                <tr>
                  <td style="padding: 0 30px 30px;">
                    <h2 style="color: #001F3F; font-size: 18px; font-weight: 600; margin: 0 0 15px 0; border-bottom: 2px solid #3B82F6; padding-bottom: 10px;">
                      Subject
                    </h2>
                    <p style="margin: 0; font-size: 16px; color: #1F2937; font-weight: 600;">${contactData.subject}</p>
                  </td>
                </tr>
                ` : ''}

                <tr>
                  <td style="padding: 0 30px 30px;">
                    <h2 style="color: #001F3F; font-size: 18px; font-weight: 600; margin: 0 0 15px 0; border-bottom: 2px solid #3B82F6; padding-bottom: 10px;">
                      Message
                    </h2>
                    <div style="background-color: #F9FAFB; border-left: 4px solid #3B82F6; padding: 20px; border-radius: 4px;">
                      <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${contactData.message}</p>
                    </div>
                  </td>
                </tr>

                <!-- Call to Action Button -->
                <tr>
                  <td style="padding: 0 30px 30px; text-align: center;">
                    <a href="mailto:${contactData.email}?subject=Re: ${encodeURIComponent(contactData.subject || 'Your inquiry')}" style="display: inline-block; background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 6px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 6px rgba(59, 130, 246, 0.2);">
                      Reply to ${contactData.firstName}
                    </a>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background-color: #F9FAFB; padding: 30px; border-top: 1px solid #E5E7EB;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="text-align: center;">
                          <p style="margin: 0 0 10px 0; font-size: 14px; color: #6B7280; font-weight: 600;">
                            Accuro - Instrumentation & Calibration Solutions
                          </p>
                          <p style="margin: 0 0 15px 0; font-size: 13px; color: #9CA3AF;">
                            Unit 2229, Viera Residences, Scout Tuason Avenue<br/>
                            Barangay Obrero, Quezon City, Philippines<br/>
                            📞 +63 9171507737 | 📧 info@accuro.com.ph
                          </p>
                          <p style="margin: 0; font-size: 12px; color: #9CA3AF;">
                            This email was automatically generated from the Accuro website contact form.<br/>
                            Submitted on ${new Date().toLocaleString('en-PH', { timeZone: 'Asia/Manila' })} (PHT)
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    await this.sendEmail({
      to: process.env.NOTIFICATION_EMAIL || 'iynubauhsoj@gmail.com',
      subject: `${contactData.inquiryType === 'quote' ? '🎯 QUOTE REQUEST' : '📧 New Inquiry'} from ${contactData.firstName} ${contactData.lastName}${contactData.company ? ` (${contactData.company})` : ''}`,
      html,
    });
  }
}

module.exports = new EmailService();
