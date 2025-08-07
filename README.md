<<<<<<< HEAD
"# My Portfolio" 
=======

>>>>>>> f80cc9a9fac3a920a385c0c7b0bd4218ae762cb7
# Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern React with TypeScript
- 🎨 Beautiful gradient backgrounds (blue-purple hero section)
- 📱 Fully responsive design
- 🚀 Smooth animations and transitions
- 🎯 Professional sections: About, Projects, Skills, Education, Certifications, Experience, Hobbies, Contact
- 🎨 Custom color palette: Navy, Electric Blue, Vibrant Purple, Emerald, Warm Orange

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   
   **Note for Windows users:** The scripts now use `cross-env` for proper environment variable handling across all operating systems.

3. **Open your browser:**
   Visit `http://localhost:5000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - TypeScript type checking

## Project Structure

```
portfolio-website/
├── client/src/
│   ├── components/sections/     # Portfolio sections
│   ├── components/ui/          # UI components
│   ├── pages/                  # Main pages
│   └── index.css              # Custom styles
├── server/                     # Express backend
├── shared/                     # Shared types
└── package.json               # Dependencies
```

## Customization

- **Colors**: Edit `client/src/index.css` (lines 29-36)
- **Content**: Update section files in `client/src/components/sections/`
- **Personal Info**: Replace placeholder text with your details
- **Images**: Replace Unsplash URLs with your own photos

## Requirements

- Node.js 18 or higher
- npm (comes with Node.js)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS