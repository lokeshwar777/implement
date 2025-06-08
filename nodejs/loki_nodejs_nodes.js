// Global Module
/**
 *
 */

// Path Module
/**
 * parse()
 * format()
 * resolve() - // is considered as root
 * basename()
 * extname()
 * basename()
 * dirname(),
 * commonJS (__dirname, __filename)
 * ESM
 * - 20.11+ (import.meta.dirname, import.meta.__filename)
 * - older (new URL(import.meta.url).pathname, ...)
 * join()
 * sep
 */

// OS Module
/**
 * platform()
 * userinfo()
 * arch()
 * freemem()
 * totalmem()
 * cpus()
 * uptime
 * os
 */

// Encoding Formats
/**
 * UTF-8
 */

// File System (fs) Module (sync, async, promises)
/**
 * writeFileSync(), writeFile()
 * readFileSync(), readFile()
 * appendFileSync(), appendFile()
 * unlinkSync(), unlink()
 * renameSync(), rename()
 * readdir()
 * async/await
 */

// Event Module (EventEmitter)
/**
 * emit - call
 * on - listener
 */

// HTTP Module
/**
 *
 */

// Zod Package
/**
 * parse()
 * safeParse()
 * coerce
 */

// Express Package
/**
 * Router()
 * end()
 * send()
 * sendFile()
 * use()
 * render()
 * middlewares
 * - static files - express.static("folderName")
 * - forms - express.urlencoded({"extended" : true})
 * - templates - set("view engine", "ejs"), set("views", "./views")
 * writeHead()
 * Content-Type
 *  - "text/plain"
 *  - "application/json"
 *  - "text/html"
 */

// Character Sets & Encoding
/**
 * charCodeAt()
 */

// Buffers
/**
 * from()
 * toJSON()
 * toString()
 * write()
 */

// Streams
/**
 * fs.createReadStream()
 * fs.createWriteStream().write()
 *
 */

// JSON module
/**
 * stringify()
 * parse()
 */

// Cluster Module
/**
 * fork()
 * isMaster
 */

// Thread (worker_threads) Module
/**
 * parentPort.postMessage()
 */
