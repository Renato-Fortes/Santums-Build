# 🚀 Cloudflare Pages Deployment Guide

Complete step-by-step guide to deploy Santums Build to Cloudflare Pages with custom domain **santums.com**.

---

## 📋 Pre-Deployment Checklist

### ✅ Local Setup Complete
- [x] Next.js 16 configured for Cloudflare Pages
- [x] API routes using Node.js runtime
- [x] Environment variables template created
- [x] robots.txt and sitemap.xml added
- [x] Build scripts optimized

### 🔧 What You Need
1. **Cloudflare Account** with santums.com domain registered
2. **GitHub Account** to host repository
3. **Gmail App Password** for email functionality (optional for initial deployment)

---

## 🎯 Step 1: Prepare Git Repository

### Create GitHub Repository

```bash
# Initialize git if not already done
git init

# Create .gitignore (should already exist, verify it includes):
# - .next/
# - node_modules/
# - .env.local
# - .env*.local
# - *.log

# Add all files
git add .

# Commit
git commit -m "Initial commit: Santums Build production-ready"

# Create repository on GitHub
# Go to: https://github.com/new
# Repository name: santums-build (or your preference)
# Visibility: Private or Public

# Add remote and push
git remote add origin https://github.com/YOUR_USERNAME/santums-build.git
git branch -M main
git push -u origin main
```

---

## 🌐 Step 2: Deploy to Cloudflare Pages

### A. Create New Project

1. **Go to Cloudflare Dashboard**
   - Navigate to: https://dash.cloudflare.com
   - Select: **Workers & Pages** → **Create application** → **Pages**

2. **Connect to GitHub**
   - Click "Connect to Git"
   - Authorize Cloudflare to access your GitHub
   - Select repository: `santums-build`

3. **Configure Build Settings**
   ```
   Production branch: main
   Framework preset: Next.js
   Build command: npm run build
   Build output directory: .next
   Root directory: (leave empty)
   ```

4. **Environment Variables** (Critical!)
   Click "Add variable" and add the following:

   ```env
   # Email Configuration (Required)
   EMAIL_USER=your.email@gmail.com
   EMAIL_PASS=your_16_char_app_password
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_SECURE=false

   # Site URL
   NEXT_PUBLIC_SITE_URL=https://santums.com

   # Node.js Version (Important!)
   NODE_VERSION=18
   ```

   **Gmail App Password Setup:**
   - Go to: https://myaccount.google.com/security
   - Enable 2-Factor Authentication
   - Navigate to: 2-Step Verification → App passwords
   - Generate app password for "Mail"
   - Copy the 16-character password (no spaces)
   - Use as `EMAIL_PASS`

5. **Deploy**
   - Click "Save and Deploy"
   - Wait 3-5 minutes for initial build
   - You'll get a temporary URL like: `santums-build-xxx.pages.dev`

### B. Verify Initial Deployment

Visit your temporary `.pages.dev` URL and test:
- ✅ Homepage loads with animations
- ✅ Navigation works (/about, /partners, /contact)
- ✅ Forms display correctly
- ✅ Page transitions work

**Note:** Email functionality won't work until you configure the custom domain and verify DNS.

---

## 🌍 Step 3: Configure Custom Domain (santums.com)

### A. Add Custom Domain

1. **In Cloudflare Pages Project**
   - Go to your project → **Custom domains** tab
   - Click "Set up a custom domain"
   - Enter: `santums.com`
   - Click "Continue"

2. **DNS Configuration (Automatic)**
   - Cloudflare will automatically create the required DNS records
   - If santums.com is already in your Cloudflare account, it will be instant
   - The CNAME record will point to your `.pages.dev` URL

3. **Add WWW Redirect** (Optional but Recommended)
   - Click "Set up a custom domain" again
   - Enter: `www.santums.com`
   - Cloudflare will create a redirect from www → santums.com

### B. Verify DNS Records

1. Go to: **Cloudflare Dashboard** → **santums.com** → **DNS** → **Records**

2. Verify these records exist:
   ```
   Type: CNAME
   Name: santums.com (or @)
   Content: santums-build-xxx.pages.dev
   Proxy status: Proxied (orange cloud)

   Type: CNAME
   Name: www
   Content: santums-build-xxx.pages.dev
   Proxy status: Proxied (orange cloud)
   ```

