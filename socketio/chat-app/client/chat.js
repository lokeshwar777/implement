// console.log(window.location);
const params = new URLSearchParams(window.location.search);
// params.forEach((value, key) => {
//     console.log(`${key} : ${value}`);
// });

const currentUser = params.get("user");
const currentRoom = params.get("room");
// console.log(currentUser, currentRoom);

if (!currentUser || !currentRoom) window.location.href = "/";

const roomName = document.getElementById("room");
roomName.textContent += currentRoom;

const socket = io();
socket.emit("join-room", { user: currentUser, room: currentRoom });

const members = document.getElementById("members");
socket.on("update-users", (users) => {
    // console.log(users);
    members.textContent = users.join(", ");
});

const messageElement = document.getElementById("message-input");
const handleSubmit = (e) => {
    e.preventDefault();
    const message = messageElement.value;
    socket.emit("send-message", {
        user: currentUser,
        room: currentRoom,
        message,
    });
    messageElement.value = "";
};

const form = document.getElementById("chat-input");
form.addEventListener("submit", handleSubmit);

const messagesList = document.getElementById("messages-list");
const messages = [];

const addMessage = ({ user, message }) => {
    const newMessage = document.createElement("li");
    newMessage.textContent = `${user} :: ${message}`;
    // if (messageObj.user === currentUser) newMessage.className += "my-message";
    // newMessage.className = `p-2 bg-slate-800 max-w-[50%] break-words rounded-md text-white my-1 ${
    //     messageObj.user === currentUser && "self-end"
    // }`;
    // console.log("newMessage", newMessage);
    newMessage.classList.add(
        "p-2",
        "bg-red-800",
        "max-w-[50%]",
        "break-words",
        "rounded-md",
        "text-white",
        "my-1"
    );

    if (user === currentUser) {
        newMessage.classList.add("self-end");
    }
    messagesList.appendChild(newMessage);
};

socket.on("receive-message", (newMessageObj) => {
    messages.push(newMessageObj);
    addMessage(newMessageObj);
    updateMessageVisibility();
});

const noMessages = document.getElementById("no-messages");

const updateMessageVisibility = () => {
    const hasMessages = messagesList.querySelectorAll("li").length > 0;
    noMessages.hidden = hasMessages;
};

const initChat = () => {
    messages.forEach((messageObj) => addMessage(messageObj));
    updateMessageVisibility();
};

initChat();
