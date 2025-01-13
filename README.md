
# Real-Time Chat with Node.js and Socket.IO

This project is a real-time chat application using **Node.js** and **Socket.IO**. It allows multiple users to connect and send messages to each other through a simple interface in a web browser.

## Description

The project consists of a server using **Express** to serve static files and **Socket.IO** for real-time communication between the server and clients. Messages sent by one user are broadcast to all other clients connected to the server, allowing everyone to see each other's messages in real-time.

## Project Structure

The project has the following directory and file structure:

```
socketio-chat/
│
├── node_modules/             # Modules installed by npm (do not edit directly)
├── public/                   # Folder for static files (HTML, CSS, JS)
│   └── index.html            # Client-side HTML page
├── package.json              # Node.js project configuration file
├── package-lock.json         # File ensuring dependency consistency
└── server.js                 # Server-side code (Node.js)
```

- **`server.js`**: The main server file that sets up the web server and handles real-time communication using **Socket.IO**.
- **`index.html`**: The client-side user interface file served to the client. It contains the form to send messages and an area to display received messages.
- **`node_modules/`**: Folder containing the project dependencies (such as **Express** and **Socket.IO**).
- **`package.json`**: Configuration file containing dependencies and execution scripts for the project.

## Technologies Used

- **Node.js**: A runtime environment for JavaScript on the server.
- **Express**: A web framework for Node.js that simplifies server creation.
- **Socket.IO**: A library for real-time communication between the server and clients.
- **HTML/CSS**: For the chat user interface.

## Requirements

- **Node.js**: Ensure that **Node.js** and **npm** are installed on your system. You can check the installation by running the following commands:
  ```bash
  node -v   # Check Node.js version
  npm -v    # Check npm version
  ```

If you do not have Node.js installed, you can download it from [here](https://nodejs.org/).

## Installation and Running

1. **Clone the repository or create a new project**:

   If you have cloned this project, navigate to the project directory in your terminal.

2. **Install dependencies**:

   Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

   This will install **Express** and **Socket.IO** in your project.

3. **Run the server**:

   Once the dependencies are installed, run the server with the following command:

   ```bash
   node server.js
   ```

   You will see a message in the terminal indicating that the server is running:

   ```
   Server running on http://localhost:3000
   ```

4. **Access the chat**:

   Open a web browser and go to `http://localhost:3000`. You should see the real-time chat interface.

   - If you open multiple tabs or browsers, messages sent from one tab will be seen in all the others in real-time.

## Functionality

- **Send messages**: Users can type messages in the text field and press the "Send" button to send them to the server.
- **Receive messages**: Messages sent by any user are broadcast to all connected clients and displayed in the message list in the interface.

## Server Code (server.js)

This file sets up the server using **Express** to handle HTTP requests and **Socket.IO** for real-time communication:

- The server listens for client connections.
- Messages sent by a client are emitted to all other connected clients through **Socket.IO**.
- The server keeps listening on port `3000` (or the configured port).

```javascript
const express = require('express');    // Import Express
const http = require('http');         // Import HTTP
const socketIo = require('socket.io'); // Import Socket.IO

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('A client has connected');

  socket.on('chatMessage', (msg) => {
    console.log('Message received: ' + msg);
    io.emit('chatMessage', msg);
  });

  socket.on('disconnect', () => {
    console.log('A client has disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```
# RESULTS
![image](https://github.com/user-attachments/assets/f156458d-9414-4aac-9c9a-0fef935cb8c7)


