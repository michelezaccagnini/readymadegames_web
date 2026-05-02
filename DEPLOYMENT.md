# Deployment Guide - Vercel

This guide will help you deploy your Readymade Games website to Vercel from your local folder.

## Prerequisites

- Node.js installed (v18 or higher recommended)
- A Vercel account (sign up at https://vercel.com)
- Gmail account with App Password configured (for contact form)

## Step 1: Configure Email (IMPORTANT!)

Before deploying, you need to set up Gmail App Password for the contact form:

1. **Enable 2-Factor Authentication** on your Gmail account
   - Go to https://myaccount.google.com/security
   - Enable 2-Step Verification if not already enabled

2. **Create an App Password**
   - Still in Security settings, find "App passwords"
   - Select "Mail" as the app
   - Copy the 16-character password (e.g., `abcd efgh ijkl mnop`)
   - Keep this password handy - you'll need it in Step 3

## Step 2: Deploy to Vercel

Open your terminal/PowerShell in this project folder and run:

```bash
npx vercel
```

Follow the prompts:
- **Set up and deploy**: Choose `Y` (Yes)
- **Which scope**: Select your account
- **Link to existing project**: Choose `N` (No)
- **Project name**: Press Enter (or choose a name)
- **Directory**: Press Enter (current directory is correct)
- **Override settings**: Choose `N` (No)

Vercel will:
1. Build your project
2. Deploy it
3. Give you a preview URL (e.g., `https://your-project.vercel.app`)

## Step 3: Add Environment Variables

After the initial deployment, you MUST add environment variables for the contact form:

### Option A: Using Vercel Dashboard (Recommended)
1. Go to https://vercel.com/dashboard
2. Click on your project
3. Go to **Settings** → **Environment Variables**
4. Add these three variables:

   ```
   EMAIL_USER = your-email@gmail.com
   EMAIL_PASS = your-16-char-app-password
   EMAIL_TO = info@readymade.games
   ```

5. Make sure to add them for **Production**, **Preview**, and **Development**

### Option B: Using Vercel CLI
Run these commands in your terminal:

```bash
npx vercel env add EMAIL_USER
# Enter: your-email@gmail.com
# Select: Production, Preview, Development

npx vercel env add EMAIL_PASS
# Enter: your-app-password
# Select: Production, Preview, Development

npx vercel env add EMAIL_TO
# Enter: info@readymade.games
# Select: Production, Preview, Development
```

## Step 4: Redeploy with Environment Variables

After adding environment variables, redeploy:

```bash
npx vercel --prod
```

This will deploy to production with your environment variables active.

## Step 5: Verify Everything Works

1. Visit your production URL (shown in terminal after deployment)
2. Test the contact form
3. Check that you receive emails

## Future Deployments

To deploy updates:

```bash
# Deploy to preview
npx vercel

# Deploy to production
npx vercel --prod
```

## Custom Domain (Optional)

To add a custom domain:
1. Go to your Vercel Dashboard
2. Select your project
3. Go to **Settings** → **Domains**
4. Add your domain and follow the DNS configuration steps

## Troubleshooting

### Contact form not working
- **Check environment variables** are set correctly in Vercel dashboard
- **Verify Gmail App Password** is correct (not your regular password)
- **Check 2FA is enabled** on your Gmail account
- **Check logs** in Vercel Dashboard → Deployments → [Select deployment] → Functions tab

### Build fails
- Run `npm run build` locally to check for errors
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`

### Assets not loading
- Check file paths are correct
- Ensure files are in the `client/public` folder
- Check browser console for 404 errors

## What's Deployed

- ✅ React frontend (Vite build)
- ✅ API routes as serverless functions
- ✅ Contact form with email functionality
- ✅ All static assets (videos, sounds, textures, etc.)

## File Structure (After Deployment)

```
Production:
- Frontend: Static files served from /
- API: Serverless functions at /api/*
  - /api/contact
  - /api/health
  - /api/games
```

## Support

If you encounter issues:
- Check Vercel logs: https://vercel.com/docs/observability/runtime-logs
- Vercel Support: https://vercel.com/support
- Documentation: https://vercel.com/docs

## Cost

Vercel Free Tier includes:
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Serverless function executions
- ✅ SSL certificates
- ✅ Preview deployments

Perfect for personal projects and portfolios!

