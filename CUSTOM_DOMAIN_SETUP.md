# Custom Domain Setup: readymade.games

## Quick Setup Guide

### Step 1: Add Domain in Vercel

1. **Go to Vercel Dashboard:**
   - Visit: https://vercel.com/dashboard
   - Click on your project: **readymadegames_web**

2. **Go to Domains Tab:**
   - Click on the **"Domains"** tab (near Settings)
   - Click **"Add Domain"**

3. **Enter your domain:**
   - Type: `readymade.games`
   - Click **"Add"**

4. **Also add www subdomain:**
   - Click **"Add Domain"** again
   - Type: `www.readymade.games`
   - Click **"Add"**

---

### Step 2: Configure DNS Records

Vercel will show you DNS records to add. You need to add these to your domain registrar (where you bought readymade.games).

#### **Option A: If Vercel manages DNS (Recommended)**
Vercel will provide **nameservers** like:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

Go to your domain registrar and:
1. Find **Nameservers** or **DNS** settings
2. Replace existing nameservers with Vercel's nameservers
3. Save changes
4. Wait 24-48 hours for propagation (usually faster)

#### **Option B: If you keep your current DNS provider**
Add these DNS records at your registrar:

**For root domain (readymade.games):**
- Type: `A`
- Name: `@` (or leave blank)
- Value: `76.76.21.21`

**For www subdomain (www.readymade.games):**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

---

### Step 3: Wait for Verification

- Vercel will automatically verify your DNS settings
- Usually takes 5-60 minutes
- Vercel will automatically provision an SSL certificate (HTTPS)
- You'll see a green checkmark when ready ✅

---

## Common Domain Registrars

### GoDaddy
1. Log in to GoDaddy
2. Go to **My Products** → **Domains**
3. Click **DNS** next to your domain
4. Add the A and CNAME records shown above

### Namecheap
1. Log in to Namecheap
2. Go to **Domain List**
3. Click **Manage** next to readymade.games
4. Click **Advanced DNS** tab
5. Add the records

### Cloudflare
1. Log in to Cloudflare
2. Select your domain
3. Go to **DNS** tab
4. Add the records
5. Make sure **Proxy status** is set to "DNS only" (grey cloud)

### Google Domains
1. Log in to Google Domains
2. Click on your domain
3. Go to **DNS** tab
4. Add custom records

---

## After Setup

Once DNS propagates, your site will be available at:
- ✅ https://readymade.games
- ✅ https://www.readymade.games
- ✅ Your old Vercel URL (will still work as backup)

Vercel will automatically:
- Redirect www to non-www (or vice versa - you can configure this)
- Provide free SSL certificate (HTTPS)
- Handle CDN and edge caching globally

---

## Need Help?

If you need help with DNS configuration, let me know which registrar you're using (GoDaddy, Namecheap, Cloudflare, etc.) and I can give you more specific instructions!

