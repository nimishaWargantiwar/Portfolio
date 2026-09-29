# Nimisha Wargantiwar - Personal Portfolio Website

A modern, production-ready personal portfolio website built with React, Vite, and Tailwind CSS.

## Features

✨ **Modern Design**
- Clean, professional, and minimalist aesthetic
- Dark theme with blue accent color
- Smooth animations and transitions
- Responsive design for all devices
- Glassmorphism effects

🚀 **Performance**
- Built with Vite for fast development and optimized builds
- Lightweight and fast-loading
- No unnecessary dependencies
- Optimized for production

📱 **Fully Responsive**
- Desktop, tablet, and mobile support
- Hamburger menu for mobile navigation
- Touch-friendly buttons and interactions
- Optimized typography and spacing

♿ **Accessibility**
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Good color contrast
- Proper heading hierarchy

📋 **Sections Included**
- Navbar with sticky positioning
- Hero section with call-to-action
- About section
- Education timeline
- Technical skills with categories
- Featured projects with detailed cards
- Professional experience timeline
- Leadership and extracurricular activities
- Highlights and statistics
- Contact section
- Footer

## Tech Stack

- **Frontend**: React.js
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **JavaScript**: ES6+

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Clone or navigate to the project directory:
```bash
cd "Nimisha's Portfolio"
```

2. Install dependencies:
```bash
npm install
```

## Running Locally

Start the development server:
```bash
npm run dev
```

The website will open automatically in your browser at `http://localhost:3000` (or the next available port).

## Building for Production

Create an optimized production build:
```bash
npm run build
```

The built files will be in the `dist` folder.

## Updating Your Information

### Configuration File (IMPORTANT)

All external links are stored in `src/config.js`. This is the **only file** you need to edit to update your URLs:

```javascript
// src/config.js
export const config = {
  // Replace these URLs with your actual links
  GITHUB_URL: "https://github.com/your-username",
  LINKEDIN_URL: "https://linkedin.com/in/your-profile",
  RESUME_URL: "https://your-resume-link.pdf",
  
  PROJECTS: {
    VAULTX: {
      GITHUB_URL: "https://github.com/your-username/vaultx",
      LIVE_URL: "https://vaultx-demo.vercel.app",
    },
    CHAT_PDF: {
      GITHUB_URL: "https://github.com/your-username/chat-pdf",
      LIVE_URL: "https://chat-pdf-demo.vercel.app",
    },
    CIE: {
      GITHUB_URL: "https://github.com/your-username/cie-platform",
      LIVE_URL: "https://cie-demo.vercel.app",
    },
  },
};
```

Replace all `#` placeholders with your actual URLs:
- `GITHUB_URL`: Your GitHub profile URL
- `LINKEDIN_URL`: Your LinkedIn profile URL
- `RESUME_URL`: URL to your resume PDF
- `PROJECTS.*.GITHUB_URL`: GitHub repository links for each project
- `PROJECTS.*.LIVE_URL`: Live demo links (use `#` if not available)

### Adding Your Resume

1. Host your resume PDF on a cloud service (Google Drive, Dropbox, etc.)
2. Get a direct download link
3. Update `RESUME_URL` in `src/config.js`

### Modifying Project Information

Projects are stored in `src/components/Projects.jsx`. To update project details:

```javascript
const projects = [
  {
    // Project details here
    name: "Project Name",
    description: "...",
    // ...
  }
];
```

### Modifying Other Content

- **About section**: Edit `src/components/About.jsx`
- **Skills**: Edit `src/components/Skills.jsx`
- **Experience**: Edit `src/components/Experience.jsx`
- **Education**: Edit `src/components/Education.jsx`
- **Leadership**: Edit `src/components/Leadership.jsx`

## Deploying to Vercel

### Method 1: Direct Deployment

1. Push your repository to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to [Vercel.com](https://vercel.com) and sign up/log in
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

### Method 2: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts

### After Deployment

Your portfolio will be live at a Vercel URL. To use a custom domain:
1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Project Structure

```
Nimisha's Portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Leadership.jsx
│   │   ├── Highlights.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   ├── index.css          # Global styles
│   └── config.js          # ⭐ Configuration file (UPDATE THIS)
├── index.html             # HTML template
├── package.json           # Dependencies
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── README.md              # This file
```

## Key Files to Edit

| File | Purpose |
|------|---------|
| `src/config.js` | **UPDATE URLS HERE** |
| `src/components/Hero.jsx` | Hero section text |
| `src/components/About.jsx` | About section content |
| `src/components/Projects.jsx` | Project information |
| `src/components/Skills.jsx` | Technical skills |
| `src/components/Experience.jsx` | Work experience |
| `src/components/Education.jsx` | Education details |

## Customization

### Changing Colors

Edit `tailwind.config.js` to change the accent color:

```javascript
colors: {
  accent: "#60a5fa", // Change this to your preferred color
}
```

### Adding Animations

Edit `src/index.css` to add or modify animations.

### Adding New Sections

1. Create a new component in `src/components/`
2. Import it in `src/App.jsx`
3. Add it to the JSX

## Performance Tips

- Images are lazy-loaded automatically by modern browsers
- CSS is optimized with Tailwind's purge
- JavaScript is minified and code-split
- Use WebP images for better compression

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## SEO

The portfolio includes:
- Proper meta tags
- Semantic HTML
- Open Graph tags (can be added)
- Structured data support

## Troubleshooting

### Port 3000 already in use

Change the port in `vite.config.js`:
```javascript
server: {
  port: 3001,
}
```

### Styles not applying

Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Build errors

Make sure all dependencies are installed:
```bash
npm install
npm run build
```

## License

This portfolio is open source and available for personal use.

## Support

For issues or questions, feel free to reach out:
- Email: wnimisha20@gmail.com
- GitHub: [GitHub Profile URL]
- LinkedIn: [LinkedIn Profile URL]

---

**Made with ❤️ by Nimisha Wargantiwar**
