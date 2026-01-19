# Deployment Guide - GitHub Pages & Vercel

This guide will walk you through deploying your portfolio to GitHub Pages or Vercel.

## 🚨 Important: Base Path Configuration

The white page issue is usually caused by incorrect base path configuration. Follow the instructions below based on your deployment platform.

---

## Option 1: Deploy to Vercel (Recommended - Easiest)

Vercel is the easiest option and doesn't require base path configuration.

### Steps:

1. **Push your code to GitHub** (if not already done)
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Go to [Vercel](https://vercel.com)** and sign in with GitHub

3. **Click "New Project"** and import your repository

4. **Configure Project:**
   - Framework Preset: **Vite**
   - Root Directory: `./` (default)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. **Click Deploy**

6. **Your site will be live!** (e.g., `https://your-project.vercel.app`)

**Note:** The `vercel.json` file is already configured for you. No base path changes needed!

---

## Option 2: Deploy to GitHub Pages

### Step 1: Update Base Path

**IMPORTANT:** You need to set the base path to match your repository name.

#### Option A: Update GitHub Actions Workflow (Recommended)

Edit `.github/workflows/deploy.yml` and update line 33:

```yaml
# If your repository is named "portfolio"
VITE_BASE_PATH: /portfolio/

# If your repository is named "my-portfolio"  
VITE_BASE_PATH: /my-portfolio/

# If deploying to root domain (username.github.io)
VITE_BASE_PATH: /
```

#### Option B: Update vite.config.js directly

Edit `vite.config.js`:

```javascript
base: process.env.VITE_BASE_PATH || '/your-repo-name/',
```

Replace `your-repo-name` with your actual repository name.

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new **public** repository
2. Name it (remember this name for the base path!)

### Step 3: Push Code to GitHub

```bash
cd Portfolio
git init
git add .
git commit -m "Initial commit: Portfolio website"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Wait for the workflow to complete (check the **Actions** tab)

### Step 5: Access Your Site

Your portfolio will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

---

## Troubleshooting White Page Issue

### Check Browser Console

1. Open your deployed site
2. Press `F12` to open Developer Tools
3. Go to **Console** tab
4. Look for errors (usually 404 errors for assets)

### Common Issues & Solutions

#### Issue 1: Assets Not Loading (404 errors)

**Solution:** Base path is incorrect
- For Vercel: Should be `/` (default)
- For GitHub Pages: Should be `/REPO_NAME/`

**Fix:**
- Vercel: No changes needed, `vercel.json` handles it
- GitHub Pages: Update `VITE_BASE_PATH` in `.github/workflows/deploy.yml`

#### Issue 2: Blank White Page

**Possible causes:**
1. JavaScript errors - Check browser console
2. Base path mismatch - Verify in `vite.config.js`
3. Build failed - Check GitHub Actions logs

**Debug steps:**
```bash
# Test build locally
npm run build
npm run preview

# Check if dist folder has correct structure
ls -la dist/
```

#### Issue 3: Routes Not Working

**Solution:** Ensure `vercel.json` (for Vercel) or proper redirects are configured

---

## Quick Fix Checklist

- [ ] Base path matches repository name (for GitHub Pages)
- [ ] Repository is public (for GitHub Pages)
- [ ] GitHub Actions workflow completed successfully
- [ ] No errors in browser console
- [ ] Build completes without errors locally (`npm run build`)
- [ ] `dist` folder contains `index.html` and `assets` folder

---

## Testing Locally Before Deployment

```bash
# Build the project
npm run build

# Preview the production build
npm run preview

# Test with base path (for GitHub Pages)
# Install serve: npm install -g serve
serve -s dist -l 5000
# Then visit http://localhost:5000/portfolio/ (replace with your repo name)
```

---

## Environment Variables

You can also set the base path using environment variables:

**For GitHub Pages:**
- Set in `.github/workflows/deploy.yml` (already configured)

**For Vercel:**
- No need to set (uses `/` by default)

**For local testing:**
```bash
VITE_BASE_PATH=/portfolio/ npm run build
```

---

## Need More Help?

- Check browser console for specific errors
- Verify build output in `dist` folder
- Check GitHub Actions logs (for GitHub Pages)
- Check Vercel deployment logs (for Vercel)

---

## Recommended: Use Vercel

For the easiest deployment experience, use **Vercel**:
- ✅ No base path configuration needed
- ✅ Automatic HTTPS
- ✅ Custom domain support
- ✅ Automatic deployments on git push
- ✅ Better error messages
