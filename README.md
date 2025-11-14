# Bharath Krishna - Personal Profile

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

A modern, responsive personal profile website showcasing MLOps and Kubernetes engineering expertise.

## Live Demo

Visit the live website to see the profile in action!

## Features

- **Modern React Application**: Built with React 18 and Vite for optimal performance
- **Dark/Light Mode**: Toggle between themes with persistent preference storage
- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Professional animations and transitions throughout
- **Optimized Performance**: Fast loading with Vite's optimized build system

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: CSS with CSS Custom Properties (CSS Variables)
- **Theme**: Light/Dark mode support

## Project Structure

```
├── index.html              # Entry HTML file
├── package.json            # Project dependencies
├── vite.config.js          # Vite configuration
└── src/
    ├── main.jsx            # Application entry point
    ├── App.jsx             # Main application component
    ├── App.css             # Application styles
    ├── index.css           # Global styles and theme variables
    └── components/
        ├── Header.jsx      # Navigation header with theme toggle
        ├── About.jsx       # About section
        ├── Skills.jsx      # Technical skills showcase
        ├── Experience.jsx  # Professional experience timeline
        ├── Projects.jsx    # Featured projects
        ├── Contact.jsx     # Contact information
        └── *.css           # Component-specific styles
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd scandinavian-furnitures
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Customization

### Updating Personal Information

1. **Header**: Edit `src/components/Header.jsx` to update name and title
2. **About**: Modify `src/components/About.jsx` for personal description
3. **Skills**: Update skill categories in `src/components/Skills.jsx`
4. **Experience**: Edit job history in `src/components/Experience.jsx`
5. **Projects**: Modify project showcase in `src/components/Projects.jsx`
6. **Contact**: Update contact links in `src/components/Contact.jsx`

### Theme Customization

Theme colors are defined in `src/index.css` using CSS custom properties. Modify the `:root[data-theme='light']` and `:root[data-theme='dark']` sections to customize colors.

## Sections

### Header
- Name and professional title
- Navigation menu
- Dark/Light mode toggle

### About
- Personal introduction
- Key highlights (years of experience, projects, satisfaction rate)

### Skills
- Cloud & Infrastructure technologies
- MLOps & DevOps tools
- Programming languages and tools
- ML & Data technologies

### Experience
- Timeline of professional positions
- Job responsibilities and achievements
- Interactive timeline design

### Projects
- Showcase of featured projects
- Technology stack used
- Project descriptions

### Contact
- Email, GitHub, LinkedIn, Twitter links
- Professional contact information

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

The application can be deployed to various platforms:

- **Vercel**: `npm run build` then deploy the `dist/` folder
- **Netlify**: Connect your repository and set build command to `npm run build`
- **GitHub Pages**: Use `gh-pages` branch to deploy the `dist/` folder
- **Docker**: Containerize the application for cloud deployment

## License

This project is open source and available under the MIT License.

## Author

**Bharath Krishna**
- MLOps & Kubernetes Engineer
- Specializing in cloud infrastructure and ML automation

---

Built with React + Vite
