# Getting Started - Nimisha's Portfolio

## 🎯 Quick Start (3 Steps)

### Step 1: Run Locally
```bash
cd /Users/nimisha/Desktop/Nimisha\'s\ Portfolio
npm run dev
```
Open browser → Go to `http://localhost:3000`

### Step 2: Update Your Links ⭐ IMPORTANT
Edit this file: **`src/config.js`**

```javascript
export const config = {
  // Your GitHub profile
  GITHUB_URL: "https://github.com/your-username",
  
  // Your LinkedIn profile
  LINKEDIN_URL: "https://linkedin.com/in/your-profile",
  
  // Your resume PDF link
  RESUME_URL: "https://drive.google.com/...",
  
  // Your project links
  PROJECTS: {
    VAULTX: {
      GITHUB_URL: "https://github.com/...",
      LIVE_URL: "https://...",
    },
    CHAT_PDF: {
      GITHUB_URL: "https://github.com/...",
      LIVE_URL: "https://...",
    },
    CIE: {
      GITHUB_URL: "https://github.com/...",
      LIVE_URL: "https://...",
    },
  },
};
```

**That's it! Your portfolio is now personalized.**

### Step 3: Deploy to Vercel

#### Option A: GitHub + Vercel (Recommended)
1. Push to GitHub
2. Go to https://vercel.com
3. Import your GitHub repo
4. Click "Deploy"

#### Option B: Using Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 📁 Files You Created

### Main Files:
- ✅ `package.json` - Project dependencies
- ✅ `vite.config.js` - Vite configuration
- ✅ `tailwind.config.js` - Tailwind CSS setup
- ✅ `postcss.config.js` - PostCSS configuration
- ✅ `index.html` - HTML template

### Source Code:
- ✅ `src/main.jsx` - React entry point
- ✅ `src/App.jsx` - Main App component
- ✅ `src/index.css` - Global styles
- ✅ **`src/config.js`** ⭐ **EDIT THIS FILE**

### Components (in `src/components/`):
- ✅ `Navbar.jsx` - Navigation bar (sticky, responsive)
- ✅ `Hero.jsx` - Hero section with CTA buttons
- ✅ `About.jsx` - About section
- ✅ `Education.jsx` - Education timeline
- ✅ `Skills.jsx` - Technical skills with categories
- ✅ `Projects.jsx` - Featured projects (VaultX, Chat PDF, CIE)
- ✅ `Experience.jsx` - Work experience timeline
- ✅ `Leadership.jsx` - Leadership roles
- ✅ `Highlights.jsx` - Stats and expertise tags
- ✅ `Contact.jsx` - Contact section
- ✅ `Footer.jsx` - Footer with links

### Documentation:
- ✅ `README.md` - Comprehensive guide
- ✅ `GETTING_STARTED.md` - This file
- ✅ `.gitignore` - Git ignore rules

---

## ✏️ What to Edit for Customization

| Content | File | Location |
|---------|------|----------|
| **GitHub/LinkedIn URLs** | `src/config.js` | Line 5-8 |
| **Project URLs** | `src/config.js` | Line 10-24 |
| **Resume Link** | `src/config.js` | Line 8 |
| Hero text | `src/components/Hero.jsx` | Around line 30-50 |
| About section | `src/components/About.jsx` | Around line 30+ |
| Skills | `src/components/Skills.jsx` | Around line 8-25 |
| Projects | `src/components/Projects.jsx` | Around line 8-100 |
| Experience | `src/components/Experience.jsx` | Around line 8-40 |
| Education | `src/components/Education.jsx` | Around line 8-35 |

---

## 🎨 Design Customization

### Change Accent Color
Edit `tailwind.config.js`, line 6:
```javascript
accent: "#60a5fa", // Change to your color
```

### Add Your Own Resume PDF
1. Upload resume to Google Drive or similar
2. Get shareable link
3. Make it a download link by changing `/view` to `/export?format=pdf`
4. Paste in `src/config.js`

---

## 🚀 Deployment Checklist

Before deploying:
- [ ] Updated all URLs in `src/config.js`
- [ ] Added resume link
- [ ] Tested locally with `npm run dev`
- [ ] Build successful: `npm run build`
- [ ] No console errors

Deploy to Vercel:
- [ ] Push to GitHub
- [ ] Connect GitHub repo to Vercel
- [ ] Deploy

---

## 📞 Your Contact Info

- ✅ Email: wnimisha20@gmail.com (already set)
- ⏳ GitHub: Update in `src/config.js`
- ⏳ LinkedIn: Update in `src/config.js`
- ⏳ Resume: Update in `src/config.js`

---

## ❓ Common Questions

**Q: How do I add more projects?**
A: Edit `src/components/Projects.jsx` - add to the `projects` array

**Q: How do I change the dark blue background?**
A: Edit `tailwind.config.js` or the `bg-dark-900` classes in components

**Q: Can I add my own sections?**
A: Yes! Create a new `.jsx` file in `src/components/`, then import it in `src/App.jsx`

**Q: How do I get my resume link?**
A: Upload to Google Drive → Right-click → Share → Copy link → Change `/view?usp=sharing` to `/export?format=pdf`

---

## 🔧 Commands You'll Use

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm preview

# Install dependencies
npm install
```

---

## 📱 What's Included

✅ Modern, professional design
✅ Fully responsive (mobile, tablet, desktop)
✅ Smooth animations
✅ Dark theme with blue accent
✅ All 10 sections (Nav, Hero, About, Edu, Skills, Projects, Exp, Leadership, Highlights, Contact)
✅ SEO optimized
✅ Accessibility compliant
✅ Production-ready build
✅ Vercel deployable
✅ Zero backend/database
✅ Fast performance

---

**Your portfolio is ready! Just update `src/config.js` with your URLs and deploy. That's it! 🚀**
