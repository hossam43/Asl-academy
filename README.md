# ASL Academy

A modern, interactive web-based platform for learning American Sign Language (ASL). This is a pure front-end application with no backend dependencies, designed for easy customization and deployment.

## 🌟 Features

- **Responsive Design** - Mobile-first approach with seamless experience across all devices
- **Interactive Course System** - Browse, filter, and view detailed course information with modal popups
- **Smooth Animations** - GSAP-powered animations and scroll triggers for engaging user experience
- **Multi-language Support** - Full English/Arabic translation with localStorage persistence
- **Parallax Effects** - Dynamic parallax and magnetic button animations
- **Animated Preloader** - Custom book animation with dynamic keyframes
- **Progressive Web App (PWA)** - Installable web app with manifest configuration
- **Sticky Navigation** - Auto-hiding/showing header based on scroll position
- **Course Filtering** - Filter courses by categories (Beginner, Intermediate, Advanced)
- **Modal Details** - Click any course to view full details in a modal popup

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Build Tool**: Webpack 5
- **Animation Library**: GSAP 3.12
- **Icons**: Ionicons
- **Fonts**: Google Fonts (Rubik)
- **Hosting**: Static hosting (Firebase Hosting, Vercel, Netlify, or any static server)

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A modern web browser

## 🚀 Installation & Setup

### 1. Clone or download the project
```bash
cd Asl-academy
```

### 2. Install dependencies
```bash
npm install
```

### 3. Development mode
```bash
npm run build
```

This will generate the bundled files in the `dist/` folder.

### 4. View the project locally
Open `src/index.html` in your browser or use a local server:
```bash
npx http-server src
```

## 📁 Project Structure

```
Asl-academy/
├── src/
│   ├── index.html              # Main landing page
│   ├── login.html              # Login page (static)
│   ├── register.html           # Registration page (static)
│   ├── 404.html                # 404 error page
│   ├── main.js                 # Core application logic
│   ├── intersectionObserver.js # Viewport detection utility
│   ├── translations.js         # Multi-language translations
│   └── css/
│       ├── general.css         # General/global styles
│       ├── styles.css          # Main component styles
│       ├── login.css           # Login/register page styles
│       └── queries.css         # Media queries (responsive)
├── assets/
│   ├── icons/                  # Favicon and PWA icons
│   └── images/                 # Logo and course images
├── zohoverify/                 # Verification files
├── package.json                # Project dependencies
├── webpack.config.js           # Webpack configuration
├── manifest.webmanifest        # PWA manifest
└── README.md                   # This file
```

## 🎯 Main Features Explained

### Navigation & Mobile Menu
- Click the hamburger menu on mobile to toggle navigation
- Sticky header automatically shows/hides based on scroll position

### Course Filtering
- Filter courses by category (All, Beginner, Intermediate, Advanced)
- Click any course card to view full details
- Close modal with close button, overlay click, or Escape key

### Language Support
- Select language from dropdown menu (English/Arabic)
- Language preference is saved in browser localStorage
- UI automatically switches text direction (LTR/RTL)

### Animations
- Hero section elements fade in on page load
- Parallax effects on hover
- Magnetic button effects
- Smooth scroll animations for course reveals
- Animated preloader with dynamic page-flipping effect

## ✏️ Customization

### Add New Courses
Edit the HTML in `src/index.html` to add course cards. Follow the existing structure:
```html
<div class="course c-1">
  <img class="course-img" src="..." alt="...">
  <h3 class="course-title">Course Title</h3>
  <p class="course-description">Short description</p>
  <p class="course-description-details">Full details for modal</p>
  <p class="course-price">$99</p>
</div>
```

### Update Translations
Edit `src/translations.js` to add or modify translations:
```javascript
const translations = {
  en: {
    "key_name": "English text"
  },
  ar: {
    "key_name": "النص العربي"
  }
};
```

### Customize Colors & Styles
Edit CSS files in `src/css/` to customize:
- Color scheme
- Typography
- Spacing
- Animations
- Responsive breakpoints

### Add New Pages
1. Create new HTML file in `src/`
2. Link it from navigation menu in `index.html`
3. Import `main.js` to enable animations and features

## 🚢 Deployment

### Firebase Hosting
```bash
npm run build
firebase deploy
```

### Vercel
```bash
vercel deploy
```

### Netlify
Push to GitHub and connect to Netlify for automatic deployment on push.

### Any Static Host
Simply upload the `src/` folder to any static hosting service (GitHub Pages, Surge.sh, AWS S3, etc.).

## 📱 Progressive Web App

The project includes PWA support with:
- Web app manifest (`manifest.webmanifest`)
- Multiple icon sizes (192x512px)
- Installable on home screen (iOS/Android)

To install:
- Android: Chrome menu → "Install app"
- iOS: Safari → Share → "Add to Home Screen"

## 🔧 Build Configuration

### Webpack
Configuration in `webpack.config.js` bundles JavaScript for production. Run:
```bash
npm run build
```

Output files are generated in `dist/` folder.

## 🎓 How It Works

1. **Page Load**: Animated preloader displays while resources load
2. **Content Display**: Main page shows courses categorized by level
3. **User Interaction**: 
   - Filter courses by category
   - Click course card to view details in modal
   - Change language with dropdown
   - Navigate with sticky header
4. **Animations**: GSAP triggers scroll-based animations as user scrolls

## 📝 Notes

- This is a **front-end only** application with no backend
- Login/register pages are static HTML (no actual authentication)
- To add backend functionality, integrate with a service like:
  - Firebase (auth + database)
  - Supabase
  - Custom Node.js/Express server
  - Any REST API

## 📞 Support & Contributions

For issues, suggestions, or improvements, please feel free to submit pull requests or create issues.

## 📄 License

ISC License

---

**Built with ❤️ for ASL learners worldwide**
