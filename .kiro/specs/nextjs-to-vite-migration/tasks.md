# Tasks

## Phase 1: Setup Vite Infrastructure

### 1.1 Install Vite Dependencies
- [x] Install `vite` as devDependency
- [x] Install `@vitejs/plugin-react` as devDependency
- [x] Run `npm install` to update package-lock.json

### 1.2 Create Vite Configuration
- [x] Create `vite.config.js` in project root
- [~] Configure React plugin
- [x] Configure path alias (`@` → `src`)
- [~] Configure dev server port (5173)
- [x] Configure build output directory (`dist`)
- [ ] Configure code splitting for vendor and swiper chunks

### 1.3 Create HTML Entry Point
- [~] Create `index.html` in project root
- [~] Add document structure and meta tags
- [~] Add title and description meta tags
- [~] Add viewport and theme-color meta tags
- [~] Add PWA manifest link
- [~] Add favicon and apple-touch-icon links
- [~] Add Apple Web App meta tags
- [~] Add font preload link for RaceSportRegular.woff2
- [~] Add root div with id="root"
- [~] Add module script tag for `/src/main.jsx`

### 1.4 Create Application Entry Point
- [~] Create `src/main.jsx`
- [~] Import React and ReactDOM
- [~] Import App component
- [~] Import globals.css
- [~] Create root and render App with StrictMode

### 1.5 Update Package.json Scripts
- [~] Change `dev` script to `vite`
- [~] Change `build` script to `vite build`
- [~] Change `start` script to `vite preview` (or remove)
- [~] Update or remove `lint` script as needed

### 1.6 Configure Path Aliases
- [~] Update `jsconfig.json` to include Vite-compatible path mappings
- [~] Verify `@/*` maps to `src/*`

## Phase 2: Migrate Application Structure

### 2.1 Create Root App Component
- [~] Create `src/App.jsx`
- [~] Copy component imports from `src/app/page.js`
- [~] Update imports to use `@/` alias
- [~] Create App function component
- [~] Add wrapper div with className="wrapper-div" and id="wrapper"
- [~] Add main element
- [~] Render all section components in correct order
- [~] Export App as default

### 2.2 Migrate Global Styles
- [~] Move `src/app/globals.css` to `src/globals.css`
- [~] Verify all CSS custom properties are preserved
- [~] Verify all global styles are preserved

### 2.3 Migrate Font Loading
- [~] Remove `next/font/google` imports from layout.js
- [~] Add `@font-face` declaration for RaceSport font in `globals.css`
- [~] Add `@font-face` declaration for Inter font in `globals.css`
- [~] Add `@font-face` declaration for Orbitron font in `globals.css`
- [~] Add `@font-face` declaration for Syncopate font in `globals.css`
- [~] Define CSS custom properties for font families in `:root`
- [~] Verify font-display: swap is set for all fonts

### 2.4 Delete Next.js App Directory
- [~] Verify all content from `src/app/page.js` is migrated to `src/App.jsx`
- [~] Verify all content from `src/app/layout.js` is migrated (fonts to CSS, metadata to HTML)
- [~] Verify `src/app/globals.css` is moved to `src/globals.css`
- [~] Delete `src/app` directory

## Phase 3: Migrate Components

### 3.1 Migrate Header Component
- [~] Open `src/components/sections/Header/Header.jsx`
- [~] Remove "use client" directive if present
- [~] Remove `import Image from "next/image"`
- [~] Replace all `<Image>` components with `<img>` elements
- [~] Convert `priority` prop to `loading="eager"`
- [~] Preserve all src, alt, width, height, className attributes
- [~] Verify imports from `@/utils/images` are correct
- [~] Save file

### 3.2 Migrate Hero Component
- [~] Open `src/components/sections/Hero/Hero.jsx`
- [~] Remove "use client" directive
- [ ] Remove `import Image from "next/image"`
- [ ] Replace all `<Image>` components with `<img>` elements
- [~] Convert `priority` prop to `loading="eager"` for critical images
- [~] Add `loading="lazy"` for non-critical images
- [ ] Preserve all src, alt, width, height, className attributes
- [~] Verify video element is standard HTML (no changes needed)
- [ ] Save file

### 3.3 Migrate Giveaway Component
- [~] Open `src/components/sections/Giveaway/Giveaway.jsx`
- [ ] Remove "use client" directive if present
- [~] Remove `import Image from "next/image"` if present
- [ ] Replace all `<Image>` components with `<img>` elements
- [~] Add appropriate loading attributes
- [~] Preserve all attributes
- [ ] Save file

