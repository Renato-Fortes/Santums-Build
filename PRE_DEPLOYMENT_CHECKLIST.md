# 🎯 Pre-Deployment Checklist

Use this checklist before pushing to production.

---

## 📦 Code Preparation

### Files & Configuration
- [x] `next.config.ts` optimized for Cloudflare Pages
- [x] `package.json` build scripts configured
- [x] `.env.local` created (not committed to git)
- [x] `.env.local.example` committed for reference
- [x] `.gitignore` includes `.env*` files
- [x] `robots.txt` in public folder
- [x] `sitemap.xml` in public folder with correct URLs
- [x] `_headers` in public folder for security
- [x] `_redirects` in public folder for www redirect

### API Routes
- [x] Contact API (`/api/contact/route.ts`) configured
- [x] Partner API (`/api/partner/route.ts`) configured
- [x] Both APIs use `runtime: 'nodejs'`
- [x] Rate limiting implemented
- [x] Input sanitization active
- [x] Error handling complete

### Components
- [x] All 7 main components working
- [x] Partner modal integrated
- [x] Toast notifications configured
- [x] Page transitions working
- [x] Atmospheric background added

---

## 🧪 Local Testing

### Build & Run
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm start

# Visit: http://localhost:3000
```

### Test All Features
- [ ] Homepage loads with all animations
- [ ] Navigation to /about works
- [ ] Navigation to /partners works
- [ ] Navigation to /contact works
- [ ] Contact form validates input
- [ ] Contact form submits successfully
- [ ] Partner modal opens on button click
- [ ] Partner modal form validates
- [ ] Partner modal submits successfully
- [ ] Toast notifications appear
- [ ] Parallax scrolling smooth
- [ ] 3D card tilt effects work
- [ ] Floating particles animate
- [ ] Page transitions smooth
- [ ] Mobile responsive (test with DevTools)

### Browser Testing
Test in multiple browsers:
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if on Mac)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

---

## 🔐 Environment Variables

### Required for Production

Create these in Cloudflare Pages dashboard:

```env
# Email (Required for forms to work)
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your_16_char_app_password
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://santums.com

# Node.js Version
NODE_VERSION=18
```

### Email Setup Verification
- [ ] Gmail 2FA enabled
- [ ] App password generated
- [ ] App password copied to Cloudflare
- [ ] Test email sent successfully locally

---

## 📂 Git Repository

### GitHub Setup
```bash
# Initialize (if not done)
git init

# Check status
git status

# Add all files
git add .

# Commit
git commit -m "Production ready: Santums Build"

# Create GitHub repo (via GitHub.com or CLI)
# Then add remote:
git remote add origin https://github.com/YOUR_USERNAME/santums-build.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Verify on GitHub
- [ ] Repository created
- [ ] All files pushed
- [ ] `.env.local` NOT in repository (check!)
- [ ] `.env.local.example` IS in repository
- [ ] README.md visible
- [ ] DEPLOYMENT.md visible

---

## 🌐 Cloudflare Pages Setup

### Step-by-Step
1. [ ] Log into Cloudflare Dashboard
2. [ ] Go to Workers & Pages → Create application → Pages
3. [ ] Connect to Git → Authorize GitHub
4. [ ] Select repository: `santums-build`
5. [ ] Configure build settings:
   - Framework: Next.js
   - Build command: `npm run build`
   - Build output: `.next`
   - Root directory: (empty)
6. [ ] Add all environment variables (see above)
7. [ ] Click "Save and Deploy"
8. [ ] Wait for build to complete (~3-5 min)
9. [ ] Test on temporary `.pages.dev` URL

