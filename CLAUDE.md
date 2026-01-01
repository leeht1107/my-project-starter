# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 project using the App Router, React 19, TypeScript, and Tailwind CSS 4. It includes shadcn/ui components configured with the "New York" style variant and uses Lucide icons.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Custom Commands

This project includes custom Claude Code commands in `.claude/commands/`:

### `/add-ui` - Add shadcn/ui components

Quickly add shadcn/ui components to the project.

```bash
# Add single component
/add-ui dialog

# Add multiple components
/add-ui dropdown-menu select toast
```

Available components: https://ui.shadcn.com/docs/components

## Architecture and Key Patterns

### Directory Structure

- `app/` - Next.js App Router structure
	- `page.tsx` - Route pages (Server Components by default)
	- `layout.tsx` - Shared layouts with metadata
	- `globals.css` - Global styles and Tailwind configuration
- `components/ui/` - shadcn/ui components (Button, Card, etc.)
- `lib/` - Utility functions
	- `utils.ts` - Contains `cn()` helper for merging Tailwind classes
- `public/` - Static assets

### Import Aliases

The project uses TypeScript path aliases configured in `tsconfig.json`:

- `@/*` - Maps to project root
- `@/components` - Access components directly
- `@/lib/utils` - Access utilities
- `@/components/ui` - Access UI components

Always use these aliases instead of relative imports.

### Component Patterns

**Server Components (default)**: Most components in `app/` are React Server Components. They cannot use hooks, event handlers, or browser APIs.

**Client Components**: Add `"use client"` directive at the top when you need:
- React hooks (useState, useEffect, etc.)
- Event handlers (onClick, onChange, etc.)
- Browser APIs

**shadcn/ui Components**: Located in `components/ui/`, these follow a specific pattern:
- Built with Radix UI primitives
- Styled with Tailwind CSS
- Use `cn()` utility for conditional classes
- Support variant-based styling via class-variance-authority (cva)

### Styling

**Tailwind CSS 4**: This project uses Tailwind CSS v4 with:
- CSS variables for theming (defined in `app/globals.css`)
- Custom dark mode variant: `dark:` prefix
- Animation utilities from `tw-animate-css`
- Inline theme configuration using `@theme inline`

**Class Merging**: Always use the `cn()` utility from `@/lib/utils` to merge Tailwind classes, especially when combining conditional classes or prop-based classes.

Example:
```tsx
import { cn } from "@/lib/utils";

<div className={cn("base-classes", condition && "conditional-classes", className)} />
```

### Component Configuration

The `components.json` file configures shadcn/ui:
- Style: "new-york"
- RSC: true (React Server Components enabled)
- Icon library: lucide-react
- CSS variables: enabled

When adding new shadcn/ui components, they will follow this configuration automatically.

## TypeScript Configuration

- Strict mode enabled
- Target: ES2017
- JSX: react-jsx (no import React needed)
- Incremental compilation enabled
- Skip lib check enabled for faster builds

## Working with This Codebase

### Adding New Pages

Create new routes by adding folders in `app/`:
```
app/
  dashboard/
    page.tsx      # /dashboard route
    layout.tsx    # Optional dashboard layout
```

### Adding New Components

For shadcn/ui components:
```bash
npx shadcn@latest add [component-name]
```

For custom components, place them in `components/` (not in `ui/` subfolder).

### Styling Guidelines

1. Use Tailwind utility classes for styling
2. Follow mobile-first responsive design (use `md:`, `lg:` breakpoints)
3. Use CSS variables for colors (defined in `globals.css`)
4. Leverage the dark mode variant when appropriate
5. Keep component-specific styles inline with Tailwind

### Font Usage

The project uses Geist font family (Sans and Mono) loaded via `next/font/google`:
- `--font-geist-sans` - Available as CSS variable
- `--font-geist-mono` - Available as CSS variable

These are configured in `app/layout.tsx` and applied globally.

## Next.js App Router Specifics

- **Server Components by default**: Components in `app/` are server components unless marked with `"use client"`
- **Metadata**: Export `metadata` object from `layout.tsx` or `page.tsx` for SEO
- **Loading states**: Create `loading.tsx` in route folders for loading UI
- **Error handling**: Create `error.tsx` in route folders for error boundaries
- **Route groups**: Use `(folder)` syntax to organize routes without affecting URL structure

## ESLint Configuration

Uses Next.js recommended ESLint config with TypeScript support. The following directories are ignored:
- `.next/`
- `out/`
- `build/`
- `next-env.d.ts`
