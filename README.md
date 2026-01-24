# React Playground

A comprehensive React learning project demonstrating modern React patterns, state management solutions, routing, and API integration. This project serves as a practical showcase of various React ecosystem technologies and best practices.

## Project Overview

This React playground is designed to explore and demonstrate different approaches to building React applications. It showcases multiple state management patterns, routing strategies, and data fetching techniques commonly used in modern React development.

**Main Purpose**: Educational demonstration of React patterns and state management solutions

**Target Audience**: Developers learning React, recruiters evaluating React skills, and developers seeking reference implementations

## Features

- **Multiple State Management Approaches**
  - Zustand for lightweight global state (counter, authentication)
  - React Context API with useReducer for component tree state (tasks)
  - TanStack Query (React Query) for server state management (todos, posts)

- **Routing & Navigation**
  - React Router v7 with nested routes
  - Protected/private routes with authentication guards
  - Error boundaries and error pages
  - Layout components

- **Data Fetching & Caching**
  - React Query for todos with caching and stale time configuration
  - Infinite queries for paginated post data
  - Optimistic updates and mutations
  - React Query DevTools integration

- **Form Handling**
  - React Hook Form integration
  - Zod schema validation
  - Form submission with mutations

- **UI Components**
  - Bootstrap 5 for styling
  - React Icons for iconography
  - Responsive layouts

- **Developer Experience**
  - TypeScript for type safety
  - ESLint for code quality
  - Hot Module Replacement (HMR) with Vite
  - Zustand DevTools integration

## Tech Stack

### Frontend Technologies
- **React 19.2.0** - UI library
- **TypeScript 5.9.3** - Type-safe JavaScript
- **Vite 7.2.4** - Build tool and dev server

### State Management
- **Zustand 5.0.10** - Lightweight state management
- **React Context API** - Component tree state management
- **TanStack Query 5.90.19** - Server state management and caching

### Routing
- **React Router DOM 7.12.0** - Client-side routing

### Styling/UI Libraries
- **Bootstrap 5.3.8** - CSS framework
- **React Icons 5.5.0** - Icon library

### HTTP Client
- **Axios 1.13.2** - HTTP request library

### Form Management
- **React Hook Form 7.69.0** - Form state management
- **Zod 4.3.4** - Schema validation
- **@hookform/resolvers 5.2.2** - Form validation resolvers

### Build Tools & Package Managers
- **Vite** - Fast build tool and dev server
- **npm** - Package manager (via package-lock.json)

### Dev Tools & Linters
- **ESLint 9.39.1** - Code linting
- **TypeScript ESLint 8.46.4** - TypeScript-specific linting
- **React Query DevTools 5.91.2** - React Query debugging
- **simple-zustand-devtools 1.1.0** - Zustand store debugging

### Additional Libraries
- **Immer 11.1.3** - Immutable state updates (dependency present)

## Libraries & Frameworks

### Zustand
A minimal state management solution used for global application state (counter, authentication). Chosen for its simplicity, small bundle size, and excellent TypeScript support.

### TanStack Query (React Query)
Used for managing server state, caching, and synchronization. Provides automatic background refetching, caching strategies, and optimistic updates. Essential for handling async data fetching efficiently.

### React Router DOM
Modern routing solution for single-page applications. Enables client-side routing with nested routes, protected routes, and programmatic navigation.

### React Hook Form
Performance-optimized form library that minimizes re-renders. Used in combination with Zod for type-safe form validation.

### Bootstrap
CSS framework providing responsive grid system and pre-built components. Used for rapid UI development and consistent styling.

### Axios
Promise-based HTTP client used for API requests. Provides interceptors, request/response transformation, and better error handling compared to fetch.

## APIs & Integrations

### JSONPlaceholder API
- **Base URL**: `https://jsonplaceholder.typicode.com`
- **Endpoints Used**:
  - `/todos` - Todo CRUD operations
  - `/posts` - Post data with pagination support
- **Authentication**: None (public API)
- **Purpose**: Mock REST API for development and testing

### Third-Party Services
- **Not implemented yet** - No cloud services, storage, or payment integrations currently configured

