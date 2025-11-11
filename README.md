# Santums Build - Modern Construction & Logistics Platform

A production-grade Next.js website for **Santums Build**, a platform connecting the construction and transport industries with suppliers, contractors, and technology providers.

🌐 **Live Site:** https://santums.com

## ✨ Features

### Frontend
- **🎨 Modern Dark Theme**: Deep navy/midnight background (#0A0F1F) with orange gradient accents
- **🎬 Cinematic Animations**: Advanced Framer Motion effects throughout
  - Multi-layer parallax scrolling
  - Mouse-tracking glow effects
  - 3D card tilt animations
  - Staggered scroll reveals
  - Floating atmospheric particles
  - Smooth page transitions
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **🗺️ Multi-Page Navigation**: Home, About, Partners, and Contact pages

### Backend
- **📧 Working Contact Form**: Full email delivery via Nodemailer
- **🤝 Partner Sign-Up Modal**: Animated modal with form validation
- **🛡️ Security Features**:
  - Server-side validation with Zod
  - Input sanitization (XSS prevention)
  - IP-based rate limiting
  - Environment variable protection
- **🔔 Toast Notifications**: Real-time feedback with Sonner

## 🎨 Design System

### Colors
- **Background**: `#0A0F1F` (Midnight)
- **Surface**: `#151B2E`
- **Primary Orange**: `#FF6B00`
- **Primary Light**: `#FFA733`
- **Gradient**: Linear gradient from `#FF6B00` to `#FFA733`

### Typography
- **Primary Font**: Inter
- **Display Font**: Poppins (headings)

## 📦 Tech Stack

### Frontend
- **Framework**: Next.js 16.0.1 (App Router)
- **Styling**: Tailwind CSS 3.4.14
- **Animations**: Framer Motion 12.23.24
- **Icons**: Lucide React
- **UI Components**: Custom ShadCN-inspired components
- **Language**: TypeScript

### Backend
- **Email**: Nodemailer 7.0.10
- **Validation**: Zod 4.1.12
- **Forms**: React Hook Form 7.66.0
- **Notifications**: Sonner 2.0.7

### Deployment
- **Platform**: Cloudflare Pages
- **Domain**: santums.com
- **Runtime**: Node.js 18
- **SSL**: Cloudflare SSL (Auto-provisioned)

## 🗂️ Project Structure

```
santums_site/
├── app/
│   ├── api/
│   │   ├── contact/route.ts     # Contact form API
│   │   └── partner/route.ts     # Partner form API
│   ├── components/
│   │   ├── Navbar.tsx           # Navigation with scroll effects
│   │   ├── Hero.tsx             # Hero with parallax & modal trigger
│   │   ├── TrustedBy.tsx        # Company logos & stats
│   │   ├── Features.tsx         # 3D tilt feature cards
│   │   ├── About.tsx            # About section with image parallax
│   │   ├── CTA.tsx              # Call-to-action with animations
│   │   ├── Footer.tsx           # Footer with links
│   │   ├── PartnerModal.tsx     # Partnership form modal
│   │   ├── PageTransition.tsx   # Route transition wrapper
│   │   └── AtmosphericBackground.tsx  # Floating particles
│   ├── about/page.tsx           # About page
│   ├── partners/page.tsx        # Partners page
│   ├── contact/page.tsx         # Contact page with working form
│   ├── layout.tsx               # Root layout with toast provider
│   ├── page.tsx                 # Homepage
│   └── globals.css              # Global styles
├── components/ui/               # Reusable UI components
├── lib/utils.ts                 # Utility functions
├── public/
│   ├── robots.txt               # SEO robots file
│   ├── sitemap.xml              # SEO sitemap
│   ├── _headers                 # Cloudflare security headers
│   └── _redirects               # Cloudflare redirects
├── .env.local.example           # Environment template
├── DEPLOYMENT.md                # Cloudflare deployment guide
├── BACKEND_SETUP.md             # Backend configuration guide
├── FEATURES.md                  # Complete feature list
├── QUICKSTART.md                # Quick setup guide
└── PRE_DEPLOYMENT_CHECKLIST.md # Deployment checklist
```

## 🚦 Getting Started

### Quick Start (Local Development)

1. **Install dependencies:**
```bash
npm install
```

2. **Configure environment variables:**
```bash
# Copy template
cp .env.local.example .env.local

# Edit .env.local with your email credentials
# See BACKEND_SETUP.md for Gmail App Password setup
```

3. **Run development server:**
```bash
npm run dev
```

4. **Open in browser:**
```
http://localhost:3000
```

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Start production server locally
npm start
```

### Deploy to Cloudflare Pages

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for complete deployment guide.

**Quick Deploy:**
1. Push to GitHub
2. Connect Cloudflare Pages to repository
3. Configure environment variables
4. Deploy automatically
5. Configure custom domain

**See also:**
- [QUICKSTART.md](./QUICKSTART.md) - Fast setup guide
- [PRE_DEPLOYMENT_CHECKLIST.md](./PRE_DEPLOYMENT_CHECKLIST.md) - Pre-deploy checklist
- [BACKEND_SETUP.md](./BACKEND_SETUP.md) - Email configuration

## 📄 Pages

- **Home** (`/`) - Landing page with cinematic animations
  - Hero with mouse-tracking glow
  - Trusted companies & statistics
  - 3D tilt feature cards
  - About section with image parallax
  - Call-to-action with animated gradients
  - Floating atmospheric particles

- **About** (`/about`) - Mission, values, and detailed information

- **Partners** (`/partners`) - Partnership opportunities and benefits

- **Contact** (`/contact`) - Working contact form
  - React Hook Form validation
  - Email delivery via Nodemailer
  - Toast notifications
  - Rate limiting

## 🎯 Key Features

### Cinematic Animations
- **Multi-layer Parallax**: Different scroll rates for depth
- **Mouse Tracking**: Glow effect follows cursor
- **3D Card Tilt**: Interactive hover with rotateX/rotateY
- **Staggered Reveals**: Sequential element animations
- **Page Transitions**: Smooth route changes with AnimatePresence
- **Atmospheric Particles**: 20 floating particles with gradient mesh

### Forms & Backend
- **Contact Form**: Name, email, message → sends to configured email
- **Partner Modal**: Company name, email, industry, message
- **Validation**: Client-side (React Hook Form) + Server-side (Zod)
- **Security**: Rate limiting, input sanitization, XSS prevention
- **Notifications**: Toast feedback with Sonner

### Performance
- **Cloudflare Pages**: Global CDN distribution
- **Image Optimization**: Modern formats with lazy loading
- **Code Splitting**: Automatic by Next.js
- **Caching**: Aggressive caching for static assets
- **Security Headers**: X-Frame-Options, CSP, etc.

## 🛠️ Customization

### Colors
Edit `tailwind.config.js`:
```js
colors: {
  midnight: '#0A0F1F',
  primary: '#FF6B00',
  // ... modify as needed
}
```

### Animations
Edit Framer Motion variants in components:
```tsx
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
```

### Email Templates
Edit HTML templates in `app/api/contact/route.ts` and `app/api/partner/route.ts`

## � Performance

- **PageSpeed Score**: 90+ (target)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3s
- **Cumulative Layout Shift**: < 0.1

Optimized with:
- Cloudflare CDN
- Image optimization
- Code splitting
- Brotli compression
- Aggressive caching

## 🔐 Security

- HTTPS enforced
- Security headers configured
- Input sanitization
- Rate limiting on forms
- XSS prevention
- Environment variables secured
- CORS protection

## 📈 SEO

- Semantic HTML structure
- Meta tags on all pages
- Open Graph tags
- robots.txt configured
- sitemap.xml included
- Fast load times
- Mobile-friendly

## 🆘 Support & Documentation

- **Quick Setup**: [QUICKSTART.md](./QUICKSTART.md)
- **Deployment**: [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Backend Config**: [BACKEND_SETUP.md](./BACKEND_SETUP.md)
- **Feature List**: [FEATURES.md](./FEATURES.md)
- **Pre-Deploy Checklist**: [PRE_DEPLOYMENT_CHECKLIST.md](./PRE_DEPLOYMENT_CHECKLIST.md)

## 🐛 Troubleshooting

Common issues and solutions:

**Forms not sending email:**
- Check `.env.local` configuration
- Verify Gmail App Password
- Ensure 2FA enabled on Gmail
- Check Cloudflare environment variables

**Build errors:**
- Run `npm run build` locally first
- Check for TypeScript errors
- Verify all dependencies installed

**Animations not working:**
- Check Framer Motion is installed
- Verify browser console for errors
- Test in different browsers

## �📝 License

© 2025 Santums Build. All rights reserved.

---

**Built with:**
- Next.js 16 + App Router
- Tailwind CSS 3.4
- Framer Motion 12
- Cloudflare Pages
- TypeScript 5

**Deployed at:** https://santums.com
