// const form = document.getElementById("user-room-input");
// const inputData = new FormData(form);
const createButton = document.getElementById("create-room");
const joinButton = document.getElementById("join-room");
const roomNameElement = document.getElementById("room-name");
const userNameElement = document.getElementById("user-name");
const errorMessageElement = document.getElementById("error-message");

const existingRooms = new Set();
const existingUsers = new Set();

const displayErrorMessage = (error) => {
    errorMessageElement.innerHTML = error;
};

const joinRoom = (user, room) => {
    console.log(`${user} has joined ${room}`);
    window.location.href = `/chat?room=${room}&user=${user}`;
};

const handleJoinRoom = (e) => {
    const roomName = roomNameElement.value;
    const userName = userNameElement.value;
    if (!existingRooms.has(roomName)) {
        displayErrorMessage(
            `A rooom with name <span style="color:red">${roomName}</span> does not exists.`
        );
        return;
    }
    if (existingUsers.has(userName)) {
        displayErrorMessage(
            `A user with name <span style="color:red">${userName}</span> already exists.`
        );
        return;
    }
    roomNameElement.value = "";
    userNameElement.value = "";
    errorMessageElement.innerHTML = "";
    existingUsers.add(userName);
    joinRoom(userName, roomName);
};

const handleCreateRoom = (e) => {
    const roomName = roomNameElement.value;
    const userName = userNameElement.value;
    if (existingRooms.has(roomName)) {
        displayErrorMessage(
            `A rooom with name <span style="color:red">${roomName}</span> already exists.`
        );
        return;
    }
    if (existingUsers.has(userName)) {
        displayErrorMessage(
            `A user with name <span style="color:red">${userName}</span> already exists.`
        );
        return;
    }
    roomNameElement.value = "";
    userNameElement.value = "";
    errorMessageElement.innerHTML = "";
    existingRooms.add(roomName);
    existingUsers.add(userName);
    // console.log(`${userName} has created ${roomName} room`);
    // console.log(`Current rooms : ${existingRooms}`);
    // console.log(`Current users : ${existingUsers}`);
    joinRoom(userName, roomName);
};

createButton.addEventListener("click", handleCreateRoom);
joinButton.addEventListener("click", handleJoinRoom);

const socket = io();
socket.on("user-left", (user) => {
    existingUsers.delete(user);
});
