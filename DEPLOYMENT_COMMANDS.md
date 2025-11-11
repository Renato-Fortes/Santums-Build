# 🚀 Deployment Commands & Scripts

Quick reference for all deployment-related commands.

---

## 📦 Local Development

### Install & Run
```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Opens at: http://localhost:3000

# Build for production (test locally)
npm run build

# Start production server locally
npm start
# Opens at: http://localhost:3000

# Run linter
npm run lint
```

---

## 🔧 Environment Setup

### Create Local Environment
```bash
# Copy environment template
cp .env.local.example .env.local

# Edit with your credentials
# Required variables:
# - EMAIL_USER
# - EMAIL_PASS
# - EMAIL_HOST
# - EMAIL_PORT
# - EMAIL_SECURE
# - NEXT_PUBLIC_SITE_URL
```

### Gmail App Password Setup
```bash
# 1. Visit: https://myaccount.google.com/security
# 2. Enable 2-Factor Authentication
# 3. Navigate to: 2-Step Verification → App passwords
# 4. Generate app password for "Mail"
# 5. Copy 16-character password (no spaces)
# 6. Paste in .env.local as EMAIL_PASS
```

---

## 📂 Git & GitHub

### Initialize Repository
```bash
# Initialize git (if needed)
git init

# Check status
git status

# Add all files
git add .

# Commit
git commit -m "Production ready: Santums Build"

# View current remotes
git remote -v
```

### Create GitHub Repository

**Option 1: GitHub CLI**
```bash
# Install GitHub CLI: https://cli.github.com
gh repo create santums-build --private --source=. --remote=origin

# Push to GitHub
git push -u origin main
```

**Option 2: Manual**
```bash
# 1. Go to: https://github.com/new
# 2. Repository name: santums-build
# 3. Visibility: Private or Public
# 4. Create repository

# Add remote
git remote add origin https://github.com/YOUR_USERNAME/santums-build.git

# Set branch
git branch -M main

# Push
git push -u origin main
```

### Update & Redeploy
```bash
# After making changes
git add .
git commit -m "Your commit message"
git push origin main

# Cloudflare Pages auto-deploys in 3-5 minutes
```

---

## 🌐 Cloudflare Pages Deployment

### First-Time Setup

**Step 1: Create Project**
```
1. Visit: https://dash.cloudflare.com
2. Navigate to: Workers & Pages → Create → Pages
3. Click: "Connect to Git"
4. Authorize GitHub access
5. Select repository: santums-build
```

**Step 2: Configure Build**
```
Framework preset: Next.js
Build command: npm run build
Build output directory: .next
Root directory: (leave empty)
Production branch: main
```

**Step 3: Environment Variables**

Add these in Cloudflare Pages dashboard:

```env
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your_16_char_app_password
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
NEXT_PUBLIC_SITE_URL=https://santums.com
NODE_VERSION=18
```

**Step 4: Deploy**
```
Click "Save and Deploy"
Wait 3-5 minutes
Test at: https://santums-build-xxx.pages.dev
```

### Add Custom Domain

**Option 1: Cloudflare Dashboard**
```
1. Go to: Project → Custom domains
2. Click "Set up a custom domain"
3. Enter: santums.com
4. Cloudflare auto-creates DNS records
5. Wait 1-2 minutes for DNS propagation
6. Visit: https://santums.com
```

**Option 2: Cloudflare API** (Advanced)
```bash
# Using curl
curl -X POST "https://api.cloudflare.com/client/v4/accounts/{account_id}/pages/projects/{project_name}/domains" \
  -H "Authorization: Bearer {api_token}" \
  -H "Content-Type: application/json" \
  --data '{"name":"santums.com"}'
```

---

## 🔄 Continuous Deployment

### Auto-Deploy Workflow

Every push to `main` triggers:
```bash
1. Cloudflare detects push
2. Clones latest code
3. Runs: npm install
4. Runs: npm run build
5. Deploys to production
6. Updates: https://santums.com
7. Takes ~3-5 minutes
```

### Preview Deployments

```bash
# Create feature branch
git checkout -b feature/new-section

# Make changes and commit
git add .
git commit -m "Add new section"

# Push to GitHub
git push origin feature/new-section

# Cloudflare creates preview URL:
# https://feature-new-section.santums-build.pages.dev
```

### Manual Redeploy

**Option 1: Retry Deployment**
```
1. Go to: Cloudflare Pages → santums-build → Deployments
2. Click "..." on latest deployment
3. Click "Retry deployment"
```