### Initial Deployment Tests
- [ ] Site loads on `.pages.dev` URL
- [ ] All pages accessible
- [ ] Forms display (email won't work yet)
- [ ] Animations work
- [ ] No console errors

---

## 🌍 Custom Domain Configuration

### Setup santums.com
1. [ ] Go to project → Custom domains
2. [ ] Add domain: `santums.com`
3. [ ] Cloudflare auto-creates DNS records
4. [ ] Wait 1-2 minutes for DNS propagation
5. [ ] Add `www.santums.com` (redirects to santums.com)

### DNS Verification
- [ ] CNAME record exists for `santums.com`
- [ ] CNAME record exists for `www.santums.com`
- [ ] Both records are "Proxied" (orange cloud)
- [ ] Visit https://santums.com (works!)
- [ ] Visit https://www.santums.com (redirects!)

### SSL Certificate
- [ ] HTTPS works (green padlock)
- [ ] Certificate valid
- [ ] No mixed content warnings
- [ ] Automatic redirect from HTTP to HTTPS

---

## ✅ Post-Deployment Testing

### Functionality Tests
- [ ] https://santums.com/ loads
- [ ] https://santums.com/about loads
- [ ] https://santums.com/partners loads
- [ ] https://santums.com/contact loads
- [ ] Contact form submits → email received
- [ ] Partner modal submits → email received
- [ ] All animations work
- [ ] Page transitions smooth
- [ ] No JavaScript errors in console

### Performance Tests
- [ ] Run PageSpeed Insights: https://pagespeed.web.dev
- [ ] Desktop score: Target 90+
- [ ] Mobile score: Target 80+
- [ ] First Contentful Paint: < 1.5s
- [ ] Largest Contentful Paint: < 2.5s

### SEO Tests
- [ ] https://santums.com/robots.txt accessible
- [ ] https://santums.com/sitemap.xml accessible
- [ ] Meta title visible on all pages
- [ ] Meta description on all pages
- [ ] Open Graph tags (optional)

### Mobile Tests
- [ ] Test on real iPhone or Android device
- [ ] All pages load correctly
- [ ] Touch interactions work
- [ ] Forms usable on mobile
- [ ] Partner modal works on mobile
- [ ] Animations smooth (not janky)

---

## 🚀 Cloudflare Optimizations

### Performance Settings
- [ ] Enable Auto Minify (HTML, CSS, JS)
- [ ] Enable Brotli compression
- [ ] Enable Early Hints
- [ ] Set Browser Cache TTL
- [ ] Create page rules for static assets

### Security Settings
- [ ] Verify security headers (_headers file)
- [ ] HTTPS always on
- [ ] Bot Fight Mode (optional)
- [ ] Rate limiting rules (optional)

### Analytics
- [ ] Enable Cloudflare Web Analytics
- [ ] Add tracking script to layout
- [ ] Verify analytics reporting

---

## 📊 Monitoring Setup

### Essential Monitoring
- [ ] Bookmark Cloudflare Pages dashboard
- [ ] Set up uptime monitoring (UptimeRobot, etc.)
- [ ] Configure email alerts for downtime
- [ ] Check build logs regularly

### Email Monitoring
- [ ] Test contact form submission
- [ ] Test partner modal submission
- [ ] Verify emails arrive at correct address
- [ ] Check for spam folder delivery

---

## 📝 Documentation

### Update Documentation
- [ ] Update README.md with live URL
- [ ] Update DEPLOYMENT.md if needed
- [ ] Document any custom configurations
- [ ] Note any issues encountered

### Share Access (if team)
- [ ] Add team members to GitHub repo
- [ ] Add team members to Cloudflare account
- [ ] Share environment variables securely (1Password, etc.)

---

## 🎉 Go Live Checklist

### Final Steps Before Announcing
1. [ ] All above checkboxes completed
2. [ ] Test site one final time
3. [ ] Screenshot homepage for social media
4. [ ] Prepare announcement content
5. [ ] Monitor first few hours for issues

### Post-Launch
- [ ] Monitor analytics for traffic
- [ ] Check form submissions
- [ ] Monitor error rates
- [ ] Gather user feedback

---

## 🆘 Rollback Plan

If something goes wrong:

### Quick Rollback
1. Go to Cloudflare Pages → Deployments
2. Find last working deployment
3. Click "..." → "Rollback to this deployment"
4. Site reverts in ~30 seconds

### Alternative
1. Fix issue locally
2. Test with `npm run build`
3. Commit fix
4. Push to GitHub
5. Auto-deploys in 3-5 minutes

---

## ✅ Ready to Deploy!

When all checkboxes are complete:

1. **Final local test:**
   ```bash
   npm run build && npm start
   # Visit http://localhost:3000
   # Test everything one last time
   ```

2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for production deployment"
   git push origin main
   ```

3. **Deploy to Cloudflare:**
   - Follow DEPLOYMENT.md guide
   - Configure custom domain
   - Test live site

4. **Announce launch! 🎉**

---

**Status:** Ready for Production Deployment
**Target URL:** https://santums.com
**Platform:** Cloudflare Pages
**Framework:** Next.js 16
