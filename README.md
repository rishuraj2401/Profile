# Rishu Raj Sinha - Portfolio Website

A modern, animated portfolio website built with React and Framer Motion showcasing professional experience, skills, projects, and achievements.

## Features

- ✨ Smooth animations using Framer Motion
- 🎨 Modern, professional UI design
- 📱 Fully responsive layout
- 🚀 Fast performance with Vite
- 🌙 Dark theme optimized
- ♿ Accessible design

## Tech Stack

- **React 18** - UI library
- **Framer Motion** - Animation library
- **Vite** - Build tool
- **React Icons** - Icon library
- **CSS3** - Styling

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
Portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Sections

1. **Hero** - Introduction with animated profile image
2. **About** - Professional overview and highlights
3. **Experience** - Timeline of work experience
4. **Skills** - Technical skills organized by category
5. **Projects** - Featured projects with links
6. **Achievements** - Academic and professional achievements
7. **Contact** - Contact form and information
8. **Footer** - Social links and additional information

## Customization

To customize the portfolio with your own information:

1. Update the data in each component file
2. Replace images in the Hero component
3. Modify colors in `src/index.css` CSS variables
4. Update social links in Hero, Contact, and Footer components

## Deployment

### GitHub Pages (Recommended)

This portfolio is configured for automatic deployment to GitHub Pages using GitHub Actions.

**Quick Start:**
1. Create a GitHub repository
2. Update the `base` path in `vite.config.js` to match your repository name
3. Push your code to the `main` branch
4. Enable GitHub Pages in repository Settings > Pages (select "GitHub Actions" as source)
5. Your site will be live at `https://YOUR_USERNAME.github.io/REPO_NAME/`

📖 **See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed step-by-step instructions.**

### Other Platforms

This portfolio can also be deployed to:
- **Vercel** - `vercel deploy` (recommended for React apps)
- **Netlify** - Drag and drop the `dist` folder
- Any static hosting service - Upload the `dist` folder after running `npm run build`

## License

This project is open source and available for personal use.

