# Quick Start - Deploy to Vercel

## 🚀 Deploy in 3 Steps

### Step 1: Run Deploy Command
Open PowerShell in this folder and run:
```bash
npx vercel
```

Follow the prompts and select the defaults. You'll get a preview URL.

### Step 2: Add Email Environment Variables
Go to https://vercel.com/dashboard, click your project, then **Settings → Environment Variables**

Add these 3 variables:
```
EMAIL_USER = your-gmail@gmail.com
EMAIL_PASS = your-gmail-app-password
EMAIL_TO = info@readymade.games
```

**To get Gmail App Password:**
1. Go to https://myaccount.google.com/security
2. Enable 2-Step Verification
3. Click "App passwords"
4. Select "Mail" → Generate
5. Copy the 16-character password

### Step 3: Deploy to Production
```bash
npx vercel --prod
```

Done! 🎉 Your site is live.

---

## Alternative: Use NPM Scripts

```bash
# Preview deployment
npm run deploy:preview

# Production deployment
npm run deploy
```

---

## 📝 Full Documentation
See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete instructions and troubleshooting.

