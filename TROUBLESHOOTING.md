# Troubleshooting White Page Issue

## Quick Diagnosis Steps

### 1. Check Browser Console
Open your deployed site and press `F12`, then check the Console tab for errors.

**Common errors:**
- `404` errors → Base path issue
- `Failed to load module` → Asset path issue
- `Uncaught ReferenceError` → JavaScript error

### 2. Verify Base Path

**For Vercel:**
- Base path should be `/` (default)
- Check `vercel.json` exists (it does!)
- No changes needed

**For GitHub Pages:**
- Base path must match repository name
- Example: If repo is `portfolio`, use `/portfolio/`
- Update `.github/workflows/deploy.yml` line 33:
  ```yaml
  VITE_BASE_PATH: /your-repo-name/
  ```

### 3. Test Build Locally

```bash
# Clean build
rm -rf dist node_modules/.vite
npm run build

# Check dist folder structure
ls -la dist/
# Should see: index.html, assets/ folder

# Preview build
npm run preview
# Visit http://localhost:4173
```

### 4. Check Network Tab

1. Open DevTools → Network tab
2. Reload page
3. Look for failed requests (red)
4. Check if assets are loading from correct path

---

## Common Fixes

### Fix 1: Vercel Deployment

**Problem:** White page on Vercel

**Solution:**
1. Ensure `vercel.json` exists (✅ already added)
2. Base path should be `/` (default in vite.config.js)
3. Redeploy on Vercel

**No code changes needed!**

### Fix 2: GitHub Pages Deployment

**Problem:** White page on GitHub Pages

**Solution:**
1. Find your repository name
2. Edit `.github/workflows/deploy.yml`
3. Update line 33:
   ```yaml
   VITE_BASE_PATH: /your-actual-repo-name/
   ```
4. Commit and push:
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Fix base path"
   git push
   ```

### Fix 3: Both Platforms

**Problem:** Still seeing white page

**Solution:** Check if React is mounting

Add this temporary debug code to `src/main.jsx`:

```javascript
console.log('React app starting...')
console.log('Base path:', import.meta.env.BASE_URL)
```

Then check browser console for these messages.

---

## Verify Configuration

### For Vercel:
- ✅ `vercel.json` exists
- ✅ `vite.config.js` has `base: process.env.VITE_BASE_PATH || '/'`
- ✅ No base path override needed

### For GitHub Pages:
- ✅ `.github/workflows/deploy.yml` exists
- ✅ `VITE_BASE_PATH` matches repository name
- ✅ Repository is public

---

## Still Not Working?

1. **Check build output:**
   ```bash
   npm run build
   cat dist/index.html
   ```
   Look for script tags - paths should be correct

2. **Check environment:**
   ```bash
   echo $VITE_BASE_PATH
   ```

3. **Clear cache:**
   - Browser: Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
   - Vercel: Redeploy
   - GitHub Pages: Wait 5 minutes, then hard refresh

4. **Check deployment logs:**
   - Vercel: Project → Deployments → Click deployment → View logs
   - GitHub Pages: Repository → Actions → Click workflow → View logs

---

## Quick Test Script

Create `test-build.sh`:

```bash
#!/bin/bash
echo "Building project..."
npm run build

echo "Checking dist folder..."
ls -la dist/

echo "Checking index.html..."
grep -o 'src="[^"]*"' dist/index.html

echo "Build complete! Test with: npm run preview"
```

Run: `chmod +x test-build.sh && ./test-build.sh`
