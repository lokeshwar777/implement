# (HTTP) Hypertext Transfer Protocol Notes (only theory)

## Client

1. Intro
   - web communication
   - HTTP Request & Response
   - protocol - parsing data -> info
   - client
     - make/send request to a server
   - server
     - always listening
     - handles incoming requests & sends response
   - web clients (request ->) - a device making requests to a web server
   - web servers (<- response) - a computer which serves web resources
   - HTTP (Request/Response) lifecycle
   - JS fetch API - `await fetch()` + `await response.json()`

2. DNS (Domain Name System)
   - resolution (lookup)
   - Domain/Host Name -> IP addresses
   - web addresses - IPv4, IPv6
   - URL API - `new URL(someUrl)`
   - ICANN - publisher, DNS - phonebook
   - (TLD) Top Level Domain
   - subdomains - prefixes a domain name

3. URI (Uniform Resource Identifiers)
   - `protocol:[//]username:password@domain:[PORT]/path?query=param#fragment` (`//` - authority component like http)
   - protocol
   - URL (Uniform Resource Locator)
     - PORT - default
     - path
   - URN (Uniform Resource Name)
   - query parameters - `?q=a+b%20&c=d`

4. Errors
   - catch error & handle gracefully
   - bug - bad, unexpected, fix code
   - error - not always bad, expected, handle
   - don't use debugger/try/catch to try to handle bugs
   - debugging - find where code is not behaving as expected (debugger / print)
   - error handling - handle expected edge cases

5. Headers
   - metadata about the request or response itself
   - Headers API - `.headers.get()`
   - Browser Dev Tools (network)
   - use case: auth, API key

6. (JSON) JavaScript Object Notation
   - sending (`.stringify()`)
   - parsing (`.parse()`)
   - `.json()` -> `any`
   - (XML) Extensible Markup Language - lightweight, easy to read, better support

7. Methods
   - GET - no body
   - POST
   - PATCH - partial resource update (rare)
   - PUT - completely replace a resource, idempotent
   - DELETE
   - CRUD - convention

8. RESTful APIs
   - Representational State Transfer
   - separate & agnostic (server/client)
   - stateless
   - paths
   - versioning - `v1/`

9. (HTTPS) Hypertext Transfer Protocol Secure
    - secures the data transfer between client and server by encrypting all of the communication
    - digital signatures
    - SSL/TLS
    - HTTPS Keeps Your Messages Private, but Not Your Identity (for that use VPNs)
    - security
    - public (encryption, client), private (decryption, server) & symmetric encryption key

## Server

1. Servers
   - async
   - performace reasons
   - promises - `await new Promise()`, `async await`, `.then()`
   - I/O timings
     - RAM - ns - sync
     - disk - ms - async/sync
     - network - 100-2000ms - async
   - fileserver - simple web server that serves static files from the host machine
   - custom handlers

2. Routing
   - middleware - `(req, res, next: function that, when called, will pass control to the next middleware in the chain)`
   - APIconfig - metrics

3. Architecture
   - monoliths - single, large program that contains all the functionality for both the front-end and the back-end of an application
   - decoupling - front-end and back-end are separated into different codebases
   - trade-off
     - monoliths - simple, easy to deploy, better UX & SEO
     - decoupled - scale, separation of concern, separate tech, pre-rendering
   - deployment
     - front-end server - vercel, netlify, github pages
     - monolith + backend server - AWS, GCP, Heroku, DigitalOcean, ...

4. Middleware
   - JSON `.json()`
   - error handling - `(err, req, res, next)` - errorHander
   - custom errors

5. Storage
   - raw files (serialised `.json` on disk) - no concurrency & scalability, very complex
   - database - PostgreSQL, ... (SQL), MongoDB, ... (NoSQL)
   - ORM
     - Drizzle(SQL) - migration tool written in TypeScript
     - Mongoose(NoSQL) - mongoDB specific
   - migration - set of changes to your DB table
     - up - moves the state of the database (current -> required schema)
     - down - revert/reset the database to a previous/known state
     - automatic
   - querying

6. API Design
   - clean API endpoints
   - `api/v1/endpoint/slugID`

7. API Testing
   - jest, vitest

8. Authentication - who a user is
   - attacks
   - passwords
     - plain text - attacks
     - hashing
       - one-way function
       - `f(str) -> hash`
       - Bcrypt is a great choice. SHA-256 and MD5 are not.
   1. password + ID (username, email) - manual so use password manager
   2. 3rd party - Google, Github, ... (user must have an account in any of these)
   3. magic links - link to email(encoded token) -> server(decode)
   4. API keys - CLI
   - JWT
     - APIs consumed by web & mobile apps
     - cryptographically signed JSON object(user-info)
     - lifecycle
     - Authorization header : Bearer TOKEN_STRING
     - token validation & expiry
     - access tokens (stateless)
       - provide access to protected resources
       - short-lived as they are irrevocable
       - security ∝ 1/lifespan
       - poor UX
     - refresh tokens (stateful)
       - get new access tokens
       - revovable & long-lived  (24h-60d)
   - cookies
     - small piece of data that a server sends to a client
     - primarily for browsers
   - cookies vs localstorage

9. Authorization - what a user is allowed to do
   - roles - owner, admin
   - authentication vs authorization

10. Webhooks
    - an event sent to server by external service
    - one-way communication from a third-party service to your server
    - webhook hanlders
      - idempotent (same result for every try)
      - acknowledge only on success
      - shape of response(data)
    - webhooks vs websockets
    - pull
    - push (webhooks)
    - API keys

11. Websocket
    - persistent connection between a client and a server

12. Documentation (docs)
    - incorrect docs is worse than no docs  
    - SDK

## uncategorised

- Request
  - `req.body`

- Response
  - `res.status()`
  - `res.json()`
  - `res.end()`
  - `res.send()`

- Status Codes - [docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)
  - 100-199 - Informational responses, rare
  - 200-299: Successful responses
  - 300-399: Redirection messages, invisible due to auto-redirect
  - 400-499: Client errors
  - 500-599: Server errors, bug on the server
  - 200 - OK, everything worked as expected
  - 201 - Created, resource was created successfully, POST request
  - 301 - Moved(resource) permanently, redirects
  - 400 - Bad request, client made a mistake in their request
  - 401 - Unauthorized, doesn't have the correct permissions. no authorization header
  - 404 - Not found, resource doesn't exist
  - 500 - Internal server error, something went wrong on the server
