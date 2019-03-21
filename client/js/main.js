// Make connection to server socket
const socket = io.connect('http://localhost:8000');

let message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    feedback = document.getElementById('feedback'),
    output = document.getElementById('output');

// Emit events 
btn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value,
    });
    message.value = '';
});

message.addEventListener('keypress', () => {
    socket.emit('feedback', {
        handle: handle.value
    });
});

message.addEventListener('keyup', () => {
    socket.emit('feedback', {
        handle: handle.value
    });
});

// Listen for chats sents from the server socket
socket.on('chat', (data) => {
    output.innerHTML += `<p><strong>${data.handle}</strong> ${data.message} </p>`;
    feedback.innerHTML = '';
});

// Listen for feedback on typing 
socket.on('feedback', (data) => {
    feedback.innerHTML = `<p><i><strong>${data.handle}</strong> is typing...</i> </p>`
});