## Architecture & Structure

### High-Level Architecture

The application follows a feature-based folder structure, organizing code by domain/concern rather than by file type:

```
src/
├── routing/          # Routing configuration and route components
├── state-management/ # Various state management implementations
├── react-query/      # React Query hooks and components
├── hooks/            # Custom React hooks
├── services/         # API clients and service layers
└── assets/           # Static assets
```

### Folder Structure Overview

- **`routing/`** - Contains route definitions, layout components, protected route guards, and page components
- **`state-management/`** - Demonstrates different state management patterns:
  - `counter/` - Zustand store example
  - `auth/` - Authentication state with Zustand
  - `tasks/` - Context API + useReducer pattern
- **`react-query/`** - React Query implementations for todos and posts
- **`hooks/`** - Reusable custom hooks (useTodos, usePosts, useAddTodo)
- **`services/`** - API client abstraction and service layer (todoService, apiClient)

### State Management Patterns

1. **Zustand Stores** (`state-management/counter/`, `state-management/auth/`)
   - Global state accessible from any component
   - DevTools integration for debugging

2. **Context API** (`state-management/tasks/`)
   - Provider pattern with useReducer
   - Suitable for component tree-scoped state

3. **React Query** (`react-query/`, `hooks/`)
   - Server state management
   - Automatic caching and synchronization
   - Optimistic updates

## Setup & Installation

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-playground
```

2. Install dependencies:
```bash
npm install
```

### Environment Variables

No environment variables are currently required. The application uses the public JSONPlaceholder API which doesn't require authentication.

If you need to configure a custom API endpoint in the future, you would add:
- `VITE_API_BASE_URL` - Base URL for API requests (example only)

### Running the Application

**Development Mode:**
```bash
npm run dev
```
Starts the Vite development server with hot module replacement. The application will be available at `http://localhost:5173` (or the next available port).

**Build for Production:**
```bash
npm run build
```
Creates an optimized production build in the `dist/` directory.

**Preview Production Build:**
```bash
npm run preview
```
Serves the production build locally for testing.

**Linting:**
```bash
npm run lint
```
Runs ESLint to check code quality and catch potential issues.

## Usage

### Local Development

1. Start the development server with `npm run dev`
2. Navigate to the displayed localhost URL
3. Explore different features:
   - **Home Page** - Main landing page
   - **Counter** - Zustand state management demo
   - **Tasks** - Context API state management demo
   - **Todos** - React Query data fetching demo
   - **Posts** - Infinite query pagination demo
   - **Users** - Protected route example (requires login)

### Example Workflows

**Adding a Todo:**
1. Navigate to the todos section
2. Enter a todo title in the form
3. Submit to create a new todo (uses React Query mutation)

**Viewing Posts:**
1. Navigate to the posts section
2. Scroll to load more posts (infinite scroll)
3. Posts are cached and paginated automatically

**State Management Comparison:**
- Compare Zustand (counter) vs Context API (tasks) implementations
- Observe React Query's automatic caching and refetching behavior
- Use DevTools to inspect state changes

**Protected Routes:**
1. Attempt to access `/users` route
2. Redirected to login if not authenticated
3. After login, access protected routes

## Future Improvements

### Planned Features
- Complete authentication implementation with login/logout functionality
- User profile management
- Additional state management examples (Redux Toolkit, Jotai)
- Unit and integration tests (Jest, React Testing Library)
- Error boundary improvements with error reporting
- Loading states and skeleton screens
- Dark mode theme toggle
- Internationalization (i18n) support

### Technical Improvements
- Add environment variable configuration for API endpoints
- Implement proper error handling and error boundaries
- Add comprehensive TypeScript types for all API responses
- Optimize bundle size with code splitting
- Add performance monitoring and analytics
- Implement service worker for offline support
- Add E2E tests with Playwright or Cypress
- Set up CI/CD pipeline
- Add Storybook for component documentation

## Screenshots / Demo

*Screenshots and demo videos will be added in the future.*

## License

MIT License

---

**Note**: This is a learning/playground project demonstrating React patterns and best practices. It is not intended for production use without additional security, testing, and optimization measures.
