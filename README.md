# MauricIA Landing Page

Landing page for MauricIA — an AI analyst for real estate development in Spain.

## Tech Stack

- **Framework**: Next.js 16 (App Router, static export)
- **Styling**: Tailwind CSS 4
- **Fonts**: DM Serif Display + DM Sans (Google Fonts via `next/font`)
- **Form**: Formspree (POST to `https://formspree.io/f/xyzgoldr` — replace with your form ID)
- **Deployment**: Azure Static Web Apps via GitHub Actions

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static output is generated in the `out/` directory.

## Environment Variables

No environment variables required for the landing page itself.

For Azure deployment, add the `AZURE_STATIC_WEB_APPS_API_TOKEN` secret to the GitHub repository settings.

## Deployment

1. Create an Azure Static Web App resource in the Azure Portal
2. Connect it to the `kevinleonj/mauricia-landing` GitHub repository
3. Add the deployment token as a GitHub secret named `AZURE_STATIC_WEB_APPS_API_TOKEN`
4. Pushes to `main` will auto-deploy via the GitHub Actions workflow

## Form Setup

Replace the placeholder Formspree form ID `xyzgoldr` in `src/components/Contacto.tsx` with your actual Formspree form ID.
