# Portfolio Dev

A modern, high-performance portfolio website built to showcase projects with cutting-edge web technologies. This project emphasizes interactive user experiences, sleek aesthetics, and responsive design.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8)

## 🚀 Key Features

- **Leading-Edge Tech Stack**: Built with Next.js 15 (App Router) and React 19 using Turbopack for lightning-fast development.
- **Interactive UI**: Custom components including:
  - **Spotlight Effects**: Dynamic hover effects for engaging cards.
  - **Image Comparison**: Interactive sliders to showcase "Before & After" transformations.
  - **Macbook Mockups**: Realistic device frames for project screenshots.
  - **Lateral Carousel**: Smooth, snap-scrolling container for browsing project highlights.
- **Responsive Design**: Mobile-first architecture ensures a seamless experience across all devices.
- **Modern Styling**: Powered by TailwindCSS v4 and Material UI for a robust and flexible design system.

## 🛠️ Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Core Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: 
  - [TailwindCSS v4](https://tailwindcss.com/)
  - [Material UI (MUI)](https://mui.com/)
  - CSS Modules / SCSS (for complex animations)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Utilities**: `clsx`, `tailwind-merge`

## 🏁 Getting Started

Clone the repository and install dependencies to get started locally.

### Prerequisites

- Node.js 20+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/gab3-dev/portfolio-dev.git
   cd portfolio-dev
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```bash
src/
├── app/                  # Next.js App Router pages and layouts
├── components/
│   ├── core/             # Reusable, core UI components (Carousel, Mockups, etc.)
│   └── ...
├── fonts/                # Local font configurations
├── styles/               # Global styles and component-specific CSS
└── lib/                  # Utility functions (cn, etc.)
```

## 📜 Scripts

- `npm run dev`: Starts the development server with Turbopack.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint checks.

---

Designed and developed with ☕ by [Gabe](https://github.com/gab3-dev).
