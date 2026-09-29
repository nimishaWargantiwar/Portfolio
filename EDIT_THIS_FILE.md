# ⭐ IMPORTANT: Edit This File to Add Your Links

## 📍 Location: `src/config.js`

This is the **ONLY** file you need to edit to personalize your portfolio with your actual links.

---

## 📋 What to Edit

Open: **`src/config.js`**

You will see:
```javascript
export const config = {
  // Social Links
  GITHUB_URL: "#",
  LINKEDIN_URL: "#",
  EMAIL: "wnimisha20@gmail.com",
  RESUME_URL: "#",

  // Project Links
  PROJECTS: {
    VAULTX: {
      GITHUB_URL: "#",
      LIVE_URL: "#",
    },
    CHAT_PDF: {
      GITHUB_URL: "#",
      LIVE_URL: "#",
    },
    CIE: {
      GITHUB_URL: "#",
      LIVE_URL: "#",
    },
  },
};
```

---

## ✏️ What to Replace

Replace each `"#"` with your actual URL:

### Social Links
```javascript
GITHUB_URL: "https://github.com/your-username"
LINKEDIN_URL: "https://linkedin.com/in/your-profile"
RESUME_URL: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID"
```

### Project Links

**VaultX Project:**
```javascript
VAULTX: {
  GITHUB_URL: "https://github.com/your-username/vaultx",
  LIVE_URL: "https://vaultx-demo.vercel.app",
}
```

**Chat with PDF Project:**
```javascript
CHAT_PDF: {
  GITHUB_URL: "https://github.com/your-username/chat-pdf",
  LIVE_URL: "https://chat-pdf-demo.vercel.app",
}
```

**CIE Project:**
```javascript
CIE: {
  GITHUB_URL: "https://github.com/your-username/cie-platform",
  LIVE_URL: "https://cie-demo.vercel.app",
}
```

---

## 📝 Examples

### GitHub URL
```javascript
// BEFORE
GITHUB_URL: "#"

// AFTER
GITHUB_URL: "https://github.com/nimisha-wargantiwar"
```

### LinkedIn URL
```javascript
// BEFORE
LINKEDIN_URL: "#"

// AFTER
LINKEDIN_URL: "https://linkedin.com/in/nimisha-wargantiwar"
```

### Resume URL (Google Drive)
```javascript
// BEFORE
RESUME_URL: "#"

// AFTER
RESUME_URL: "https://drive.google.com/uc?export=download&id=1ABC123DEF456..."
```

### Project GitHub
```javascript
// BEFORE
VAULTX: {
  GITHUB_URL: "#",
  LIVE_URL: "#",
}

// AFTER
VAULTX: {
  GITHUB_URL: "https://github.com/nimisha-wargantiwar/vaultx",
  LIVE_URL: "https://vaultx.vercel.app",
}
```

---

## 🔗 How to Get Your Links

### GitHub URL
1. Go to your GitHub profile: https://github.com
2. Copy your username from the URL
3. Format: `https://github.com/YOUR-USERNAME`

### LinkedIn URL
1. Go to your LinkedIn profile
2. Copy the URL from address bar
3. Usually: `https://linkedin.com/in/your-name`

### Resume URL (Google Drive)
1. Upload resume to Google Drive
2. Right-click → Share → Get link (make public)
3. Copy link: `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`
4. Change to: `https://drive.google.com/uc?export=download&id=FILE_ID`
   - Replace FILE_ID with the ID from your link

### Project URLs
If you haven't deployed projects yet, you can use `"#"` as a placeholder.

---

## ✅ After Editing

1. Save the file: `Ctrl+S` (or `Cmd+S` on Mac)

2. Test locally:
   ```bash
   npm run dev
   ```

3. Click the links to verify they work

4. Deploy:
   ```bash
   git add .
   git commit -m "Add personal links"
   git push
   ```

---

## ❓ What If I Don't Have a Project Deployed?

Leave it as `"#"` for now:

```javascript
VAULTX: {
  GITHUB_URL: "https://github.com/your-username/vaultx",
  LIVE_URL: "#", // Leave as # if not deployed yet
}
```

The project card will still show but the "Live Demo" button won't appear.

---

## 🎯 Quick Checklist

After editing `src/config.js`:

- [ ] Replaced GITHUB_URL with your GitHub profile
- [ ] Replaced LINKEDIN_URL with your LinkedIn profile
- [ ] Replaced RESUME_URL with your resume link
- [ ] Replaced VAULTX project URLs
- [ ] Replaced CHAT_PDF project URLs
- [ ] Replaced CIE project URLs
- [ ] Saved the file
- [ ] Ran `npm run dev` to test
- [ ] Verified all links work

---

## 📍 File Path Reference

```
/Users/nimisha/Desktop/Nimisha's Portfolio/
  └── src/
      └── config.js ⭐ EDIT THIS FILE
```

---

## 💡 Pro Tips

- Don't use `#` as final URLs (links won't work)
- Make sure URLs start with `https://`
- Copy exact URLs from browsers to avoid typos
- Test links after editing to make sure they work
- For live demos without deployment, use `#` to hide the button

---

## 🚀 You're Ready!

Once you update all the URLs in `src/config.js`, your portfolio is ready to share!

That's literally all you need to do. Everything else is already complete and working.

