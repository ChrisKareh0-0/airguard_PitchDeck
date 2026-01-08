# AirGuard Landing Page

Next.js landing page for AirGuard's AI-driven network management platform.

## Tech Stack

- **Framework**: Next.js 15.3.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Charts**: Recharts
- **Deployment**: Vercel

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view.

## Project Structure

```
src/
├── app/
│   ├── page.tsx        # Main landing page
│   ├── layout.tsx      # Root layout
│   └── globals.css     # Global styles
├── components/         # React components
└── data/
    └── content.ts     # All content data
```

## Development

- **Content**: Edit `src/data/content.ts` to update all text content
- **Styling**: Tailwind classes in components
- **Assets**: Place in `public/` directory
- **Linting**: `npm run lint`

## Deployment

Deploy to Vercel or any Next.js-compatible platform.

---

**AirGuard** - AI-driven network management for MENA ISPs
