# Balbhadrasinh Portfolio Website

## 🚀 Professional Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS showcasing Flutter development projects and skills.

## ✨ Features

- **Modern Design** - Clean, professional UI with gradient effects
- **Responsive Layout** - Fully mobile-friendly design
- **Fast Performance** - Optimized with Vite and minified builds
- **Smooth Animations** - CSS animations for enhanced UX
- **Dark Theme** - Eye-friendly dark mode design
- **Project Showcase** - Display of featured work and technologies
- **Contact Section** - Easy ways to get in touch

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - Modern JavaScript

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/sani3854/balbhadra.p.git
cd balbhadra.p

# Install dependencies
npm install
```

## 🚀 Quick Start

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build for Production

```bash
npm run build
```

Builds the app for production to the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🚢 Deployment

### Deploy to GitHub Pages

```bash
npm run deploy
```

This will build the project and deploy it to GitHub Pages.

**Live URL:** https://sani3854.github.io/balbhadra.p/

## 📁 Project Structure

```
balbhadra.p/
├── src/
│   ├── components/
│   │   └── PortfolioWork.jsx    # Main portfolio component
│   ├── main.jsx                  # React entry point
│   ├── index.css                 # Global styles with Tailwind
│   └── App.jsx                   # App wrapper component
├── index.html                    # HTML entry point
├── package.json                  # Dependencies and scripts
├── vite.config.js                # Vite configuration
├── tailwind.config.js            # Tailwind configuration
├── postcss.config.js             # PostCSS configuration
├── .gitignore                    # Git ignore rules
└── README.md                     # This file
```

## 🎨 Customization

### Update Portfolio Content

Edit `src/components/PortfolioWork.jsx`:

```javascript
const projects = [
  {
    title: 'Your Project Title',
    description: 'Project description',
    tech: ['Technology 1', 'Technology 2'],
  },
  // Add more projects
];
```

### Modify Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#10b981',
    },
  },
},
```

### Update Skills

Edit the `skills` array in `src/components/PortfolioWork.jsx`.

## 📱 Responsive Design

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run deploy` | Deploy to GitHub Pages |

## 📚 Technologies Used

- **React** - Component-based UI library
- **Vite** - Next generation build tool
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS transformations
- **Autoprefixer** - Browser compatibility

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Balbhadrasinh**
- GitHub: [@sani3854](https://github.com/sani3854)
- Portfolio: [balbhadra.p](https://github.com/sani3854/balbhadra.p)

## 🙏 Support

If you found this helpful, please give it a ⭐ on GitHub!