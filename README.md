# TFJ's Portfolio

Personal portfolio of TFJ, an IT Specialist apprentice for Application Development.

## Overview

This repository contains the source code for the personal portfolio of TFJ (thekoi.dev). It is a static site built with Astro and React, featuring a clean interface and project highlights.

### Core Technologies
- **Astro**: Static site generation.
- **React**: Component-based UI.
- **Tailwind CSS v4**: Utility-first styling.
- **shadcn/ui**: Component library.

## Requirements

- [Node.js](https://nodejs.org/) (v18.17.1 or higher recommended)
- [npm](https://www.npmjs.com/) (Standard package manager used)

## Getting Started

### Installation

```bash
npm install
```

### Local Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`.

### Production Build

Build the production-ready site:

```bash
npm run build
```

The output will be in the `dist/` directory.

### Preview Build

Preview the production build locally:

```bash
npm run preview
```

## Scripts

| Script              | Description                                |
|:--------------------|:-------------------------------------------|
| `npm run dev`       | Starts the Astro development server        |
| `npm run build`     | Builds the project for production          |
| `npm run preview`   | Previews the build locally                 |
| `npm run lint`      | Runs ESLint for code quality               |
| `npm run format`    | Formats code using Prettier                |
| `npm run typecheck` | Runs Astro check and TypeScript validation |


## Testing

There are currently no automated tests configured for this project.

## Project Structure

```text
.
├── public/          # Static assets (images, fonts, etc.)
├── src/
│   ├── components/  # React and Astro components
│   │   ├── custom/  # Custom project-specific components
│   │   └── ui/      # shadcn/ui components
│   ├── hooks/       # Custom React hooks
│   ├── layouts/     # Page layouts
│   ├── lib/         # Utility functions
│   ├── pages/       # Routes (Astro file-based routing)
│   └── styles/      # Global CSS and Tailwind configurations
├── astro.config.mjs # Astro configuration
├── components.json  # shadcn/ui configuration
├── package.json     # Project dependencies and scripts
└── tsconfig.json    # TypeScript configuration
```

## License

This project is licensed under [MIT LICENSE](LICENSE)  

## Component Library (shadcn/ui)

This project uses `shadcn/ui` for its component library. Components are located in `src/components/ui`.

To add new components, use the shadcn CLI:

```bash
npx shadcn@latest add [component-name]
```