**Option 2: Trigger via Git**
```bash
# Empty commit to trigger rebuild
git commit --allow-empty -m "Trigger rebuild"
git push origin main
```

---

## 🧪 Testing Commands

### Local Testing
```bash
# Test production build locally
npm run build && npm start

# Visit and test:
# - http://localhost:3000/
# - http://localhost:3000/about
# - http://localhost:3000/partners
# - http://localhost:3000/contact
```

### API Testing
```bash
# Test contact API
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Hello world test message"}'

# Test partner API
curl -X POST http://localhost:3000/api/partner \
  -H "Content-Type: application/json" \
  -d '{"companyName":"Test Company","email":"test@example.com","industry":"Tech","message":"Partnership inquiry test"}'
```

### Production Testing
```bash
# Test production contact API
curl -X POST https://santums.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Hello world test message"}'

# Check response codes
# 200 = Success
# 400 = Validation error
# 429 = Rate limit exceeded
# 500 = Server error
```

---

## 📊 Monitoring Commands

### Check Build Status
```bash
# Using Cloudflare API
curl "https://api.cloudflare.com/client/v4/accounts/{account_id}/pages/projects/{project_name}/deployments" \
  -H "Authorization: Bearer {api_token}"
```

### View Logs
```
1. Go to: Cloudflare Pages → santums-build → Deployments
2. Click on latest deployment
3. View build logs
4. Check for errors or warnings
```

### Check DNS
```bash
# Check DNS propagation
nslookup santums.com
dig santums.com

# Online tool
# Visit: https://dnschecker.org
```

### Test SSL
```bash
# Check SSL certificate
openssl s_client -connect santums.com:443 -servername santums.com

# Or use online tool
# Visit: https://www.ssllabs.com/ssltest/
```

---

## 🛠️ Troubleshooting Commands

### Clear Build Cache
```bash
# Delete .next directory
rm -rf .next

# Or on Windows
rmdir /s .next

# Rebuild
npm run build
```

### Fix Dependencies
```bash
# Remove node_modules and reinstall
rm -rf node_modules
npm install

# Or use clean install
npm ci
```

### Check Environment Variables
```bash
# List environment variables (locally)
cat .env.local

# In Cloudflare Pages dashboard:
# Settings → Environment variables → Production
```

### Rollback Deployment
```
1. Go to: Cloudflare Pages → santums-build → Deployments
2. Find last working deployment
3. Click "..." → "Rollback to this deployment"
4. Confirm rollback
5. Site reverts in ~30 seconds
```

---

## 🔐 Security Commands

### Check for Vulnerabilities
```bash
# Audit dependencies
npm audit

# Fix vulnerabilities
npm audit fix

# View detailed report
npm audit --json
```

### Update Dependencies
```bash
# Check for outdated packages
npm outdated

# Update all dependencies
npm update

# Update specific package
npm update <package-name>
```

---

## 📈 Performance Commands

### Test Performance
```bash
# Using Lighthouse CLI
npm install -g lighthouse

lighthouse https://santums.com --view

# Or use online tools:
# - https://pagespeed.web.dev
# - https://web.dev/measure
# - https://gtmetrix.com
```

### Analyze Bundle Size
```bash
# Build with detailed output
npm run build

# Check bundle sizes in output
# Look for: Route (app) table
```

---

## 🎯 Quick Reference

### Most Common Commands
```bash
# Development
npm run dev           # Start dev server
npm run build         # Build production
npm start             # Start production server

# Git
git add .
git commit -m "message"
git push origin main

# Testing
curl -X POST http://localhost:3000/api/contact -H "Content-Type: application/json" -d '{"name":"Test","email":"test@example.com","message":"Test message here"}'

# Deployment
# (Automatic on git push)
```

### Emergency Rollback
```bash
# Quick rollback via Cloudflare dashboard
# 1. Pages → Deployments
# 2. Previous deployment → "..."
# 3. "Rollback to this deployment"
# Done in 30 seconds
```

---

## 📝 Notes

- All commands assume you're in project root: `santums_site/`
- Replace `{account_id}`, `{project_name}`, `{api_token}` with your values
- Wait 3-5 minutes after git push for Cloudflare deployment
- Preview deployments available for all branches
- Production uses `main` branch only

---

**For detailed guides, see:**
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Complete deployment guide
- [PRE_DEPLOYMENT_CHECKLIST.md](./PRE_DEPLOYMENT_CHECKLIST.md) - Pre-deploy checklist
- [BACKEND_SETUP.md](./BACKEND_SETUP.md) - Email configuration
- [QUICKSTART.md](./QUICKSTART.md) - Fast setup guide
