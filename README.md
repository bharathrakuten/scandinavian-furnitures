# Bharath Krishna - Personal Profile

A modern, responsive personal profile website showcasing MLOps and Kubernetes engineering expertise, built with Next.js 15, TypeScript, and shadcn/ui.

## Features

- **Google Single Sign-On (SSO)**: Secure authentication with NextAuth.js
- **Protected Routes**: Content accessible only to authenticated users
- **Modern Next.js 15**: Built with App Router and React Server Components
- **TypeScript**: Full type safety throughout the application
- **shadcn/ui Components**: Beautiful, accessible UI components
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Responsive Design**: Fully responsive layout that works on all devices
- **Optimized Performance**: Server-side rendering and automatic code splitting

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5.6
- **Authentication**: NextAuth.js v5 (Auth.js) with Google OAuth
- **UI Components**: shadcn/ui built on Radix UI
- **Styling**: Tailwind CSS v3.4
- **Theme**: next-themes for dark/light mode
- **Deployment**: Vercel (optimized)

## Project Structure

```
├── .env.example            # Environment variables template
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page (protected)
│   ├── signin/
│   │   └── page.tsx        # Google Sign-In page
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.ts # NextAuth API handler
│   └── globals.css         # Global styles with theme variables
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── avatar.tsx
│   │   └── badge.tsx
│   ├── theme-provider.tsx  # Theme provider component
│   ├── theme-toggle.tsx    # Theme toggle button
│   ├── Header.tsx          # Navigation with auth status
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills showcase
│   ├── Experience.tsx      # Experience timeline
│   ├── Projects.tsx        # Projects showcase
│   └── Contact.tsx         # Contact information
├── lib/
│   └── utils.ts            # Utility functions
├── auth.ts                 # NextAuth configuration
├── auth.config.ts          # Edge-compatible auth config
├── middleware.ts           # Route protection middleware
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm, yarn, or pnpm
- Google Cloud Platform account (for OAuth credentials)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd scandinavian-furnitures
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Google OAuth Credentials:**

   a. Go to [Google Cloud Console](https://console.cloud.google.com/)

   b. Create a new project or select an existing one

   c. Enable the Google+ API:
      - Go to **APIs & Services** → **Library**
      - Search for "Google+ API" and enable it

   d. Create OAuth 2.0 credentials:
      - Go to **APIs & Services** → **Credentials**
      - Click **Create Credentials** → **OAuth client ID**
      - Select **Web application**
      - Add authorized JavaScript origins:
        - `http://localhost:3000` (for development)
        - Your production URL
      - Add authorized redirect URIs:
        - `http://localhost:3000/api/auth/callback/google` (development)
        - `https://yourdomain.com/api/auth/callback/google` (production)
      - Click **Create** and copy the Client ID and Client Secret

4. **Configure environment variables:**
   ```bash
   cp .env.example .env.local
   ```

   Update `.env.local` with your credentials:
   ```env
   # Generate with: openssl rand -base64 32
   AUTH_SECRET=your_generated_secret_here

   # From Google Cloud Console
   AUTH_GOOGLE_ID=your_google_client_id_here
   AUTH_GOOGLE_SECRET=your_google_client_secret_here

   # Application URL
   NEXTAUTH_URL=http://localhost:3000
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

   **Note**: You must sign in with a Google account to access the portfolio content.

### Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

1. **Push your code to GitHub**

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js

3. **Configure Environment Variables:**
   In Vercel dashboard, go to **Settings** → **Environment Variables** and add:
   - `AUTH_SECRET` (generate with `openssl rand -base64 32`)
   - `AUTH_GOOGLE_ID`
   - `AUTH_GOOGLE_SECRET`
   - `NEXTAUTH_URL` (your production URL, e.g., `https://yourdomain.vercel.app`)

4. **Update Google OAuth redirect URIs:**
   Add your Vercel URL to authorized redirect URIs in Google Cloud Console:
   ```
   https://yourdomain.vercel.app/api/auth/callback/google
   ```

5. **Deploy:**
   Vercel will automatically deploy on every push to your main branch.

## Authentication Flow

1. Users visit the homepage and are redirected to `/signin` (protected by middleware)
2. Click "Sign in with Google" to authenticate
3. Google OAuth consent screen appears
4. After successful authentication, users are redirected back to the homepage
5. Header displays user profile with avatar and logout button
6. Sessions persist across page refreshes using JWT
7. Middleware protects all routes except `/signin`

## Customization

### Update Personal Information

Edit the following components to customize content:

- `components/Header.tsx` - Name and title
- `components/About.tsx` - Personal description and highlights
- `components/Skills.tsx` - Technical skills and categories
- `components/Experience.tsx` - Work history and achievements
- `components/Projects.tsx` - Featured projects
- `components/Contact.tsx` - Contact information and social links

### Theme Customization

Theme colors are defined in `app/globals.css` using CSS custom properties. Modify the `:root` and `.dark` sections to customize the color scheme.

### Add More shadcn/ui Components

```bash
npx shadcn@latest add [component-name]
```

Available components: https://ui.shadcn.com/docs/components

## Key Features Explained

### Server Components
- Portfolio components are React Server Components for optimal performance
- Reduces client-side JavaScript bundle size
- Faster initial page loads

### Middleware Protection
- `middleware.ts` protects all routes automatically
- Redirects unauthenticated users to `/signin`
- Edge runtime for fast authentication checks

### Type Safety
- Full TypeScript coverage
- Type-safe environment variables
- Autocomplete and IntelliSense support

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Breakpoints: sm, md, lg, xl, 2xl
- Touch-optimized navigation

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

Built with Next.js 15 + TypeScript + shadcn/ui + NextAuth.js