### C. SSL Certificate

- **Automatically enabled** by Cloudflare
- Wait 1-2 minutes for certificate provisioning
- Visit: https://santums.com
- Verify green padlock in browser

---

## 🧪 Step 4: Post-Deployment Testing

### A. Test All Pages

Visit each page and verify functionality:

```
✅ https://santums.com/          - Homepage with animations
✅ https://santums.com/about     - About page
✅ https://santums.com/partners  - Partners page
✅ https://santums.com/contact   - Contact form page
```

### B. Test Forms

**Contact Form:**
1. Go to: https://santums.com/contact
2. Fill in all fields (name, email, message)
3. Submit form
4. Verify toast notification appears
5. Check your EMAIL_USER inbox for submission

**Partner Modal:**
1. Go to: https://santums.com/
2. Click "Partner With Us" button
3. Fill in company details
4. Select industry from dropdown
5. Submit form
6. Verify success toast and modal closes
7. Check email inbox

### C. Test Animations

- ✅ Hero parallax on scroll
- ✅ Mouse-tracking glow effect
- ✅ 3D tilt on feature cards
- ✅ Floating particles in background
- ✅ Page transitions between routes
- ✅ Staggered logo animations

### D. Test Responsive Design

Test on multiple devices:
- 📱 Mobile (< 768px)
- 📱 Tablet (768px - 1024px)
- 💻 Desktop (> 1024px)

Use browser DevTools or real devices.

---

## ⚡ Step 5: Cloudflare Optimizations

### A. Enable Speed Optimizations

1. **Go to:** Cloudflare Dashboard → santums.com → **Speed** → **Optimization**

2. **Enable:**
   - ✅ Auto Minify: JavaScript, CSS, HTML
   - ✅ Brotli compression
   - ✅ Rocket Loader (optional - test first)
   - ✅ Early Hints

### B. Configure Caching

1. **Go to:** Cloudflare Dashboard → santums.com → **Caching** → **Configuration**

2. **Settings:**
   - Browser Cache TTL: Respect Existing Headers
   - Caching Level: Standard
   - Development Mode: OFF (enable only for testing)

3. **Create Page Rule** (Optional):
   - Go to: **Rules** → **Page Rules**
   - URL: `santums.com/*`
   - Settings:
     - Cache Level: Cache Everything
     - Edge Cache TTL: 1 day
     - Browser Cache TTL: 4 hours

### C. Add Web Analytics

1. **Go to:** Cloudflare Dashboard → santums.com → **Analytics** → **Web Analytics**

2. **Enable:**
   - Click "Enable Web Analytics"
   - Copy the analytics script
   - Add to `app/layout.tsx` inside `<head>`:

   ```tsx
   <Script
     defer
     src='https://static.cloudflareinsights.com/beacon.min.js'
     data-cf-beacon='{"token": "YOUR_TOKEN_HERE"}'
   />
   ```

### D. Add Turnstile (Anti-Spam)

Optional but recommended for forms:

1. **Go to:** Cloudflare Dashboard → **Turnstile**
2. Create new site widget
3. Get Site Key and Secret Key
4. Add to environment variables:
   ```
   NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key
   TURNSTILE_SECRET_KEY=your_secret_key
   ```

---

## 🔄 Step 6: Continuous Deployment

### Auto-Deploy on Git Push

Every time you push to your main branch, Cloudflare Pages will automatically:
1. Pull latest code
2. Run `npm run build`
3. Deploy to production
4. Update https://santums.com

### Deploy from Other Branches

- Push to any branch to create a preview deployment
- Preview URL: `branch-name.santums-build.pages.dev`
- Test before merging to main

### Manual Redeploy

1. Go to: Cloudflare Pages → santums-build → **Deployments**
2. Click "..." on any deployment → "Retry deployment"

---

## 📊 Step 7: Monitoring & Maintenance

### A. Check Analytics

**Cloudflare Dashboard:**
- Go to: santums.com → **Analytics** → **Traffic**
- Monitor:
  - Page views
  - Unique visitors
  - Bandwidth usage
  - Cache hit rate

### B. Monitor Build Logs

