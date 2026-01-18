# Deployment Guide - GitHub Pages

This guide will walk you through deploying your portfolio to GitHub Pages using GitHub Actions (automatic deployment).

## Prerequisites

- A GitHub account
- Git installed on your local machine
- Node.js installed (for local testing)

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right corner and select **New repository**
3. Name your repository (e.g., `portfolio`, `rishu-portfolio`, or `my-portfolio`)
4. Choose **Public** (GitHub Pages is free for public repos)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **Create repository**

## Step 2: Update Base Path in vite.config.js

**Important:** You need to update the `base` path in `vite.config.js` based on your repository name:

- **If your repository name is `portfolio`**: Keep `base: '/portfolio/'`
- **If your repository name is different** (e.g., `my-portfolio`): Change to `base: '/my-portfolio/'`
- **If you're using a custom domain or deploying from root**: Change to `base: '/'`

Example for repository named `my-portfolio`:
```javascript
base: process.env.NODE_ENV === 'production' ? '/my-portfolio/' : '/',
```

## Step 3: Initialize Git and Push to GitHub

Open your terminal in the Portfolio directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace:**
- `YOUR_USERNAME` with your GitHub username
- `REPO_NAME` with your repository name

Example:
```bash
git remote add origin https://github.com/rishuraj2401/portfolio.git
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - **Source**: `GitHub Actions`
5. The workflow will automatically deploy your site

## Step 5: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 1-2 minutes)
4. Once complete, you'll see a green checkmark

## Step 6: Access Your Portfolio

Your portfolio will be available at:
```
https://YOUR_USERNAME.github.io/REPO_NAME/
```

Example:
```
https://rishuraj2401.github.io/portfolio/
```

## Automatic Deployment

Every time you push changes to the `main` branch, GitHub Actions will automatically:
1. Build your React app
2. Deploy it to GitHub Pages
3. Your site will update within 1-2 minutes

## Manual Deployment (Alternative Method)

If you prefer manual deployment using `gh-pages`:

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Update `package.json` scripts (already added):
```json
"deploy": "npm run build && gh-pages -d dist"
```

3. Deploy:
```bash
npm run deploy
```

4. In GitHub Settings > Pages, set source to `gh-pages` branch

## Troubleshooting

### Site shows 404 or blank page
- Check that the `base` path in `vite.config.js` matches your repository name
- Ensure the GitHub Actions workflow completed successfully
- Wait a few minutes for GitHub Pages to propagate

### Assets not loading
- Verify the `base` path is correct
- Clear your browser cache
- Check browser console for errors

### Workflow fails
- Check the Actions tab for error messages
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Want to use a custom domain?
1. Add a `CNAME` file in the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings with your custom domain

## Updating Your Portfolio

To update your portfolio:

```bash
# Make your changes
# Then commit and push
git add .
git commit -m "Update portfolio"
git push origin main
```

GitHub Actions will automatically rebuild and redeploy your site!

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

