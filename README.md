# BUCK3TS Mobile Detailing Website

A premium, animation-rich website for BUCK3TS Mobile Detailing services in Des Moines Metro and surrounding areas.

## Features

- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion animations for engaging interactions
- **Modern UI**: Premium dark theme with blue accents extracted from the BUCK3TS logo
- **Interactive Elements**:
  - Before/After slider for gallery showcase
  - Animated service cards with hover effects
  - Pricing tiers with popular plan highlight
  - Functional booking form
  - Contact form with validation
- **Performance Optimized**: Lazy-loaded images, optimized animations
- **SEO Ready**: Meta tags, Open Graph, and semantic HTML

## Tech Stack

- **Framework**: Next.js 15+ with TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Intersection Observer**: React Intersection Observer for scroll animations

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and theme
├── components/
│   ├── navbar.tsx          # Navigation bar
│   ├── hero.tsx            # Hero section
│   ├── about.tsx           # About section
│   ├── services.tsx        # Services showcase
│   ├── pricing.tsx         # Pricing plans
│   ├── gallery.tsx         # Gallery with before/after
│   ├── booking.tsx         # Booking form
│   ├── contact.tsx         # Contact section
│   └── footer.tsx          # Footer
└── public/
    └── images/             # Gallery and hero images
\`\`\`

## Getting Started

### Installation

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Environment Variables

No environment variables required for basic functionality. For production deployment, consider adding:

- Email service integration for form submissions
- Analytics tracking
- CMS integration for dynamic content

## Customization

### Colors

The color theme is defined in `app/globals.css` using CSS custom properties. The primary colors are extracted from the BUCK3TS logo:

- **Background**: Dark charcoal (`oklch(0.08 0 0)`)
- **Accent**: Blue (`oklch(0.6 0.25 250)`)
- **Foreground**: White (`oklch(0.98 0 0)`)

### Images

Replace placeholder images in the `public/` directory with actual detailing photos:

- Hero background
- Before/After gallery pairs
- Recent work gallery

### Contact Information

Update contact details in:

- `components/navbar.tsx` - Book Now button
- `components/hero.tsx` - Call Now button
- `components/contact.tsx` - Contact info section
- `components/footer.tsx` - Footer contact details

## Sections

### 1. Navbar
- Transparent initially, becomes frosted glass on scroll
- Responsive mobile menu
- Smooth link animations

### 2. Hero
- Fullscreen background with gradient overlay
- Animated particles
- Dual CTA buttons (Book Service, Call Now)
- Scroll indicator

### 3. About
- Split layout with image and content
- Animated stat counters
- Company story and values

### 4. Services
- 6 service cards with icons
- Hover animations and glow effects
- Quick booking links

### 5. Pricing
- 3-tier pricing structure
- Popular plan highlight
- Feature lists with checkmarks

### 6. Gallery
- Interactive before/after slider
- Masonry grid layout
- Lightbox modal for enlarged views

### 7. Booking Form
- Complete booking form with validation
- Vehicle type and service selection
- Date/time picker
- Success message

### 8. Contact
- Contact information display
- Quick message form
- Phone, email, and location details

### 9. Footer
- Navigation links
- Contact information
- Copyright notice

## Performance

- Lighthouse score target: 90+
- Lazy-loaded images
- Optimized animations
- Minimal JavaScript bundle

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Future Enhancements

- [ ] Backend integration for form submissions
- [ ] Online booking system with calendar
- [ ] Customer testimonials section
- [ ] Blog for detailing tips
- [ ] Mobile app
- [ ] Payment integration for online booking

## Contact

**BUCK3TS Mobile Detailing**
- Phone: (641) 680-6890
- Email: info@buck3ts.com
- Service Area: Des Moines Metro & Surrounding Areas

## License

All rights reserved © 2025 BUCK3TS Mobile Detailing
