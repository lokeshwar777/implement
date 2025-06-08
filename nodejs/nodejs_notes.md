# NodeJS Notes (only theory)

1. Basic & intro
   - nodejs - a runtime env to run js code on server (outside of browser)
   - open source, cross platform & runtime env
   - CLI vs GUI
   - (REPL) Read-Evaluate-Print-Loop ~python
   - VSCode debugger
   - window in browser & global in node
   - (both) globalThis = window (browser) | global (node)
   - not for CPU intensive

2. Installation & versioning
   - windows - winget, chocolaty
   - (SemVer) semantic versioning system
     - major.minor.patch
     - `^ ~ > < >= <= * x`, exact & range
     - LTS (even, stable), odd-current (latest)
   - node.js & npm versions
   - npm (global), npx, nvm, fnm(version switching)
   - `.gitignore` - `node_modules`, `.env`, config, API keys
   - flags
     - `--watch` (`nodemon` alternative)
     - `--inspect`
   - npm scripts & registry

3. Working | internals | architecture
   - history & evolution
   - broswer vs node.js
   - Ryan Dahl, Joyent, io.js, 4.0LTS, OpenJS
   - node.js = v8 + libuv + node bindings + core modules
   - chrome v8 engine (executes JS / sync code, C++, standalone + embedded)
     - call stack (main thread)
   - libuv (handles async non-blocking I/O ops, C/C++)
     - event loop
       - runs on main thread
       - sync suffix or blocking ops
       - sync > async
       - execution order & rules
         - timer queue (3) (setTimeout CBs)
         - I/O queue (4) (fs CBs)
         - check queue (5) (setImmediate CBs)
         - close queue (6)
         - microtask queue
           - nexttick queue (1)
           - promise queue (2)
         - 0ms delay vs I/O - can't guarantee an order
         - 0ms delay vs setImmediate - can't guarantee an order
         - I/O ops are added only after I/O polling (between I/O & check queues)
     - thread pool
       - CPU intensive (fs, crypto, compute)
       - thread pool size (default is 4, can be increased till no. of CPU cores)
       - network I/O doesn't use thread pool
     - (req, res) <=> (properties/incoming message, methods)
   - bindings (C++ glue between JS and OS)

4. Modules (or packages)
   - import/export
   - commonJS vs ESM
   - CLI vs lib packages
   - local, dev (`-d`) & global (`-g`)
   - `package.json`
     - vs `package.lock.json`
     - metadata
   - `node_modules`
     - `install` or `i`, `remove`, `outdated`, `update`, `check-updates`
     - audit & caching
     - package dependency & deprecated
   - modules
      - local
      - built-in (`path`, `events`, `fs`, `stream`, `http`) - `node:` is optional
      - third-party
      - caching
   - commonJS
      - module wrapper - IIFE(exports, require, ...)
      - (require + module.exports) patterns
      - exports vs module.exports
   - ESM
      - import/export
      - exports - named, default & aggregate
      - top-level await
      - caveats
        - `__dirname` & `__filename` issue so use `import.meta.dirname` & `import.meta.filename`
        - `"type":"module"` or `.mjs` instead of `.js`

5. Threads & Process mangement
   - cores, pid, parent-child processes
   - concurrency
     - single core
     - context switching
   - parallelism
     - multi-core
     - no context switching by real simultaneous
   - a process can't exist without a thread, (main thread - worst case)

6. EventEmitter
   - (EDA) Event-Driven Architecture
   - listener, trigger
   - best practice - single obj as an arg
   - async I/O
   - logging

7. Character sets & Encoding
   - character - unicode & ASCII

8. Streams
    - response is a stream that's why res.end()
    - transfer data in chunks
    - streams extend from EventEmitter
    - customise chunk size
    - types
      1. Readabe (`req`)
      2. Writeable (`res`)
      3. Duplex (`socket`)
      4. Transform (file compression)
    - pipe
      - connects readable with writable
      - chaining
    - better performance

9. Buffers

10. CLI
    - args  

11. Server
    - listen  

12. Routing
    - dynamic
    - params  

13. Middleware
    - validation (zod)
    - authentication
    - authorization
    - serve static files
    - form parsing
    - template engine

14. Database
    - ORM
    - ODM  

15. File Upload  

16. Web Socket

17. GraphQL

18. Templating
    - HTML template
    - (EJS) <% Embedded JS %>
      - view engine
      - .ejs instead of .html
      - <%= escaped %> , <%- unescaped %>
      - partials (reusable), `include()`
      - dynamic content

19. Testing

20. Deploying

---

- Object Exploration
  - global
  - process
  - module
  - exports
  - request
  - response

## Modules

- Process (`child_process`)

- Thread (`worker_threads`)
  - single instance
  - parallel execution

- OS (`os`)

- [Cluster](https://nodejs.org/api/cluster.html)
  - creation of child processes (workers)
  - master is only incharge of workers
  - create only
  - multiple instances

- Crypto

- Path
  - windows : `\` (backslashes) (C:\Users\Loki\Desktop)
  - linux/macOS : `/` (slashes) (/home/loki/Desktop)
  - absolute vs relative

- Zlib (`zlib`)
  - chaining pipes

- URL (`url`)

- [File handling](https://nodejs.org/api/fs.html) (`fs` & `fsPromise`)
  - read/write/append/rename-sync/async-promises/async-await
  - blocking (async) & non-blocking (sync) IO
  - decoding buffered data -> string
  - fs uses streams to read & write data

- Environment Variables (`dotenvx`)
  - source - `.env`, terminal, run command
  - `process.env`
  - `dotenv/config`(legacy) -> `--env-file=fileName`(modern)

- HTTP (`http`)
  - server is also an EventEmitter
  - create a server & routing
  - headers
  - status codes
  - cookies

- Nodemon (`nodemon`)

- JSON Server `jsonwebserver`

- Express (Routing)
  - routing framework,
  - server, listen, get, post, put, delete - chaining
  - router (use), routes (path), middleware
  - static & dynamic routes, route handler
  - req, res, next, err
  - static(), json()
  - req-res lifycycle
  - serve static files
  - parameters
    - route (`req.params`)
    - query (`req.query`) - `/search?query=777&limit=7`
  - content-type (`text`, `json`, `html`)

- MongoDB (NoSQL DB)
  - data is stored in documents or BSON (Binary JSON)
  - famous, scalability
  - collection = table in RDBMS
  - cluster
  - shell, compass, atlas

- Mongoose
  - (ORM) object-relational-mapping
  - (ODM) object-data-modelling
  - schema - description/template/blueprint
  - model - uses schema to interact with db
  - connection string

- JWT (`jsonwebtoken`(legacy) or `fast-jwt`(modern))

- Multer (`multer`)
  - file upload

- Socket IO (`socket.io`)

- Chalk (`chalk`)

- Zod
  - validation & transformation

- Fastify
  - express.js alternative

- Nest.js
  - express.js alternative

- Hono
  - express.js alternative

- yargs
  - CLI args

- loadash
  - cloning

- inquirer
  - prompting input for CLI

- pm2

- drizzle

---

## Things to keep in mind

- `await` time taking work for `async` functions
- do `JSON.stringify()` before send & `JSON.parse()` after receiving an `Object`
- include extension names for files while importing