- Go to: Workers & Pages → santums-build → **Deployments**
- Click on any deployment to view build logs
- Check for errors or warnings

### C. Email Delivery Monitoring

- Check EMAIL_USER inbox for submissions
- Monitor Gmail's sending limits (500/day for free accounts)
- Consider upgrading to a transactional email service for production:
  - **Resend** (100 emails/day free)
  - **SendGrid** (100 emails/day free)
  - **Mailgun** (5,000 emails/month free trial)

---

## 🔧 Troubleshooting

### Build Fails

**Check build logs:**
```bash
# Common issues:
1. Missing environment variables
2. TypeScript errors
3. ESLint errors
4. Dependency conflicts
```

**Solutions:**
- Verify all environment variables are set in Cloudflare
- Run `npm run build` locally first
- Check for missing dependencies in package.json

### Forms Not Working

**Email not sending:**
1. Verify EMAIL_* environment variables in Cloudflare
2. Check Gmail App Password is correct
3. Test with a different email provider
4. Check Cloudflare Functions logs

**Rate limit errors:**
- Expected after 3 submissions/min (contact) or 2 submissions/min (partner)
- Wait 60 seconds and retry

### Domain Not Working

**santums.com not loading:**
1. Check DNS propagation: https://dnschecker.org
2. Verify CNAME records in Cloudflare DNS
3. Wait 5-10 minutes for DNS updates
4. Clear browser cache

**SSL errors:**
1. Wait 5 minutes for certificate provisioning
2. Check: Cloudflare → SSL/TLS → Overview
3. Set SSL/TLS encryption mode to "Full (strict)"

### Animations Not Working

1. Check browser console for errors
2. Verify Framer Motion is installed
3. Test in different browsers
4. Disable browser extensions

---

## 🎯 Production Checklist

Before announcing your site:

### Performance
- [ ] Test on PageSpeed Insights: https://pagespeed.web.dev
- [ ] Target: 90+ performance score
- [ ] Verify images are optimized
- [ ] Check Cloudflare cache hit rate (target: >80%)

### Functionality
- [ ] All pages load correctly
- [ ] All navigation links work
- [ ] Contact form sends emails
- [ ] Partner modal works
- [ ] Forms validate correctly
- [ ] Toast notifications appear

### SEO
- [ ] robots.txt accessible: https://santums.com/robots.txt
- [ ] sitemap.xml accessible: https://santums.com/sitemap.xml
- [ ] Meta tags present on all pages
- [ ] Open Graph images configured
- [ ] Structured data added (optional)

### Security
- [ ] HTTPS enabled with valid certificate
- [ ] Environment variables not exposed
- [ ] No sensitive data in client code
- [ ] Rate limiting working on forms

### Mobile
- [ ] Test on real mobile devices
- [ ] Forms work on mobile
- [ ] Animations smooth on mobile
- [ ] Touch interactions work

---

## 🚀 Going Live

### Final Steps

1. **Update Email Recipient**
   - Change `to: "contact@santums.com"` in both API routes
   - Currently set to: your EMAIL_USER
   - Create contact@santums.com email address

2. **Configure Professional Email**
   - Set up contact@santums.com in Cloudflare Email Routing
   - Or use Google Workspace / Microsoft 365

3. **Announce Launch**
   - Test everything one final time
   - Share https://santums.com
   - Monitor analytics and email submissions

4. **Backup Plan**
   - Keep a local copy of environment variables
   - Document any custom configurations
   - Set up uptime monitoring (optional):
     - UptimeRobot (free)
     - Pingdom
     - StatusCake

---

## 📞 Support Resources

- **Cloudflare Docs:** https://developers.cloudflare.com/pages
- **Next.js on Cloudflare:** https://developers.cloudflare.com/pages/framework-guides/nextjs
- **Community:** Cloudflare Discord, Next.js Discord

---

## ✅ Deployment Complete!

Your Santums Build site is now live at **https://santums.com** with:

✨ Full Next.js functionality
✨ Working API routes for forms
✨ Email delivery via Nodemailer
✨ Cinematic animations
✨ SSL/HTTPS enabled
✨ Global CDN distribution
✨ Auto-deploy on git push
✨ Professional domain

**Status: Production Ready!** 🎉
