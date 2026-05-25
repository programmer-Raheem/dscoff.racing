# Design Document: Next.js to Vite Migration

## Overview

This design document specifies the technical approach for migrating a Next.js application to a production-ready React + Vite application. The migration preserves exact UI fidelity while removing all Next.js-specific features and replacing them with standard React patterns.

### Migration Scope

The migration transforms:
- **Source**: Next.js 14 application with App Router, next/image, next/link, next/font, server components
- **Target**: React 18 + Vite 5 application with standard React patterns, React Router, standard HTML elements

### Key Principles

1. **Zero UI Changes**: The migrated application must be visually and functionally identical to the original
2. **Standard React Patterns**: Replace all framework-specific features with standard React equivalents
3. **Maintainability**: Improve code organization and maintainability through centralized asset management
4. **Production Ready**: Ensure optimal build configuration for deployment

### Current State Analysis

The application currently has:
- Next.js 14 with App Router structure (`src/app/`)
- Components using `next/image`, `next/link`, `next/font/google`
- Server component directives (`"use client"`)
- Metadata exports in layout.js
- CSS Modules for component styling
- Swiper.js for sliders (already installed)
- Centralized image management (`src/utils/images.js`)
- Vite configuration already present (partial migration started)

## Architecture

### High-Level Architecture

```mermaid
graph TD
    A[index.html] --> B[main.jsx]
    B --> C[App.jsx]
    C --> D[React Router]
    D --> E[Page Components]
    E --> F[Section Components]
    F --> G[Reusable UI Components]
    
    H[globals.css] --> C
    I[CSS Modules] --> F
    I --> G
    
    J[public/images] --> K[src/utils/images.js]
    K --> F
    K --> G
    
    L[public/fonts] --> M[@font-face in globals.css]
    M --> C

    N[Vite Build System] --> O[dist/]
    O --> P[Production Deployment]
```

### Directory Structure

```
dscoff-react/
├── public/
│   ├── images/           # Static images
│   ├── fonts/            # Custom fonts
│   ├── manifest.json     # PWA manifest
│   └── favicon.ico       # Favicon
├── src/
│   ├── main.jsx          # Application entry point
│   ├── App.jsx           # Root component
│   ├── globals.css       # Global styles and fonts
│   ├── components/
│   │   ├── sections/     # Major section components
│   │   │   ├── Header/
│   │   │   ├── Hero/
│   │   │   ├── Footer/
│   │   │   └── ...
│   │   └── reusable/     # Reusable UI components
│   │       ├── SectionTopBar/
│   │       └── SectionHeading/
│   └── utils/
│       └── images.js     # Centralized image exports
├── index.html            # HTML entry point
├── vite.config.js        # Vite configuration
└── package.json          # Dependencies and scripts
```

### Migration Strategy

The migration follows a systematic approach:

1. **Dependency Management**: Remove Next.js packages, ensure Vite packages are present
2. **Entry Point Transformation**: Convert App Router to standard React entry points
3. **Component Migration**: Replace Next.js-specific components with React equivalents
4. **Font System Migration**: Replace next/font with CSS @font-face
5. **Metadata Migration**: Move metadata exports to HTML meta tags
6. **Routing Implementation**: Implement React Router for navigation
7. **Build Configuration**: Optimize Vite configuration for production
8. **Validation**: Verify complete removal of Next.js dependencies

## Components and Interfaces

### Core Application Components

#### 1. Entry Point (main.jsx)

**Purpose**: Application bootstrap and React DOM rendering
