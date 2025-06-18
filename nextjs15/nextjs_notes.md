# NextJS Notes (only theory) - [docs](https://nextjs.org/docs/app)

1. Intro & Basic
   - React vs Next
   - edge time framework - things are not all time running in nextjs
   - `app/` vs `pages/` directories
     - Why app router is preferred
     - Mixing both (legacy support)
   - `next.config.js`
   - frontend heavy

2. File Structure & Pages
   - `layout.tsx`
     - root
     - exists for every root
     - `layoutComponent({pageComponent})`
   - `template.tsx`
   - `page.tsx`
   - `notFound.tsx` (unmatched routes)
     - dynamicRoute
     - no params in dynamicRoute so use Client components
   - `loading.tsx`
   - `error.tsx`
   - file colocation – keep related files together, but only `page.tsx` defines the route

3. Routing (folder structure)
   - folder based routing (heirarchy)
   - `Link` instead of `a` but no `NavLink`, `isActive` like we have in `react-router`
   - hardcoded/static > dynamic/nested
   - can't use optional catch-all route at root level
   - optional catch-all route includes `/someroute` but required catch-all route doesn't
   - root `page.tsx` in route groups
   - nested [dynamic] routing
   - catch-all routes/segments - unmatched (required, optional)
   - route groups (logical groups)
   - nested layouts
   - multiple root layouts
   - private folders
   - navigating programmatically - `redirect()` or `replace()`
   - advanced routing (viewing partial insta profile when user not logged in )
     - parallel routes - slots, `@componentName`, layout splitting, complex dashboard
     - intercepting routes - ``(..)(.)` for matching, modal overlay

4. Optimisations &  SEO
    - Optimisations
      - bundling, lazy loading
      - dynamic imports
    - MetaData API - static & dynamic
      - title
        - {default , template - dynamic metadata - `generateMetadata()`, absolute}
        - do not use `<title>` - not good practice instead use meta data
      - description
      - favicon
      - OpenGraph, Twitter cards
      - structured data

5. Styling
    - `*.css`
      - only loaded when the component is rendered in which css file is imported
      - once loaded then applied to all
      - overwrite - order of import matters
    - CSS Modules
      - `import styles from 'fileName.module.css`
      - prevent conflicts
    - SCSS (`sass`)
      - `;` is mandatory
    - Tailwind
    - Global styles in `layout.tsx`

6. Components
   - props
     - `params` : Promise
     - `searchParams` : Promise
   - we can get parent `params` in child
   - client components
     - execute on server as well as client
     - whenever we want browserObjects (`window`, `localStorage`,eventHandlers), reactHooks
     - directives - `'use client'` (rendering or frontend) , `'use server'`(default)
     - how not to show error in server console
     - server ignores client related code (`useEffect()`)
     - complete js code is sent to client
     - children in a client component are auto converted to client components
     - only make the components which need interactivity as client
   - server components
     - only execute on server
     - maximise server components
     - rendering server component inside a child component `{children}` prop
   - hydration
     - process of adding interactivity to pre-rendered HTML pages
     - it happens for both client & server components
     - hydration error
       - only in dev mode
       - when different outputs in server & client codes (branching out)
       - `Date.now()` or `Math.random()`
       - mostly occurs due to extensions, first try opening in incognito
   - contextAPI
     - light/dark theme
     - can't use in server components
   - image optimisation
     - compression
     - `<Image Loder={()=>{}}>`
     - uses `sharp` module
   - server & client composition pattern
   - server-only code
   - client-only code
   - third party packages
   - context providers
   - client component placement
   - interleaving server & client components
   - When to isolate components to avoid hydration mismatch

