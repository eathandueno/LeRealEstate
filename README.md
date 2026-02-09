# Le Group Realty — Marketing Website

A production-ready marketing website for **Le Group Realty**, associated with **208 Real Estate**, built to generate qualified leads in the Boise & Treasure Valley market.

## Tech Stack

- **Next.js 16** (App Router) + React 19 + TypeScript
- **Tailwind CSS 4**
- **Supabase** for lead storage
- **Zod** for form validation
- **React Hook Form** for form management
- **Lucide React** for icons
- Vercel-ready deployment

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy the example env file and fill in your values:

```bash
cp .env.example .env.local
```

Required variables:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous/public key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-only) |
| `NEXT_PUBLIC_SITE_URL` | Your site URL (e.g., `https://legrouprealty.com`) |

> **Note:** The site will run without Supabase configured — form submissions will log to the console instead.

### 3. Create the Supabase table

In your Supabase project, go to **SQL Editor** and run the contents of:

```
supabase/migration.sql
```

This creates the `leads` table with proper Row Level Security policies.

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 5. Build for production

```bash
npm run build
npm start
```

## Deploying to Vercel

1. Push your repo to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Add your environment variables in Vercel's project settings.
4. Deploy — Vercel auto-detects Next.js.

## Project Structure

```
src/
├── app/
│   ├── api/leads/route.ts    # Lead submission API endpoint
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── listings/page.tsx
│   ├── privacy/page.tsx
│   ├── services/page.tsx
│   ├── success/page.tsx
│   ├── layout.tsx            # Root layout (navbar + footer)
│   ├── page.tsx              # Home page
│   ├── globals.css
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── LeadForm.tsx
│   ├── ListingCard.tsx
│   ├── Navbar.tsx
│   ├── ServicesGrid.tsx
│   ├── StickyCTA.tsx
│   └── Testimonials.tsx
├── data/
│   ├── faqs.ts
│   ├── listings.ts           # Mock listing data (replace with MLS feed)
│   └── testimonials.ts
└── lib/
    ├── rate-limit.ts
    ├── schemas.ts             # Zod validation schemas
    ├── seo.ts                 # SEO metadata helper
    ├── supabase-client.ts     # Client-side Supabase
    └── supabase-server.ts     # Server-side Supabase (service role)
supabase/
└── migration.sql              # SQL to create leads table
```

## Lead Capture

- Forms on `/` (compact) and `/contact` (full)
- Validated with Zod (fullName, phone required; email recommended)
- Honeypot field for spam protection
- In-memory rate limiting (5 requests/minute per IP)
- Saves to Supabase `leads` table (or logs to console if not configured)
- Email notification placeholder (integrate Resend, SendGrid, etc.)

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |
