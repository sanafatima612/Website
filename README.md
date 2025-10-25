# MIUX Studio Portfolio Website

A complete single-page portfolio website for MIUX Studio, a UX/UI design boutique. Built with Next.js 15, featuring elegant animations, smooth scrolling, and a responsive design with a sophisticated beige and brown color scheme.

## Features

- **Responsive Design**: Mobile-first approach with breakpoints at 320px, 768px, and 1024px
- **Smooth Scrolling**: CSS smooth scroll behavior with JavaScript fallback for anchor links
- **Scroll Animations**: Intersection Observer API for fade-in effects on scroll
- **Typography**: Playfair Display for headings, Inter for body text
- **Color Scheme**: Beige background (#f0e6d2), dark brown text (#2c1810)
- **Performance Optimized**: Next.js Image optimization, lazy loading for below-fold content
- **SEO Ready**: Proper meta tags, semantic HTML, and descriptive alt texts

## Sections

1. **Hero Section**: Full-viewport introduction with studio name and contact
2. **Mission Section**: Services overview with 4-column grid (responsive)
3. **Featured Work**: Portfolio showcase with project highlights
4. **Process Section**: Two-column design process explanation
5. **Testimonials**: Client feedback with profile images
6. **About Section**: Studio information and mission statement
7. **Contact/Footer**: Call-to-action and footer information

## Getting Started

Install dependencies:

```bash
npm install
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the site.

Build for production:

```bash
npm run build
```

## Deployment

This site is optimized for deployment to:

- **Vercel**: Push to GitHub and connect to Vercel for automatic deployments
- **Netlify**: Build command: `npm run build`, Publish directory: `.next`
- **Other platforms**: Any platform that supports Next.js static exports

## Project Structure

```
src/
├── app/
│   ├── components/      # Reusable components (navbar, transitions)
│   ├── contact/         # Contact page
│   ├── works/           # Works page
│   ├── globals.css      # Global styles
│   ├── layout.js        # Root layout with fonts
│   └── page.js          # Homepage
└── utils/               # Utility functions
```

## Technologies

- Next.js 15.4.6
- React 19.1.0
- Tailwind CSS 4
- GSAP 3.13.0
- Lenis 1.3.8 (smooth scroll)
- Google Fonts (Playfair Display, Inter)
