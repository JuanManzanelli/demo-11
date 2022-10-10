// @ts-nocheck

// Desafio 2
 const socket = io();

 socket.on('server-message', (data) => {
  console.log("Recibi un mensaje desde el server");
   alert(data);
 });

 const input = document.querySelector("#chat-input");

 input.addEventListener('input', () => {
   socket.emit('client-message', input.value);
 });

 socket.on('server-message', (data) => {
  document.querySelector("#chat-box-message").innerHTML = data;
 });

// Desafio 3
const socket = io();

const input = document.querySelector('#chat-input');
const button = document.querySelector('button');
const chatBox = document.querySelector('#chat-box-container');
input.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    button.click();
  }
});

button.addEventListener('click', () => {
    socket.emit('message', input.value);
    input.value = ""
});

socket.on('messages', (messages) => {
  const htmlArray = messages.map(data => {
    const html = 
    `<div style="display: flex; justify-content: flex-start; gap: 1em;">
      <span font-family: monospace;">
        User <strong style="color: ${data.color}; font-weight: 700; ">${data.id}</strong> says <strong style="color: ${data.color}; font-weight: 700; ">=></strong> 
      </span>
      <span style="font-weight: 500; font-family: monospace;">${data.message}</span>
    </div>`;
    return html;
  });
  const messagesHtml = htmlArray.join('\n');
  chatBox.innerHTML = messagesHtml;
})