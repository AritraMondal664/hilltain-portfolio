# Hilltain Group - Premium Engineering-Tech Website

A production-ready premium website built with Next.js 15, TypeScript, Tailwind CSS, GSAP animations, and Sanity CMS.

## 🚀 Features

- **Premium Design**: Dark aesthetic with electric blue accents and glassmorphism
- **High Performance**: Optimized for Lighthouse 90+
- **Smooth Animations**: GSAP ScrollTrigger, Framer Motion, and Lenis smooth scroll
- **Responsive**: Mobile-first design across all devices
- **CMS Integration**: Fully integrated Sanity CMS for content management
- **SEO Optimized**: Complete meta tags, sitemap, and schema markup
- **Accessibility**: WCAG 2.1 AA compliant

## 📋 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP, Framer Motion, Lenis
- **CMS**: Sanity
- **UI Components**: Shadcn UI, React Icons
- **Performance**: Image optimization, Code splitting, Lazy loading

## 🏗️ Project Structure

```
├── app/                 # Next.js app router
├── components/
│   ├── sections/       # Page sections
│   ├── animations/     # Animation components
│   └── ui/            # Reusable UI components
├── lib/               # Utilities and helpers
├── hooks/             # Custom React hooks
├── styles/            # Global styles
├── types/             # TypeScript types
├── utils/             # Helper functions
├── public/            # Static assets
└── sanity/            # CMS configuration
```

## 🎯 Pages

- **Home** - Hero section with services overview
- **About** - Company information
- **Services** - Bento grid of all services
- **Why Choose Us** - Key features and advantages
- **Industries** - Marquee of served industries
- **Process** - Development workflow
- **Tech Stack** - Technologies used
- **Contact** - Contact form and information
- **Privacy Policy** - Privacy policy page
- **Footer** - Company info and links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd Company_website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Copy .env.local and update with your values
NEXT_PUBLIC_SITE_URL=your_site_url
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors

Update the color system in `tailwind.config.ts`:
- `brand-blue`: Primary accent (#4D8DFF)
- `brand-dark`: Primary dark (#050816)
- `brand-dark-secondary`: Secondary dark (#0D1324)

### Typography

Fonts are configured in `tailwind.config.ts`:
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Animations

GSAP animations are handled in `lib/animations.ts` and custom hooks in `hooks/useAnimations.ts`.

## 🔧 Configuration Files

- `next.config.ts` - Next.js configuration with image optimization and headers
- `tailwind.config.ts` - Tailwind CSS theme configuration
- `tsconfig.json` - TypeScript configuration with path aliases
- `.eslintrc.json` - ESLint configuration

## 📊 Performance Optimization

- Image optimization with Next.js Image component
- Code splitting and dynamic imports
- GSAP animation cleanup
- Lazy loading of components
- CSS-in-JS optimization
- CSS Modules support

## 🔒 Security

- CSP headers configured
- XSS protection enabled
- HTTPS enforcement (production)
- CORS policies
- Input validation on forms

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Follow the established code style and component patterns.

## 📄 License

All rights reserved © Hilltain Group 2024

## 📞 Support

For support, contact: hello@hilltaingroup.com
# hilltain-portfolio
