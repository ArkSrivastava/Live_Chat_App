const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Allow frontend to connect
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Listen for incoming messages
  socket.on("send_message", (data) => {
    console.log(data);
    // Broadcast the message to all connected clients
    io.emit("receive_message", data);
  });

  // Handle user disconnect
  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

const PORT = 5001; // Change the port to 5001
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});