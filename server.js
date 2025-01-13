const express = require('express');    // Importar Express
const http = require('http');         // Importar HTTP
const socketIo = require('socket.io'); // Importar Socket.IO

// Crear una aplicación Express
const app = express();

// Crear un servidor HTTP a partir de la aplicación Express
const server = http.createServer(app);

// Integrar Socket.IO con el servidor HTTP
const io = socketIo(server);

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Manejar la conexión de un cliente a través de Socket.IO
io.on('connection', (socket) => {
  console.log('Un cliente se ha conectado');

  // Escuchar eventos de mensajes enviados por el cliente
  socket.on('chatMessage', (msg) => {
    console.log('Mensaje recibido: ' + msg);

    // Emitir el mensaje a todos los clientes conectados
    io.emit('chatMessage', msg);
  });

  // Manejar desconexión de cliente
  socket.on('disconnect', () => {
    console.log('Un cliente se ha desconectado');
  });
});

// Iniciar el servidor en el puerto 3000
server.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
