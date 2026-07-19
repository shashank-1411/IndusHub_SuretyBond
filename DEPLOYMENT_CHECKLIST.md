# Deployment Checklist - Fix robots.txt Sitemap URL

## Issue
The robots.txt file is showing the old sitemap URL: `https://indushub.com/sitemap.xml`
It should show: `https://suretybondhub.in/sitemap.xml`

## Root Cause
The production environment variable `NEXT_PUBLIC_SITE_URL` is likely set to the old URL, or the site needs to be redeployed with the updated code.

## Solution

### Option 1: Update Environment Variable (Recommended)
If you're using Vercel, Netlify, or another hosting platform:

1. **Vercel:**
   - Go to your project settings
   - Navigate to **Environment Variables**
   - Find `NEXT_PUBLIC_SITE_URL`
   - Update it to: `https://suretybondhub.in`
   - Or delete it to use the code default
   - Redeploy

2. **Netlify:**
   - Go to Site settings → Environment variables
   - Update `NEXT_PUBLIC_SITE_URL` to `https://suretybondhub.in`
   - Trigger a new deploy

3. **Other Platforms:**
   - Update the `NEXT_PUBLIC_SITE_URL` environment variable to `https://suretybondhub.in`
   - Or remove it to use the default in code
   - Redeploy

### Option 2: Redeploy with Updated Code
The code already has the correct default (`https://suretybondhub.in`), so:
1. Commit and push your changes
2. Trigger a new deployment
3. The robots.txt should update automatically

## Verify After Deployment

1. Check robots.txt: `https://suretybondhub.in/robots.txt`
   - Should show: `Sitemap: https://suretybondhub.in/sitemap.xml`

2. Check sitemap.xml: `https://suretybondhub.in/sitemap.xml`
   - Should show URLs starting with `https://suretybondhub.in`

3. Test in Google Search Console:
   - Go to Sitemaps section
   - Submit: `https://suretybondhub.in/sitemap.xml`

## Files Already Updated ✅
- ✅ `app/robots.ts` - Uses correct default URL
- ✅ `app/sitemap.ts` - Uses correct default URL  
- ✅ `app/layout.tsx` - Uses correct default URL
- ✅ `components/structured-data.tsx` - Uses correct default URL

## Quick Fix Command (if using local .env)
If you have a `.env.local` file, make sure it has:
```env
NEXT_PUBLIC_SITE_URL=https://suretybondhub.in
```

Or remove the variable entirely to use the code default.