### 3.4 Migrate GiveawaysPromo Component
- [~] Open `src/components/sections/GiveawaysPromo/GiveawaysPromo.jsx`
- [ ] Remove "use client" directive if present
- [ ] Remove `import Image from "next/image"` if present
- [ ] Replace all `<Image>` components with `<img>` elements
- [ ] Add appropriate loading attributes
- [ ] Preserve all attributes
- [ ] Save file

### 3.5 Migrate VehicleModes Component
- [~] Open `src/components/sections/VehicleModes/VehicleModes.jsx`
- [ ] Remove "use client" directive if present
- [ ] Remove `import Image from "next/image"` if present
- [ ] Replace all `<Image>` components with `<img>` elements
- [~] Verify Swiper imports are correct (should be from 'swiper' package)
- [~] Verify Swiper CSS imports are correct
- [~] Add appropriate loading attributes for images
- [ ] Preserve all attributes
- [ ] Save file

### 3.6 Migrate GameModes Component
- [~] Open `src/components/sections/GameModes/GameModes.jsx`
- [ ] Remove "use client" directive if present
- [ ] Remove `import Image from "next/image"` if present
- [ ] Replace all `<Image>` components with `<img>` elements
- [ ] Add appropriate loading attributes
- [ ] Preserve all attributes
- [ ] Save file

### 3.7 Migrate Team Component
- [~] Open `src/components/sections/Team/Team.jsx`
- [ ] Remove "use client" directive if present
- [ ] Remove `import Image from "next/image"` if present
- [ ] Replace all `<Image>` components with `<img>` elements
- [ ] Add appropriate loading attributes
- [ ] Preserve all attributes
- [ ] Save file

### 3.8 Migrate Roadmap Component
- [~] Open `src/components/sections/Roadmap/Roadmap.jsx`
- [ ] Remove "use client" directive if present
- [ ] Remove `import Image from "next/image"` if present
- [ ] Replace all `<Image>` components with `<img>` elements
- [ ] Add appropriate loading attributes
- [ ] Preserve all attributes
- [ ] Save file

### 3.9 Migrate Footer Component
- [~] Open `src/components/sections/Footer/Footer.jsx`
- [ ] Remove "use client" directive if present
- [ ] Remove `import Image from "next/image"` if present
- [~] Remove `import Link from "next/link"` if present
- [ ] Replace all `<Image>` components with `<img>` elements
- [~] Replace all external `<Link>` components with `<a target="_blank" rel="noopener noreferrer">`
- [ ] Add appropriate loading attributes for images
- [ ] Preserve all attributes
- [ ] Save file

### 3.10 Verify Reusable Components
- [~] Open `src/components/reusable/SectionHeading.jsx`
- [~] Verify no Next.js imports are present
- [~] Verify component is a functional component
- [~] Save file if changes needed
- [~] Open `src/components/reusable/SectionTopBar.jsx`
- [ ] Verify no Next.js imports are present
- [ ] Verify component is a functional component
- [ ] Save file if changes needed

## Phase 4: Remove Next.js Dependencies

### 4.1 Update Package.json Dependencies
- [~] Open `package.json`
- [~] Remove `"next": "^14.2.3"` from dependencies
- [~] Remove `"eslint-config-next": "^14.2.3"` from devDependencies
- [ ] Save file

### 4.2 Delete Next.js Configuration
- [~] Delete `next.config.js` file
- [~] Delete `.next` directory if it exists

### 4.3 Update Dependencies
- [ ] Run `npm install` to update package-lock.json
- [~] Verify no errors during installation

## Phase 5: Testing and Validation

### 5.1 Development Build Testing
- [~] Run `npm run dev`
- [~] Verify server starts without errors
- [~] Open browser to http://localhost:5173
- [~] Verify application loads without errors
- [~] Check browser console for errors
- [~] Verify all sections render correctly
- [~] Verify all images load correctly
- [~] Verify all fonts display correctly
- [~] Verify video background plays correctly
- [~] Test hot module replacement by editing a component
- [~] Test hot module replacement by editing a CSS file

### 5.2 Visual Regression Testing
- [~] Compare Header section to original
- [~] Compare Hero section to original (including video background)
- [~] Compare Giveaway section to original
- [~] Compare GiveawaysPromo section to original
- [~] Compare VehicleModes section to original (test Swiper functionality)
- [~] Compare GameModes section to original
- [~] Compare Team section to original
- [~] Compare Roadmap section to original
- [~] Compare Footer section to original

### 5.3 Responsive Testing
- [~] Test at 320px width (mobile)
- [~] Test at 375px width (mobile)
- [~] Test at 768px width (tablet)
- [~] Test at 1024px width (desktop)
- [~] Test at 1440px width (desktop)
- [~] Test at 1920px width (desktop)
- [~] Verify all breakpoints match original

