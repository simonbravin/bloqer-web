# Bloqer — Marketing Website

Marketing website for [Bloqer](https://bloqer.app), the construction ERP for Latin America.

## Tech Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS 4**
- **Framer Motion** for subtle animations
- **Lucide React** for icons

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
pnpm build
pnpm start
```

## How to Customize

### Portal URLs

All portal URLs (login, register) are centralized in:

```
src/lib/constants.ts
```

Update these values:

| Constant       | Purpose              |
| -------------- | -------------------- |
| `PORTAL_URL`   | Portal base URL      |
| `LOGIN_URL`    | Login redirect       |
| `REGISTER_URL` | Registration redirect|
| `WHATSAPP_URL` | WhatsApp CTA link    |
| `SITE_URL`     | Production site URL  |

### WhatsApp Number

Change `WHATSAPP_URL` and `WHATSAPP_NUMBER` in `src/lib/constants.ts`.

### Screenshots / Images

The site uses a `ScreenshotPlaceholder` component throughout. To replace with real screenshots:

1. Add your images to `public/screenshots/`
2. Replace `<ScreenshotPlaceholder>` components with `<Image>` from `next/image`
3. The placeholder component is at `src/components/ui/ScreenshotPlaceholder.tsx`

### Logo & Favicon

- Logo: `public/bloqer-logo.png`
- Favicon: `public/bloqer-favicon.png`
- Referenced in `src/app/layout.tsx` (metadata.icons) and layout components

### Pricing

Edit pricing tiers in `src/app/precios/PreciosContent.tsx` — the `PLANS` array.

### Modules

Edit module content in `src/app/modulos/ModulosContent.tsx` — the `MODULES` array.

### SEO

- Per-page metadata: each `page.tsx` exports `metadata`
- Global defaults: `src/app/layout.tsx`
- `public/robots.txt` and `public/sitemap.xml`

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Header + Footer + WhatsApp)
│   ├── page.tsx            # Home
│   ├── producto/           # Product page
│   ├── modulos/            # Modules page
│   ├── precios/            # Pricing page
│   ├── seguridad/          # Security page
│   ├── nosotros/           # About page
│   ├── contacto/           # Contact page
│   └── api/contact/        # Contact form API route
├── components/
│   ├── layout/             # Header, Footer, WhatsAppButton
│   ├── home/               # Home page sections
│   └── ui/                 # Shared UI components
└── lib/
    ├── constants.ts        # All configurable values
    └── utils.ts            # cn() helper
```
