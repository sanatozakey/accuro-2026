# Accuro Website — Official Beamex Partner (Philippines)

Official corporate web platform for **Accuro Inc.**, the exclusive distributor and authorized partner of [Beamex](https://www.beamex.com/) in the Philippines.

## Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS, Lucide Icons, Radix UI
- **Routing**: React Router DOM (with Vercel SPA rewrites)
- **Styling**: Tailwind CSS with custom branding tokens and dark mode support
- **Hosting**: Vercel (automatic CI/CD deployments)

## Project Structure

```
├── public/                # Static assets & images
│   └── images/            # Product photos & official Beamex badges
├── src/
│   ├── components/        # UI components, layout, navigation & badges
│   ├── pages/             # Route views (Home, About, Products, Contact)
│   ├── services/          # API & contact form client
│   └── data/              # Product catalogs & specifications
├── backend/               # Optional Express mailer backend
├── vercel.json            # Vercel deployment & SPA routing rewrites
└── package.json           # Dependencies & build scripts
```

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```
The site will be available at `http://localhost:3000`.

### 3. Production Build
```bash
npm run build
```
Generates an optimized production bundle in the `build/` directory.

## Deployment

The repository is configured for automated deployment with **Vercel**:
- Any commit pushed to the `master` branch triggers an automated build and redeployment.
- `vercel.json` includes client-side SPA rewrites to ensure deep routing (e.g., `/about`, `/contact`, `/products`) functions seamlessly without 404 errors.