7. Rendering paradigms
   - app HTML generation
      - server
      - client
   - SSR
     - static redering - build time
     - dynamic redering - runtime, when a request is sent to dynamic route
     - SSG
       - `generateStaticParams()`
       - good for blogs but not for frequently changing data
       - finite pages are static generated
       - `dynamicParams` - limited pages, disable SSG in runtime
     - ISR
       - an extended version of SSG
       - `revalidate` or `fetch(url, {next : {revalidate : false/<number>}})`(next) - updating in intervals
   - CSR - Angular, React, vite, not good SEO
   - nextjs = SSR + CSR
   - render = html + css + js + favicon
   - builds into `.next` dir on `npm run build`
   - on refresh we get HTML of current page and RSC payload of rest of the pages
   - dynamically rendering static pages - [docs](https://nextjs.org/docs/app/getting-started/partial-prerendering#dynamic-rendering)
     1. `dynamic = 'force-dynamic'` or  `await searchParams`
     2. `await cookies()`
   - `dynamic = 'force-static|error` affects `searchParams`&`cookies()`
   - pre-rendering (SSG/SSR)
   - (RSC) React Server Components Lifecycle
   - streaming
     - for views, likes & comments
     - blocking components - `<Suspense fallback></Suspense>`
   - Suspense SSR

8. Error & Fallbacks - [docs](https://nextjs.org/docs/app/getting-started/error-handling)
    - notFound(), error.js, catch-all, boundaries
    - Loading UI fallback
    - Suspense fallback
    - `digest` id, `error.digest`
    - logging - `server.log`
    - `error.jsx`
      - client fallback component, prevent broken UI
      - error boundary
    - `useRouter()`
    - error in nested routes
    - server side exceptions
    - client side exceptions (auto opened pop-up - rendering error)
    - global-error - only seen in prod mode, better to use plan HTML & JS, must include html & body tags
    - reload - hard (`window.location.reload()`) , soft (`startTransition()` + `reset()` + `router.refresh()`)

9. Data Fetching
    - server & client components
    - loading & error states
    - sequential, parallel & DB
    - fetch caching & revalidation
    - third-party fetchers (e.g., Axios, GraphQL)
    - client components - `fetch()`(fetchAPI) + `useEffect(()=>{},[])`
    - server components - `fetch()`(next extends fetchAPI)
    - loading state - slow components/response
        - `loading.jsx`
        - `<Suspense fallback></Suspense>` - breakdown blocking page into components
        - when API calls are independent `Promise.all(Promise[])` - sequential -> parallel fetching (similar to multi-threading)

10. Route hanlders (formerly API Routes)
    - we can run any backend code in server components
    - `pages/api/routeName/*.ts` (Old) vs `app/routeName/route.ts` (New)
    - dynamic
    - GET, POST, PUT, DELETE
    - JS - `Request`, `Response`
    - next/server → `NextRequest`, `NextResponse`
    - response for `/someRoute`
      - Navigation Request (by browser)    → for UI page  → hits page.tsx → expects HTML
      - Programmatic (`fetch()`, `axios`)  → for API data → hits route.ts → expects JSON/text
    - headers - `headers()`
    - cookies - `cookies()`,
    - redirects
    - caching

11. Data Mutations
    - useFormStatus - pending
    - useActionState - validation
    - serverActions - separating, update & delete
    - Server actions vs client handlers
    - optimistic update
    - CSRF note if forms are public

12. Configuration & Environment
    - `next.config.js`
    - `env` variables
    - Base path, rewrites, redirects

13. Database
    - `connectToDatabase()` in every `route.ts`
    - we use the already existing connection if not then we will create a connection
    - redundant connection as nextjs runs on edge runtime
      - `readyState`
      - use caching (like cachedConnection)

14. Middleware
    - use cases: auth, geo-blocking
    - runs before route resolves
    - `matcher` config - regex for route filtering

15. Authentication
    - Auth.js (formerly NextAuth)
    - Clerk
    - profile settings
    - conditional UI rendering
    - protecting routes
    - signing cookies
    - session & user data
    - (RBAC) Role-Based-AccessControl
    - SessionProvider

## things to keep in mind

- recheck source of imports
- take care of client-side (`'use client'`) & server-side (`'use-server'` - default) errors

## Project Structure Syntax (Loki's)

```bash
src
├── components
├── lib
├── context
├── store
├── app
│ ├── routeName
│ │ └── (routeGroupName)
│ │   ├── nestedRouteName
│ │   │ ├── [DynamicRoute/slugName]
│ │   │ │ └── frontend (page.tsx) + backend (route.ts) (`/routeName/nestedRouteName/xyz/`)
│ │   │ └── frontend (page.tsx) + backend (route.ts) (`/routeName/nestedRouteName/`)
│ │   ├── catchAllRouteName
│ │   │ └── [...catchAllRouteName]
│ │   │   └── frontend (page.tsx) + backend (route.ts) (`/routeName/catchAllRouteName/xyz`)
│ │   ├── OptionalcatchAllRouteName
│ │   │ └── [...OptionalcatchAllRouteName]
│ │   │   ├─ route.ts (`/routeName/OptionalcatchAllRouteName/xyz`)
│ │   │   └── frontend (page.tsx) + backend (route.ts) (`/routeName/OptionalcatchAllRouteName/xyz`)
│ │   ├── "_privateRouteName"
│ │   ├── %5FnormalRouteName (`/routeName/_normalRouteName/`)
│ │   └── frontend (page.tsx) + backend (route.ts) (`/routeName/`)
│ ├── frontend (page.tsx) + backend (route.ts) (`/`)
│ ├── not-found.tsx
│ └── layout.tsx (root) (`Provider`)
```

## Project Structure Syntax (GPT + Loki)

```bash
src/
├── app/                           # Main routing directory (App Router)
│   ├── auth/                      # Auth route handlers (e.g., NextAuth.js)
│   │   ├── route.ts               # POST/GET for signIn, session etc.
│   │   └── config.ts              # NextAuth config (providers, callbacks)
│   ├── (routeGroup)/              # Optional route group
│   │   └── layout.tsx             # Shared layout for this group
│   ├── routeName/
│   │   ├── layout.tsx             # Shared layout for routeName
│   │   ├── page.tsx               # /routeName
│   │   ├── route.ts               # API for /routeName
│   │   └── [slug]/                # Dynamic route
│   │       ├── page.tsx
│   │       └── route.ts
│   ├── [...catchAllRouteName]/             # Catch-all route
│   │   └── page.tsx
│   ├── [[...optionalCatchAll]]/           # Optional catch-all
│   │   └── page.tsx
│   ├── error.tsx                  # Global error UI
│   ├── loading.tsx                # Global suspense fallback
│   ├── not-found.tsx              # 404 page
│   ├── globals.css                # Global styles
│   ├── layout.tsx                 # Root layout with <html> & <body>
│   └── page.tsx                   # Home page route (/)
├── components/
│   ├── ui/                        # Buttons, Inputs, etc.
│   ├── layout/                    # Navbar, Sidebar
│   └── auth/                      # LoginForm, SignupForm, AuthStatus
├── context/
│   └── AuthProvider.tsx           # Provides session context (NextAuth/Clerk)
├── hooks/
│   └── useAuth.ts                 # Hook to access user/session
├── store/
│   └── authStore.ts               # (optional) Zustand store for auth state
├── lib/
│   ├── models/                    # Mongoose/Prisma models
│   │   └── user.model.ts
│   ├── schemas/                   # Zod/Yup validation schemas
│   │   └── user.schema.ts
│   ├── auth.ts                    # getSession(), isAuthenticated(), etc.
│   ├── api.ts                     # API utilities (fetch wrapper)
│   ├── utils.ts                   # Generic helpers
│   └── db.ts                      # DB connection
├── types/                         # TS types & interfaces
│   └── auth.d.ts                  # Auth user/session types
├── constants/
│   └── roles.ts                   # RBAC roles and permissions
├── middleware.ts                  # Global middleware (auth guards, etc.)
├── env.mjs or env.js              # Type-safe env loading
└── public/                        # Static files (images, favicon, robots)
```

## uncategorised
