import express from "express";
import { createServer } from "node:http";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { Server } from "socket.io";

const app = express();
const httpserver = createServer(app);
// const io = socketIo(app);  // This won't work! as it expects an HTTP server
const io = new Server(httpserver);
const PORT = process.env.PORT || 3000;
// console.log("PORT", PORT);

// console.log("import.meta.url", import.meta.url);
const __filename = fileURLToPath(import.meta.url);
// console.log("__filename", __filename);
const __dirname = dirname(__filename);
// console.log("__dirname", __dirname);
// const __basename = basename(__filename);
// console.log("__basename", __basename);

const usersRoomMap = new Map();

const removeUser = (id) => {
    let user = "";
    for (const [room, users] in usersRoomMap) {
        const filteredUsers = users.filter((obj) => {
            if (obj.socketId === id) {
                user = obj.username;
            }
            return obj.socketId !== id;
        });
        if (filteredUsers.length !== users.length) {
            usersRoomMap.set(room, filteredUsers);
            break;
        }
    }
    return user;
};

io.on("connection", (socket) => {
    console.log(`${socket.id} new connection found!!!`);

    socket.on("join-room", ({ user, room }) => {
        socket.join(room);
        if (!usersRoomMap.get(room)) {
            usersRoomMap.set(room, []);
        }
        // console.log(usersRoomMap.get(room, []));
        usersRoomMap.get(room).push({ username: user, socketId: socket.id });
        // console.log(usersRoomMap);
        const users = usersRoomMap.get(room).map((obj) => obj.username);
        io.to(room).emit("update-users", users);

        socket.on("send-message", ({ room, user, message }) => {
            // console.log(room, user, message);
            io.to(room).emit("receive-message", { user, message });
        });
    });

    socket.on("disconnect", () => {
        const disconnectedUser = removeUser(socket.id);
        // console.log(
        //     "disconnectedUser",
        //     socket.id,
        //     usersRoomMap,
        //     disconnectedUser
        // );
        socket.emit("user-left", disconnectedUser);
        console.log(`${disconnectedUser} disconnected`);
    });
});

app.use(express.static(path.join(__dirname, "..", "client")));

app.get("/", (req, res) => {
    const indexFilePath = path.join(__dirname, "..", "client", "index.html");
    // console.log("indexFilePath", indexFilePath);
    res.sendFile(indexFilePath);
});

app.get("/chat", (req, res) => {
    const chatFilePath = path.join(__dirname, "..", "client", "chat.html");
    // console.log("chatFilePath", chatFilePath);
    res.sendFile(chatFilePath);
});

httpserver.listen(PORT, () => {
    console.log(`httpserver listening on ${PORT}`);
});
