// in-short
/**
 * Express - HTTP requests only
 * HTTP server - HTTP requests + upgrade (WebSocket connections)
 * Socket.io - expects a HTTP server instance for initialisation
 * socket = new Server(createServer(express()));
 */

// GPT

// Key Points:
/**
 * Express handles HTTP requests, like GET, POST, etc.
 * Socket.io handles WebSocket connections, which are long-lived, persistent connections.
 * Both Express and Socket.io run on the same HTTP server (created by http.createServer(app)), which listens on the same port.
 */

// How They Work Together:
/**
 * Express serves your traditional HTTP routes (like GET / or POST /api).
 * Socket.io listens for WebSocket events (like when a client connects or sends a message).
 * Both services listen on the same HTTP server instance (created via http.createServer(app)), which allows them to share the same port.
 */

// Q/A
/**
 Q : Why Don’t We Just Use Express's app.listen() for Both?
 A : Socket.io requires access to a low-level HTTP server for handling WebSocket connections
 */

// TODO : explore websocket protocols
/**
 * handshake -
 * upgrade -
 * websocket vs socketio -
 */
