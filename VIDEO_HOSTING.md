# Video Hosting Options for Deployment

Your `cracked-nuts-background.mp4` is too large for Vercel's 100MB limit. Here are quick solutions:

## Option 1: Cloudinary (Recommended - FREE)

1. **Sign up** at https://cloudinary.com (Free tier: 25GB storage, 25GB bandwidth/month)

2. **Upload your video:**
   - Go to Media Library → Upload
   - Upload `client/public/cracked-nuts-background.mp4`

3. **Get the URL:**
   - Click on uploaded video
   - Copy the "Secure URL" (looks like: `https://res.cloudinary.com/your-cloud-name/video/upload/v1234567890/cracked-nuts-background.mp4`)

4. **Update your code** - Replace in `HomePage.tsx` line 13:
   ```tsx
   videoPath="https://res.cloudinary.com/YOUR-CLOUD-NAME/video/upload/v1234567890/cracked-nuts-background.mp4"
   ```

## Option 2: Bunny CDN (Best Performance - $1/month)

1. Sign up at https://bunny.net
2. Create a storage zone
3. Upload video
4. Use the CDN URL

## Option 3: YouTube/Vimeo (Simplest)

1. Upload as unlisted video to YouTube or Vimeo
2. Use embed player instead of `<video>` tag
3. Benefits: Free, optimized streaming, adaptive quality

## Option 4: Vercel Blob Storage (Easiest if on Vercel Pro)

```bash
npm install @vercel/blob
npx vercel blob upload client/public/cracked-nuts-background.mp4
```

Then use the returned URL in your code.

## Quick Fix for Now

If you want to deploy **without the video** temporarily:
- The video is already excluded from deployment (see `.vercelignore`)
- Comment out the VideoBackground component in `HomePage.tsx`
- Add a gradient background instead
- Deploy, then add video later

---

## Current Status

✅ Video file excluded from deployment
⏳ Waiting for external URL

**Next:** Choose an option above and get your video URL!

