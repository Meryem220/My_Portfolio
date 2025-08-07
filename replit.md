# Portfolio Website

## Overview

This is a full-stack portfolio website built for showcasing a developer's professional profile. The application features a modern, responsive design with multiple sections including projects, skills, education, experience, and contact information. It's built using a React frontend with TypeScript, Express.js backend, and PostgreSQL database with Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React with TypeScript**: Main frontend framework using functional components and hooks
- **Vite**: Build tool and development server for fast development and optimized production builds
- **Wouter**: Lightweight client-side routing library for navigation
- **Tailwind CSS**: Utility-first CSS framework for styling with custom design system
- **shadcn/ui**: Pre-built component library based on Radix UI primitives for consistent UI components
- **TanStack Query**: Data fetching and state management for API calls
- **React Hook Form**: Form handling with validation using Zod resolvers

### Backend Architecture
- **Express.js**: Web server framework handling API routes and middleware
- **TypeScript**: Type-safe server-side development
- **Memory Storage**: In-memory data storage implementation with interface for future database integration
- **Vite Integration**: Development server setup with HMR (Hot Module Replacement) support
- **Middleware Stack**: Request logging, JSON parsing, and error handling

### Database Design
- **PostgreSQL**: Primary database using Neon serverless hosting
- **Drizzle ORM**: Type-safe database operations and schema management
- **User Schema**: Basic user table with id, username, and password fields
- **Migration System**: Drizzle-kit for database schema migrations

### UI/UX Design System
- **Design Tokens**: CSS custom properties for consistent theming
- **Component Library**: Comprehensive set of reusable UI components (buttons, forms, modals, etc.)
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Accessibility**: ARIA-compliant components with keyboard navigation support
- **Animation**: Smooth transitions and hover effects for enhanced user experience

### Development Tools
- **Build System**: Vite for frontend bundling and esbuild for backend compilation
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared schemas
- **Path Mapping**: Absolute imports using @ and @shared aliases for clean code organization
- **Hot Reload**: Development environment with instant feedback for code changes

## External Dependencies

### Core Frameworks
- **React 18**: Frontend framework with modern hooks and concurrent features
- **Express.js**: Backend web server framework
- **Vite**: Build tool and development server

### Database & ORM
- **@neondatabase/serverless**: PostgreSQL serverless database connection
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-kit**: Schema migration and management tools

### UI Components & Styling
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for creating component variants
- **clsx & tailwind-merge**: Conditional class name utilities

### State Management & Data Fetching
- **@tanstack/react-query**: Server state management and caching
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Form validation resolvers

### Development & Build Tools
- **typescript**: Type safety across the application
- **@vitejs/plugin-react**: React integration for Vite
- **@replit/vite-plugin-***: Replit-specific development plugins
- **esbuild**: Fast JavaScript bundler for production builds

### Utilities & Libraries
- **wouter**: Lightweight routing for React
- **date-fns**: Date manipulation utilities
- **nanoid**: Unique ID generation
- **zod**: Schema validation library
- **lucide-react**: Icon library for UI components