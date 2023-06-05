import express from 'express'
import http from 'http'
import { v4 as uuid} from 'uuid'
const app = express()
const server = http.createServer(app)

import { Server } from 'socket.io'
const io = new Server(server, {
  cors: {
    origin: '*',
  },
})


//// Mapping of user IDs to socket IDs
const userSockets = new Map();

function createRoomName(senderUid, receiverUid) {
  const name = uuid()
  return name;
}

io.on('connection', (socket) => {
  socket.on('setUserId', (userId) => {
    userSockets.set(userId, socket.id);
    console.log('User Sockets:', Array.from(userSockets.entries()));
  });

  socket.on('send', async (data) => {
    const { senderUid, receiverUid, message } = data;
    console.log(senderUid, receiverUid, message);

  // Join a room specific to the sender and receiver
  // const roomName = "rahul"
  // socket.join(roomName);

  // Emit the message to the room
  io.emit('message', message);
});

  socket.on('disconnect', () => {
    // Remove the user ID mapping when the socket disconnects
    userSockets.forEach((socketId, userId) => {
      if (socketId === socket.id) {
        userSockets.delete(userId);
      }
    });
  });

  socket.on('clear', () => io.emit('clear'));
});




server.listen(3001, () => {
    console.log('✔️ Server listening on port 3001')
  })