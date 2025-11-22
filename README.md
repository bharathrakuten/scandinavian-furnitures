# Bharath Krishna - Personal Profile

A modern, responsive personal profile website showcasing MLOps and Kubernetes engineering expertise.

## Features

- **Google Single Sign-On (SSO)**: Secure authentication with Google accounts
- **Protected Routes**: Content accessible only to authenticated users
- **Modern React Application**: Built with React 18 and Vite for optimal performance
- **Dark/Light Mode**: Toggle between themes with persistent preference storage
- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Professional animations and transitions throughout
- **Optimized Performance**: Fast loading with Vite's optimized build system

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Authentication**: Firebase Authentication with Google SSO
- **Routing**: React Router DOM v6
- **Styling**: CSS with CSS Custom Properties (CSS Variables)
- **Theme**: Light/Dark mode support

## Project Structure

```
├── .env.example            # Environment variables template
├── index.html              # Entry HTML file
├── package.json            # Project dependencies
├── vite.config.js          # Vite configuration
└── src/
    ├── main.jsx            # Application entry point
    ├── App.jsx             # Main application component with routing
    ├── App.css             # Application styles
    ├── index.css           # Global styles and theme variables
    ├── firebase/
    │   └── config.js       # Firebase configuration and initialization
    ├── context/
    │   └── AuthContext.jsx # Authentication context provider
    └── components/
        ├── Header.jsx      # Navigation header with auth status & logout
        ├── SignIn.jsx      # Google Sign-In page
        ├── ProtectedRoute.jsx # Route guard for authenticated access
        ├── Portfolio.jsx   # Main portfolio layout
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

3. Set up Firebase Authentication:

   a. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)

   b. Enable Google Sign-In:
      - Go to **Authentication** > **Sign-in method**
      - Enable **Google** as a sign-in provider
      - Add your domain to the authorized domains list

   c. Get your Firebase configuration:
      - Go to **Project Settings** > **General**
      - Scroll down to **Your apps** section
      - Click on the web app (</>) icon to create a web app
      - Copy the Firebase configuration values

   d. Create a `.env` file in the project root:
   ```bash
   cp .env.example .env
   ```

   e. Update the `.env` file with your Firebase credentials:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key_here
   VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

**Note**: You must sign in with a Google account to access the portfolio content.

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

## Authentication

This application uses **Firebase Authentication** with **Google Sign-In** to protect content.

### How It Works

1. **Sign-In Page** (`/signin`): Users are presented with a Google Sign-In button
2. **Protected Routes**: All portfolio content is protected and requires authentication
3. **Authentication State**: Firebase manages user sessions automatically
4. **User Profile**: The header displays the authenticated user's photo and name
5. **Logout**: Users can sign out using the logout button in the header

### Security Features

- Firebase handles all authentication securely
- No passwords are stored in the application
- Sessions persist across page refreshes
- Automatic redirect to sign-in for unauthenticated users

## Sections

### Sign-In Page
- Clean, modern Google Sign-In interface
- Automatic redirect to portfolio after successful authentication
- Error handling for failed sign-in attempts

### Header
- Name and professional title
- User profile with avatar (when authenticated)
- Logout button
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

## License

This project is open source and available under the MIT License.

## Author

**Bharath Krishna**
- MLOps & Kubernetes Engineer
- Specializing in cloud infrastructure and ML automation

---

Built with React + Vite
