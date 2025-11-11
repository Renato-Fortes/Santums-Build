# 🚀 Quick Start Guide

## 1️⃣ Setup Email (2 minutes)

```bash
# Copy environment template
cp .env.local.example .env.local
```

Then edit `.env.local`:

```env
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your_16_char_app_password
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
```

### Get Gmail App Password:
1. Go to: https://myaccount.google.com/security
2. Enable 2-Step Verification
3. Search for "App passwords"
4. Generate password for "Mail"
5. Copy 16-character password
6. Paste in `.env.local`

## 2️⃣ Start Development Server

```bash
npm run dev
```

Visit: http://localhost:3000

## 3️⃣ Test Forms

### Test Contact Form
1. Go to: http://localhost:3000/contact
2. Fill in: Name, Email, Message
3. Click "Send Message"
4. Should see success toast
5. Check your email inbox

### Test Partner Modal
1. Go to: http://localhost:3000
2. Click "Partner With Us" button
3. Fill in: Company, Email, Industry, Message
4. Click "Submit Application"
5. Should see success toast
6. Modal should close
7. Check your email inbox

## 4️⃣ Deploy to Production

### Option A: Vercel (Easiest)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Then add environment variables in Vercel dashboard:
- Settings → Environment Variables
- Add all EMAIL_* variables from `.env.local`

### Option B: Other Platforms

Most platforms support Next.js. Just ensure:
- Node.js 18+ is available
- Environment variables are configured
- Build command: `npm run build`
- Start command: `npm start`

## 🎯 What's Working Now

✅ **Contact Form** (`/contact`)
- Email delivery via Nodemailer
- Real-time validation
- Toast notifications
- Rate limiting

✅ **Partner Modal** (Hero button)
- Animated modal
- Form validation
- Email delivery
- Success feedback

✅ **Cinematic Animations**
- Parallax scrolling
- Mouse-tracking glow
- 3D tilt cards
- Floating particles
- Page transitions

## 🆘 Troubleshooting

### "Failed to send message"
- Check `.env.local` exists
- Verify Gmail App Password (not regular password)
- Ensure 2FA is enabled on Gmail
- Check console for detailed errors

### Forms not submitting
- Check browser console for errors
- Verify dev server is running
- Test API routes directly:
  ```bash
  # Test contact API
  curl -X POST http://localhost:3000/api/contact \
    -H "Content-Type: application/json" \
    -d '{"name":"Test","email":"test@example.com","message":"Hello world test message"}'
  ```

### Rate limit error
- Expected after 3 submissions per minute
- Wait 60 seconds and try again
- Normal security feature

## 📚 Documentation

- **Full Features:** `FEATURES.md`
- **Backend Setup:** `BACKEND_SETUP.md`
- **Environment:** `.env.local.example`

## ✨ Ready to Go!

Your site is production-ready with:
- 📧 Working email forms
- 🎨 Cinematic animations
- 🔒 Security features
- 📱 Mobile responsive
- ♿ Accessible

**Next:** Configure email and test! 🚀
