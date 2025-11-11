# 📧 Backend Setup Guide

This guide explains how to set up and configure the email functionality for contact and partnership forms.

## 🔧 Quick Setup

1. **Copy the environment template:**
   ```bash
   cp .env.local.example .env.local
   ```

2. **Configure your email settings in `.env.local`:**

### Option A: Gmail (Recommended for Development)

```env
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your_app_password_here
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
```

**To get a Gmail App Password:**
1. Go to your Google Account: https://myaccount.google.com
2. Enable 2-Factor Authentication (if not already enabled)
3. Go to Security → 2-Step Verification → App passwords
4. Generate a new app password for "Mail"
5. Copy the 16-character password (without spaces)
6. Paste it as `EMAIL_PASS` in your `.env.local`

### Option B: Other Email Providers

```env
EMAIL_USER=your.email@provider.com
EMAIL_PASS=your_password_or_api_key
EMAIL_HOST=smtp.provider.com
EMAIL_PORT=587  # or 465 for SSL
EMAIL_SECURE=false  # or true if using port 465
```

**Common SMTP Settings:**
- **Outlook/Hotmail:** `smtp-mail.outlook.com:587`
- **Yahoo:** `smtp.mail.yahoo.com:465` (SSL)
- **SendGrid:** Use API key as password
- **Mailgun:** Use API credentials

## 🎯 What's Included

### API Routes

#### `/api/contact` - Contact Form Submissions
- **Fields:** name, email, message
- **Validation:** Server-side with Zod
- **Rate Limit:** 3 requests per minute per IP
- **Email:** Sends to `contact@santums.com`

#### `/api/partner` - Partnership Requests
- **Fields:** companyName, email, industry, message
- **Industries:** Construction, Transport, Tech
- **Rate Limit:** 2 requests per minute per IP
- **Email:** Sends to `contact@santums.com`

### Security Features

✅ **Server-side validation** with Zod schemas
✅ **Input sanitization** to prevent XSS attacks
✅ **Rate limiting** per IP address
✅ **Error handling** with descriptive messages
✅ **Environment variables** for sensitive credentials

### Frontend Features

✅ **React Hook Form** for form management
✅ **Inline validation** with error messages
✅ **Loading states** during submission
✅ **Toast notifications** with Sonner
✅ **Framer Motion** animations
✅ **Accessible forms** with proper labels

## 🧪 Testing

### Test the Contact Form
1. Visit: `http://localhost:3000/contact`
2. Fill in the form fields
3. Submit and check for toast notification
4. Check the configured email inbox

### Test the Partner Modal
1. Visit: `http://localhost:3000`
2. Click "Partner With Us" button in the hero
3. Fill in the modal form
4. Submit and verify success message

### Test Rate Limiting
- Submit the same form more than 3 times within 1 minute
- Should receive a 429 error: "Too many requests"

## 🚀 Production Deployment

### Vercel (Recommended)

1. Add environment variables in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add all `EMAIL_*` variables from `.env.local`

2. Deploy:
   ```bash
   vercel --prod
   ```

### Environment Variables Checklist
```
✓ EMAIL_USER
✓ EMAIL_PASS
✓ EMAIL_HOST
✓ EMAIL_PORT
✓ EMAIL_SECURE
```

## 🔍 Troubleshooting

### "Failed to send message"
- ✅ Check `.env.local` exists and has correct values
- ✅ Verify email credentials are correct
- ✅ For Gmail: Ensure App Password is used (not regular password)
- ✅ Check if 2FA is enabled for Gmail
- ✅ Verify SMTP host and port are correct

### "Too many requests"
- This is expected after 3 submissions per minute
- Wait 60 seconds and try again
- In production, consider adjusting rate limits

### Form validation errors
- Check browser console for detailed error messages
- Verify all required fields are filled
- Ensure email format is valid

## 📝 Customization

### Change recipient email
Edit the API routes:
```typescript
// In /app/api/contact/route.ts or /app/api/partner/route.ts
to: "your-new-email@domain.com"
```

### Adjust rate limits
Edit the API route constants:
```typescript
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // requests per window
```

### Modify form fields
1. Update Zod schema in the API route
2. Update React Hook Form schema in the component
3. Add/remove form fields in the JSX

## 🎨 Toast Notifications

Configured with custom styling in `app/layout.tsx`:
- **Position:** Top-right
- **Theme:** Dark with orange accent
- **Duration:** Auto (based on content)

To customize:
```tsx
<Toaster 
  position="bottom-center"
  toastOptions={{
    style: {
      background: 'your-color',
      color: 'your-text-color',
    },
  }}
/>
```

## 📚 Tech Stack

- **Next.js 16** - App Router with API routes
- **Nodemailer** - Email sending
- **Zod** - Schema validation
- **React Hook Form** - Form state management
- **Sonner** - Toast notifications
- **Framer Motion** - Animations

## 🆘 Support

For issues or questions:
1. Check this documentation
2. Review the console logs
3. Verify environment variables
4. Test email credentials separately

---

**✨ Your forms are now production-ready!**
