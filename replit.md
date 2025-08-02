# RainWare V6 - Advanced Script Platform

## Overview

RainWare V6 is an advanced scripting platform for Roblox game enhancement, featuring a modern full-stack web application built with React and Express. The application serves as a landing page and community hub for users to access scripting tools, tutorials, and support resources. The platform emphasizes user engagement through Discord integration, YouTube tutorials, and easy script distribution.

## User Preferences

Preferred communication style: Simple, everyday language.
Design preferences: Black background with realistic northern lights animated background (subtle greens, slower animation), blue secondary colors for better contrast and visual appeal.
Team information: Updated development team credits with specific roles.
Features requested: Discord webhook feedback system, YouTube channel sync, animated aurora background.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **UI Components**: Comprehensive set of Radix UI primitives providing accessibility-first components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and data fetching
- **Theme**: Dark-themed design with custom "rain" color palette and glassmorphism effects

### Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **Development Setup**: Hot reload using Vite middleware in development mode
- **API Structure**: RESTful API with `/api` prefix for all routes
- **Discord Integration**: Webhook system for feedback submissions without database storage
- **YouTube API**: Mock data structure ready for real API integration
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Request Logging**: Custom middleware for API request logging with duration tracking

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle migrations stored in dedicated migrations folder
- **Development Storage**: In-memory storage implementation for development/testing
- **Connection**: Neon Database serverless PostgreSQL for production

### Authentication and Authorization
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple
- **User Model**: Simple user schema with username/password fields and UUID primary keys
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database implementations

### Build and Deployment
- **Build Process**: Vite for frontend bundling, esbuild for backend compilation
- **Asset Management**: Separate public asset directory with proper static file serving
- **Development Tools**: TypeScript compilation checking and Drizzle database push commands
- **Production**: Compiled backend served as ESM modules with external package bundling

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect support
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI and Styling
- **shadcn/ui**: Comprehensive component library built on Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Radix UI**: Accessible component primitives for building design systems
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Vite**: Fast development server and build tool with React plugin support
- **TypeScript**: Static type checking across client, server, and shared code
- **PostCSS**: CSS processing with Tailwind and Autoprefixer plugins
- **ESBuild**: Fast JavaScript bundler for production backend builds

### Third-party Integrations
- **Discord**: Community platform integration with invite links and branding
- **YouTube**: Video tutorial embedding and channel promotion
- **GitHub**: Code repository hosting and version control
- **Font Awesome**: Icon library for social media and interface icons
- **Google Fonts**: Inter and JetBrains Mono font families for typography