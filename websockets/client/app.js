const wssWebSocket = new WebSocket('ws://127.0.0.1:8080');

// DOM elements
const messageInput = document.getElementById('message-input');
const messageForm = document.getElementById('input-form');
const messagesList = document.getElementById('message-list');

let messages;
try {
    messages = JSON.parse(localStorage.getItem('messages')) || [];
} catch (error) {
    localStorage.removeItem('messages');
    console.log('error loading messages ', error);
}

const loadMessagesFromLocalStorage = () => {
    messages.forEach((message) => {
        const messageElement = document.createElement('li');
        messageElement.textContent = message;
        messagesList.appendChild(messageElement);
    });
};

const addMessageToLocalStorage = (message) => {
    messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));
};

const handleSubmit = (e) => {
    e.preventDefault();
    const message = messageInput?.value;
    wssWebSocket.send(message);
    messageInput.value = '';
};

const receiveMessage = async (event) => {
    const newMessageElement = document.createElement('li');
    // const newMessage = await event.data.text();
    // console.dir(newMessageElement);
    const newMessage = event.data;
    newMessageElement.textContent = newMessage;
    messagesList.appendChild(newMessageElement);
    addMessageToLocalStorage(newMessage);
};

function initApp() {
    window.addEventListener('load', loadMessagesFromLocalStorage);
    messageForm.addEventListener('submit', handleSubmit);
    wssWebSocket.addEventListener('message', receiveMessage);
}

initApp();
