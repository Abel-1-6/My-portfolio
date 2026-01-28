# Copilot Instructions for My Portfolio

## Project Overview

This is a **single-page portfolio website** built with React + Vite, showcasing Abel Takele's frontend skills and CS background. It's a frontend-only application with no backend services—all content is hardcoded in the component.

**Key Technologies:** React 18, TypeScript, Tailwind CSS 3, Vite 5, Framer Motion 11

## Architecture & Key Patterns

### Single Component Architecture
- **App.tsx** is the only significant component (376 lines)—contains all UI, data, and layout logic
- All content (tech badges, projects, education) is defined as constants at the top of the file
- Uses `map()` to render lists (tech badges, projects)

### Motion & Animation Strategy
- **Framer Motion** (`framer-motion`) provides scroll-triggered animations
- `fadeUp()` is a reusable animation factory function with delay parameter (sets opacity + y position on scroll)
- All major sections use `motion.section` with `whileInView` to trigger animations when visible
- Key animation prop: `viewport={{ once: true, amount: 0.4 }}` ensures animations run once when 40% visible

### Styling Approach
- **Tailwind CSS** is primary styling method; all colors + spacing via utility classes
- **Custom Tailwind theme** in [tailwind.config.cjs](tailwind.config.cjs):
  - Primary color: `#38bdf8` (cyan-500)
  - Accent color: `#a855f7` (purple-500)
  - Custom glow shadow: `shadow-glow`
- Responsive grid: uses `md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]` pattern for flexible layouts
- `glass-panel` class used throughout (likely a custom class—check `index.css` for definition)

## Build & Development Workflow

```bash
npm run dev       # Start Vite dev server (port 5173)
npm run build     # Build production bundle
npm run preview   # Preview production build locally
npm run lint      # Run ESLint (strict rules enabled)
```

## File Structure & Conventions

```
src/
  App.tsx        # Single component, all UI
  main.tsx       # Entry point (imports App)
  index.css      # Global styles + Tailwind imports
```

- **TypeScript strict mode** enabled; all types must be properly inferred or explicitly declared
- **SWC transpiler** used (via `@vitejs/plugin-react-swc`) for faster builds
- ESLint with React Hooks plugin; runs with max-warnings=0 (no warnings allowed)

## Developer Workflow Tips

### When Adding Content
- Update data constants (`techBadges`, `projects`) at top of App.tsx
- Use existing `fadeUp()` pattern for new sections
- Wrap sections with `motion.section` and spread `{...fadeUp(delayValue)}`

### Animations
- Always set viewport `once: true` to prevent re-triggering on scroll
- Use `delay` in fadeUp for staggered section reveals
- Common easing: `[0.22, 1, 0.36, 1]` (smooth, fast entry)

### Responsive Design
- Base styles mobile-first; use `md:` prefix for tablet/desktop overrides
- Max width constraint: `max-w-5xl` (1280px)
- Padding: `px-4 md:px-6` pattern for safe gutters

### Colors & Customization
- Always reference Tailwind config colors: `bg-primary-500`, `text-accent-500`
- Glow effects use `shadow-glow` with color stops (e.g., `shadow-primary-500/50`)
- Don't add inline colors—keep theme-driven

## Dependencies & External Services

- **Framer Motion 11.0.0**: Scroll animations (no server calls)
- **React 18.3.1 + React DOM**: UI framework
- **Tailwind CSS 3.4.15**: Styling via PostCSS
- **Vite 5.4.10**: Build tool with hot reload
- No backend APIs, databases, or external data sources
- Deployment likely to **Vercel** (common for React projects)

## Common Tasks

| Task | How |
|------|-----|
| Add a skill | Add string to `techBadges` array |
| Add a project | Add object to `projects` array |
| Change colors | Update `tailwind.config.cjs` theme colors |
| Fix ESLint errors | Run `npm run lint` and follow strict rules |
| Update animations | Modify `fadeUp()` or individual `motion.X` props |

## Notes for AI Agents

- The site is **portfolio-first**: UX optimized for visual appeal and smooth interactions
- All styling is **responsive** from mobile to desktop; test at multiple breakpoints
- **No state management** needed (no useState, useContext)—purely presentational
- TypeScript types are inferred; rarely explicit type annotations needed
- When modifying, keep **component structure flat** (avoid nesting unless necessary)
