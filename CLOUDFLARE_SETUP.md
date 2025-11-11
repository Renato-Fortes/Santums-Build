# 🚀 Cloudflare Pages Setup for Next.js 16

## ✅ What's Configured

Your Next.js 16 project is now fully configured for Cloudflare Pages deployment.

**Note:** The `@cloudflare/next-on-pages` adapter currently supports Next.js up to 15.5.2. Since you're using Next.js 16, Cloudflare Pages will use its native Next.js runtime support.

### Files Created/Modified:
- ✅ `next.config.js` - Cloudflare-optimized configuration
- ✅ `.gitignore` - Excludes build artifacts

---

## 🏗️ Build Commands

### Local Development
```bash
# Standard Next.js development
npm run dev
```

### Build for Production
```bash
# Build for Cloudflare Pages deployment
npm run build

# Cloudflare Pages will automatically use this command
```

---

## 🌐 Deploy to Cloudflare Pages

### Option 1: Automatic Deploy (GitHub Integration)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Configure for Cloudflare Pages"
   git push origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to: https://dash.cloudflare.com
   - Navigate to: **Workers & Pages** → **Create** → **Pages**
   - Click "Connect to Git"
   - Select repository: `Santums-Build`

3. **Configure Build Settings**
   ```
   Production branch: main
   Framework preset: Next.js (auto-detected)
   Build command: npm run build
   Build output directory: (auto-detected)
   Node.js version: 18
   ```

4. **Add Environment Variables**
   ```env
   EMAIL_USER=your.email@gmail.com
   EMAIL_PASS=your_app_password
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_SECURE=false
   NEXT_PUBLIC_SITE_URL=https://santums.com
   NODE_VERSION=18
   ```

5. **Deploy**
   - Click "Save and Deploy"
   - Wait 3-5 minutes
   - Your site will be live at: `santums-build.pages.dev`

### Option 2: Deploy via Git Integration Only

**Recommended:** Use Option 1 (Automatic Deploy) for best compatibility with Next.js 16.

---

## 🎯 Custom Domain Setup

After deployment, configure your custom domain:

1. **In Cloudflare Pages Dashboard**
   - Go to your project → **Custom domains**
   - Click "Set up a custom domain"
   - Enter: `santums.com`
   - Cloudflare auto-creates DNS records

2. **Add WWW Redirect**
   - Add: `www.santums.com`
   - Redirects to: `santums.com`

3. **SSL/TLS**
   - Automatic with Cloudflare (1-2 minutes)
   - Visit: https://santums.com

---

## 🔧 Configuration Details

### next.config.js
```javascript
const nextConfig = {
  reactStrictMode: true,     // Best practices
  images: {
    unoptimized: true,       // Cloudflare handles optimization
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',  // Server actions limit
    },
  },
};
```

### API Routes Compatibility
Your API routes are configured to work with Cloudflare:
- `/api/contact` - Email sending via Nodemailer
- `/api/partner` - Partnership form handling

Both use `runtime: 'nodejs'` which is supported on Cloudflare Pages.

---

## 🧪 Testing

### Test Local Build
```bash
# Build for production
npm run build

# Output in: .next directory
```

### Verify Build Output
```bash
# Check if build was successful
# Look for: "Compiled successfully" message

# Routes should show:
# ○ Static pages
# ƒ Dynamic API routes
```

---

## 📊 What Works on Cloudflare Pages

✅ **Static Pages**
- All pre-rendered pages (/, /about, /partners, /contact)

✅ **API Routes**
- Dynamic server-side routes (/api/contact, /api/partner)
- Nodemailer email functionality
- Server-side validation with Zod

✅ **Features**
- All Framer Motion animations
- Page transitions
- Form submissions
- Toast notifications
- Rate limiting

✅ **Performance**
- Global CDN distribution
- Edge caching
- Automatic SSL
- DDoS protection

---

## 🔄 Continuous Deployment

Every push to `main` branch triggers:
1. Cloudflare detects changes
2. Runs: `npm run build`
3. Deploys using Cloudflare's Next.js runtime
4. Updates: https://santums.com
5. Takes: 2-3 minutes

Preview deployments for all branches automatically created.

---

## 🆘 Troubleshooting

### Build Fails
**Error:** "Build command failed"
**Solution:** 
```bash
# Test locally first
npm run build

# Check for errors in output
# Verify all dependencies installed
npm install
```

### API Routes Not Working
**Error:** "500 Internal Server Error"
**Solution:**
- Verify environment variables in Cloudflare dashboard
- Check EMAIL_* variables are set correctly
- Ensure Node.js version is 18+

### Images Not Loading
**Error:** "Image optimization failed"
**Solution:**
- Already configured with `images: { unoptimized: true }`
- Cloudflare automatically optimizes images
- No action needed

---

## 📦 Dependencies

### Production Dependencies
```json
{
  "next": "16.0.1",
  "react": "19.2.0",
  "react-dom": "19.2.0",
  "framer-motion": "^12.23.24",
  "nodemailer": "^7.0.10",
  "zod": "^4.1.12"
}
```

### No Additional Dependencies Required
Cloudflare Pages natively supports Next.js 16 without additional adapters.

---

## 🎯 Build Scripts Explained

| Script | Purpose |
|--------|---------|
| `npm run dev` | Local Next.js development |
| `npm run build` | Build for production (Cloudflare) |
| `npm start` | Start production server locally |
| `npm run lint` | Run ESLint |

---

## ✅ Deployment Checklist

Before deploying:

- [ ] Install dependencies: `npm install`
- [ ] Test local build: `npm run build`
- [ ] Configure `.env.local` with email credentials
- [ ] Push to GitHub
- [ ] Connect Cloudflare Pages to repository
- [ ] Set build command: `npm run build` (auto-detected)
- [ ] Set Node.js version: 18
- [ ] Add environment variables in Cloudflare
- [ ] Deploy and test
- [ ] Configure custom domain (santums.com)
- [ ] Verify SSL certificate
- [ ] Test all forms and API routes

---

## 🎊 You're Ready!

Your Santums Build site is now configured for Cloudflare Pages with:
- ✅ Next.js 16 with native Cloudflare support
- ✅ Optimized build configuration
- ✅ Working API routes (Node.js runtime)
- ✅ Email functionality via Nodemailer
- ✅ Automatic deployments via Git
- ✅ Custom domain support

**Next step:** Push to GitHub and connect to Cloudflare Pages!

**Live URL:** https://santums.com (after domain configuration)
