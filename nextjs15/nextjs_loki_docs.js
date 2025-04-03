// raw notes
/**
 * hydration -
 * pre-rendering - SSR, SSG, ISR
 * Content Delivery Network -
 * error - client components
 * next - Link(prefetch),NextRequest,NextResponse,NextApiRequest,NextApiResponse,
 * children -
 * custom types -
 * params and promises -
 * metadata -
 * SSG - Static Site Generation
 * SSR - Server Side Rendering
 * ISR - Incremental Static Regeneration
 * Segment level Caching -
 * generateStaticParams() - SSR to SSG
 * generateMetadata() -
 * dynamic params -
 * nextjs router -
 * route handling -
 * APIs -
 * REST API - GET,DELETE,POST,PUT,
 * fetch(URL,method,headers) -
 * Edge Runtime -
 * types(TS) - Promise<>, Parital<>, Request,Response
 * middleware - configuration
 * RegExp -
 * limiter - rate limiter
 * cors -
 * revalidation - background,on-demand - revalidate - ISR - 86400(1 day) - double refresh issue - secret - only production
 * client('use client') and server('use server') components -
 * cache - "no-store"
 * router.refresh() - canary(experimental or beta) or useRouter() - updates client side cache
 * client side cache - prefetch, soft navigation
 * MDX -
 * server actions - react actions - action,formAction,startTransition - progressive enhancement - javascript disabled
 * useOptimisitic hook - solve the lag issue between click and state update
 * Suspense - fallback, isLoading, isError
 *
 *
 * destructuring params in the function using custom Props Type
 * do not forget `await res.json()`
 * deduped
 */

/**
 * src -> lib,pages(revalidate.ts),app -> routeName(head.tsx,page.tsx,layout.tsx,loading.tsx,not-found.tsx,error.tsx), components, api(config,route.ts,revalidate.ts) [dynamic routeName],middleware.ts
 * .env.local - env variables, secrets
 */

// useful links
/**
 * params as promise - https://github.com/orgs/community/discussions/142577
 * revalidation or ISR - https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration#route-segment-config
 * router,soft and navigation - https://nextjs.org/docs/app/api-reference/functions/use-router
 *
 *
 * uploadthing
 * planetscale
 */

/**
 * TODO : Build your own blog post website (posts from markdown(.md) files) + Revalidation
 */

// structured overview
/**
 * 1. routing - static and [dynamic] using folder structure
 * 2. pages - layout,page,head,error,not-found,loading
 * 3. counterparts and inbuilt - metadata,
 * 4. data-fetching - pre-fetching, caching(default),
 * 5. rendering - hydration,tree-shaking,static,SSR,SSG,ISR,
 * 6. components - server,client
 * 7. route-handlers - api/route(GET,POST,PUT,DELETE),middleware,revalidate
 * 8. middleware - origin,matcher,regex,rate-limiter(api/config/limiter,tokens),edge-runtime,cors
 * 9. revalidation - background,on-demand (data,url,path,request)
 * 10. mutating-data - navigation(hard,soft(push,replace,uses cache)),router.refresh(),
 * 11. build-deploy -
 * 12. server-actions - action,formAction,startTransition,progressive enhancement(javascript disabled),'use server',useOptimisitic, (!TODO!)
 * 13. keywords -
 * 14. typescript issues - custom types,
 *
 * upload-files - uploadthing,core.ts,modes(normal+DnD),limits,file type restrictions
 *
 */

// Counterparts
/**
 * Link,useRouter -> 'next/navigation' instead of 'react-router'
 * MetaData ->
 * loading -> has inbuilt React Suspence
 *
 */

// selfish things
/**
 * generateMetadata() - static and dynamic metadata
 * cache - 'force-cache', 'no-store'
 * revalidate -
 * generateStaticParams() - SSG using ISR
 * dynamicParams - true(default)
 * NextRequest, NextResponse, NextApiRequest, NextApiResponse -
 * destructuring props in the function using custom Props Type
 * config
 *
 * 'use client' - component with client-side features
 * 'use server' - (default) server functions (not components)
 */
