// basic
/**
 * backend = programming language (framework,API) + database (ORM,ODM)
 * packages or modules
 * environment variables and secrets
 * readme,git,lint,prettier,...
 * dir structure - src(DB,models,controllers,routes,middleware,utils,...),
 * files - index,app(config,cookie),constants(enums,DB name)
 * toolchains or bundler - parcel,vite
 * api requests - fetch,axios,reactquery
 * cors,proxy
 * versions - "major.minor.patch" - *(latest,not safe),^(minor or patch), ~(only patch)
 * specific version module@version
 * configuration first (think of all scenarios) , then think of routers,controllers,...
 */

// topics
/**
 * 1. file handling
 * 2. npm
 * 3. events
 */

// js modules
/**
 * express - routing, web framework
 * express-fileupload -
 * mongoose - database related
 * mongoose-aggregate-paginate-v2 - pipelines
 * dotenv - env variable configuration (require syntax)
 * cors -
 * axios - designed specially for web requests
 * nodemon - dev dependency, auto reload server
 * cookie-parser -
 * os -
 * path -
 * fs -
 * date-fns - date functions,
 * chalk -
 * uuid - unique id generator
 * http - basic web server
 * events - emitting, logging
 * limiter - rate limiting
 * json-server -
 * jsonwebtoken -
 * bcrypt - password hashing
 * bcryptjs - optimised, no dependency
 * crypto - secret web token generator
 * url -
 * multer - middleware
 * cloudinary -
 * json-server - serve a .json file as a DB
 */

// package.json
/**
 * scripts -
 * type -
 * proxy -
 */

// .gitignore
/**
 * gitignore generator
 * do not forget to include .env, node_modules
 */

// node
/**
 * node - runtime environment
 * npm - utility (node package manager)
 * npx - (node package executor)
 * init - utility
 * modules - commonjs, es6
 * npm init
 * npm i -D or npm i --save-dev for development dependency
 * npm rm moduleName (default - doesn't remove from package.json)
 * npm uninstall moduleName
 */

// express
/**
 * server - hot reload is not default
 * listening
 * PORT -
 * request -
 * response -
 * routes - do not forget '/'
 * route handlers -
 * status codes -
 */

// regex
/**
 * ^ - starts with
 * $ - ends with
 * | - or
 * ? - optional
 * () - grouping
 */

// cors (cross origin resource policy)
/**
 * security policy
 * whitelisting or proxies
 */

// vite
/**
 * config file -
 *
 */

// middlewares
/**
 * .use() -
 * serve static files from dist - bad practice
 */

// mongoose
/**
 * moon modeler
 * eraser.io
 * data fields
 * schema
 */

// mongoDB
/**
 * TODO : connect to mongoDB Atlas, compass, docker image
 * atlas - IP address is allowed, username and password are correct
 * allow access from anywhere - bad practice
 * caveat = special characters in password
 * ensure URI and path are correct
 * connection - modular, IIFEs
 * async/await + exceptional handling - try catch
 * DB is in another continent
 * aggregation pipelines
 * plugins
 * middlewares
 * methods
 * take care of '/' in the URI while connecting to db
 * _id - unique id
 * __v - version
 */

// JWT - tokens
/**
 * cookie + httponly - secure
 * access tokens
 * refresh tokens - remove "secure":true for testing purposes only in case of thunderclient
 * cookies handling + cors error handling
 * refresh token rotation
 * bearer token
 * random token - require('crypto').randomBytes(32).toString('hex') // or 'base64url'
 */

// dotenv
/**
 * require('dotenv').config()
 * include the above line in every file to use .env or use this -
 */

// nodemon (auto update changes)
/**
 * "nodemon index.js" <=> "node --watch index.js" <=> "node --watch-path=./src index.js"  <=> "node --watch-path=./src index.js --watch-preserve-output"
 */

// commonjs vs es6
/**
 * serve static files - app.use(express.static(__dirname)); (commonjs),
 */

// HTTP
/**
 * URI
 * URL
 * URN
 * headers - metadata - {key:value} pairs  - caching,authentication,state management - legacy(-x) - req,res,representation,payload  - accept(application/json),user-agent(postman,browser),authorisation(bearer),content-type,cookie,cache-control - security - CORS
 * methods - GET(retrieve a resource),POST(add or create),PUT(replace),DELETE(remove a resource),PATCH(part),HEAD(no body),OPTIONS(available ops),TRACE(loopback),
 * status codes - 100 * 1(information),2(success),3(redirection),4(client error),5(server error)
 */

// json server
/**
 * npx json-server -p 3500 data/db.json (p is for PORT, -w is for watch but it is default)
 *
 */
