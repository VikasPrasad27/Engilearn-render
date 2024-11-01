import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";
import multer from "multer";
import fs from "fs";
import path from "path";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

const upload = multer({ dest: 'uploads/' }); // Directory to store uploaded files
const messagesFile = 'messages.json';

// Load previous messages from file
let messages = {};
if (fs.existsSync(messagesFile)) {
  messages = JSON.parse(fs.readFileSync(messagesFile));
}

app.use(cors());
app.use(express.static('uploads')); // Serve files from the uploads directory

app.post('/upload', upload.single('file'), (req, res) => {
  const fileUrl = `http://localhost:3000/${req.file.filename}`; // URL to access the file
  res.json({ fileUrl });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

io.on("connection", (socket) => {
  console.log("User Connected", socket.id);

  socket.on("message", ({ room, message }) => {
    console.log({ room, message });

    // Store message in room history
    if (!messages[room]) {
      messages[room] = [];
    }
    messages[room].push(message);
    fs.writeFileSync(messagesFile, JSON.stringify(messages)); // Save messages to file

    // Emit the message to the room
    io.to(room).emit("receive-message", { room, message });
  });

  socket.on("join-room", (room) => {
    socket.join(room);
    console.log(`User joined room ${room}`);

    // Send previous messages to the user
    if (messages[room]) {
      socket.emit("previous-messages", { room, messages: messages[room] });
    }
  });

  socket.on("leave-room", (room) => {
    socket.leave(room);
    console.log(`User left room ${room}`);
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
