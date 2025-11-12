# 🚀 Cloudflare Pages Dashboard Configuration

## Critical: Use Custom Build Command

⚠️ **IMPORTANT**: You must use the custom build script that removes the cache directory.

### Build Configuration in Cloudflare Dashboard

When setting up or configuring your Cloudflare Pages project:

```
Framework preset: Next.js (auto-detected)
Build command: npm run build:cloudflare
Build output directory: .next (auto-detected)
Root directory: / (default)
Node.js version: 18
```

### Why `npm run build:cloudflare` Instead of `npm run build`?

The custom build script:
1. ✅ Runs `next build` normally
2. ✅ **Removes `.next/cache/` directory** (47+ MB)
3. ✅ Removes `.next/trace` file (can be large)
4. ✅ Results in ~3.34 MB output (well under 25MB limit)

**Standard `npm run build`:**
- ❌ Leaves cache directory: **47.6 MB** files
- ❌ Exceeds Cloudflare's 25MB per-file limit
- ❌ Deployment fails with: `Pages only supports files up to 25 MiB in size`

### Environment Variables to Set

In **Settings → Environment Variables**:

```env
# Email Configuration (for contact forms)
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your_app_specific_password
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://santums.com

# Build Configuration
NODE_VERSION=18
```

### Deployment Checklist

- [x] Custom build script created: `scripts/build-for-cloudflare.js`
- [x] Package.json updated with `build:cloudflare` script
- [x] Tested locally (output: 3.34 MB, 0 files > 25MB)
- [x] Committed and pushed to GitHub
- [ ] Update Cloudflare Pages build command to: `npm run build:cloudflare`
- [ ] Add environment variables in Cloudflare dashboard
- [ ] Trigger redeploy
- [ ] Verify deployment succeeds

### How to Update Build Command

1. Go to: https://dash.cloudflare.com
2. Navigate to: **Workers & Pages** → **Your Project** → **Settings**
3. Scroll to: **Build configuration**
4. Click: **Edit build configuration**
5. Change **Build command** from `npm run build` to: `npm run build:cloudflare`
6. Click: **Save**
7. Go to **Deployments** tab
8. Click: **Retry deployment** on the latest failed build

### Verification

After successful deployment, you should see in logs:

```
✅ Next.js build completed
🧹 Cleaning up cache directory...
✅ Removed .next/cache directory
🧹 Cleaning up trace files...
✅ Removed .next/trace file
✅ Cloudflare-optimized build complete!
```

And during asset validation:
```
Note: No functions dir at /functions found. Skipping.
Validating asset output directory
✅ Successfully validated assets
```

### Troubleshooting

**If deployment still fails:**

1. Check the build command is exactly: `npm run build:cloudflare`
2. Verify Node.js version is set to 18
3. Check build logs for script execution
4. Ensure `scripts/build-for-cloudflare.js` exists in repo

**If forms don't work:**

1. Verify all `EMAIL_*` environment variables are set
2. Check they're set for **Production** environment
3. Redeploy after adding variables

---

## Summary

✅ **Correct Build Command:** `npm run build:cloudflare`  
✅ **Output Size:** ~3.34 MB (under 25MB limit)  
✅ **Cache Handling:** Automatically removed after build  
✅ **Ready to Deploy:** Yes, update dashboard and retry!