### 5.4 Interactive Testing
- [~] Test all navigation links in Header
- [~] Test all hash links scroll to correct sections
- [~] Test all external links open in new tab
- [~] Test all download badge links
- [~] Test all social media links in Footer
- [~] Test Swiper slider interactions (if present)
- [~] Test all hover effects
- [~] Test video autoplay and loop

### 5.5 Production Build Testing
- [~] Run `npm run build`
- [~] Verify build completes without errors
- [~] Verify `dist` directory is created
- [~] Check dist directory size
- [~] Verify assets are in dist/assets directory
- [~] Verify fonts are in dist/fonts directory
- [~] Verify images are in dist/images directory
- [~] Run `npm run preview`
- [~] Open browser to preview URL
- [ ] Verify application loads without errors
- [~] Verify all functionality works identically to dev mode
- [ ] Check browser console for errors
- [~] Verify no 404 errors for assets

### 5.6 Cross-Browser Testing
- [~] Test in Chrome (latest)
- [~] Test in Firefox (latest)
- [~] Test in Safari (latest)
- [~] Test in Edge (latest)
- [~] Test in Mobile Safari (iOS)
- [~] Test in Chrome Mobile (Android)

### 5.7 Validation Checklist
- [~] Verify no `next` package in package.json
- [~] Verify no `eslint-config-next` in package.json
- [~] Verify no `next.config.js` file exists
- [~] Verify no `.next` directory exists
- [~] Verify no `src/app` directory exists
- [~] Run `grep -r "from 'next/image'" src/` and verify no results
- [~] Run `grep -r "from 'next/link'" src/` and verify no results
- [~] Run `grep -r "from 'next/font'" src/` and verify no results
- [~] Run `grep -r '"use client"' src/` and verify no results
- [~] Run `grep -r 'export const metadata' src/` and verify no results
- [~] Verify `vite` is in devDependencies
- [~] Verify `@vitejs/plugin-react` is in devDependencies
- [~] Verify `vite.config.js` exists
- [~] Verify `index.html` exists in project root
- [~] Verify `src/main.jsx` exists

### 5.8 Performance Testing
- [~] Run Lighthouse audit on development build
- [~] Run Lighthouse audit on production build
- [~] Compare Performance score to original
- [~] Compare Accessibility score to original
- [~] Compare Best Practices score to original
- [~] Compare SEO score to original
- [~] Verify scores match or exceed original

## Phase 6: Documentation

### 6.1 Update README.md
- [~] Update project title and description
- [~] Document new tech stack (React + Vite)
- [~] Document prerequisites (Node.js version)
- [~] Document installation instructions (`npm install`)
- [~] Document development command (`npm run dev`)
- [~] Document build command (`npm run build`)
- [~] Document preview command (`npm run preview`)
- [~] Document project structure
- [~] Document component architecture
- [~] Document centralized image management system
- [~] Document font loading system
- [~] Document deployment instructions
- [~] Remove any Next.js-specific documentation

### 6.2 Create Migration Notes
- [~] Document what was changed from Next.js to React + Vite
- [~] Document replaced Next.js features and their React equivalents
- [~] Document any breaking changes or differences
- [~] Document any known issues or limitations
- [~] Document future improvement opportunities

### 6.3 Update Code Comments
- [~] Review all component files for outdated comments
- [~] Update any comments referencing Next.js
- [~] Add comments explaining Vite-specific configurations
- [~] Ensure all complex logic is well-commented

## Phase 7: Final Cleanup

### 7.1 Clean Build Artifacts
- [~] Delete `.next` directory if still present
- [~] Delete `node_modules` directory
- [~] Run `npm install` to get clean dependencies
- [~] Run `npm run build` to verify clean build

### 7.2 Verify Git Status
- [~] Review all changed files with `git status`
- [~] Verify no unintended files are modified
- [~] Verify all Next.js files are deleted
- [~] Verify all new Vite files are added

### 7.3 Final Testing
- [~] Run `npm run dev` one final time
- [~] Perform quick smoke test of all sections
- [~] Run `npm run build` one final time
- [~] Verify production build works correctly

## Completion Criteria

The migration is complete when:
- [~] All tasks above are checked off
- [~] Development server runs without errors
- [~] Production build completes without errors
- [~] All UI sections match the original Next.js application exactly
- [~] All interactive features work correctly
- [~] All validation checks pass
- [~] Documentation is updated
- [~] No Next.js dependencies remain in the codebase
