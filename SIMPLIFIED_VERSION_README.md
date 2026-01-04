# Accuro for Use - Simplified Version

This is a streamlined version of the Accuro website with only essential features.

## What's Included

### Pages
- **Home** (`/`) - Homepage with company information
- **Products** (`/products`) - Product catalog with view details links
- **About** (`/about`) - About the company
- **Contact** (`/contact`) - Fully functional contact form

### Features Retained
- Product browsing with search and filtering
- Product categories and descriptions
- Direct links to Beamex website for product details
- Functional contact form with email integration
- Responsive design (mobile, tablet, desktop)
- Currency toggle (PHP/USD)
- Splash screen on first load

### Features Removed
- Shopping cart functionality
- User authentication (login/signup)
- User profiles and dashboards
- Booking/quote system
- Testimonials page
- Admin dashboard
- Product recommendations
- Session tracking

## Key Changes

### Products Page
- Removed "Add to Cart" buttons
- Kept only "View Details" buttons that link to actual Beamex product pages
- Removed mini cart component
- Removed product recommendations
- Simplified call-to-action to only show "Contact Us"

### Navigation
- Desktop: Home | Products | About | Contact
- Mobile: Same four pages in hamburger menu
- Removed all authentication-related links

### Contact Page
- Fully functional contact form
- No authentication required
- Direct email integration via contactService

## Running the Website

### Development
```bash
npm install
npm start
```
The site will run on http://localhost:3000

### Production Build
```bash
npm run build
```
The optimized build will be in the `build/` folder.

### Deployment
You can deploy the contents of the `build/` folder to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting

## File Structure
```
src/
├── components/
│   ├── Layout.tsx          # Main layout wrapper
│   ├── Navbar.tsx          # Simplified navigation
│   ├── Footer.tsx          # Footer component
│   ├── LazyImage.tsx       # Optimized image loading
│   └── SplashScreen.tsx    # Loading screen
├── pages/
│   ├── Home.tsx            # Homepage
│   ├── Products.tsx        # Products catalog
│   ├── About.tsx           # About page
│   └── Contact.tsx         # Contact form
├── data/
│   └── products.ts         # Product data
├── services/
│   ├── api.ts             # API configuration
│   └── contactService.ts   # Contact form service
├── App.tsx                 # Root component
└── AppRouter.tsx           # Route configuration
```

## Notes
- The contact form requires a backend API endpoint configured in `src/services/api.ts`
- Product images are loaded from Beamex's CDN
- All product "View Details" links open Beamex product pages in new tabs
- Build size is ~19.5 KB smaller than the full version due to removed features

## Support
For questions about this simplified version, refer to the main Accuro website documentation.
