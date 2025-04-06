import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";
import multer from "multer";
import fs from "fs";

import {dbConnection} from './db/connection.js';
import User from './models/User.js';
// const User = require("./models/User.js")
import bcrypt from "bcryptjs";
import singupSchema from "./validators/validator.js"
import validate from "./middlewares/validate-middleware.js"

import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const app = express();
app.use(express.json());

const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:5173", // Fallback to default
  methods: ["GET", "POST"],
  credentials: true,
};

app.use(cors(corsOptions));

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:5173", // Fallback to default
    methods: ["GET", "POST"],
    credentials: true,
  },
});
//use the client app
app.use(express.static(path.join(__dirname,'/client/engifrontend/dist')))

//render client for any path
app.get('*',(req,res)=> res.sendFile(path.join(__dirname,'/client/dist/engifrontend/index.html')));

import dotenv from 'dotenv';
import authMiddleware from "./middlewares/authMiddleware.js";
dotenv.config();




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
  res.send("Hello World Learn!");
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

app.post("/register",validate(singupSchema), async (req, res) => {
  try {
    const { name, email, password } = req.body;

    
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "Email already exists" }); // Changed status to 400 for bad request
    }
 

    const newUser = await User.create(
      { name,
        email,
        password,
      });

    res.status(201).json({msg:"Registration Successfull",
      token:await newUser.generateToken(),
      userId:newUser._id.toString(),
    }); // Status 201 for resource creation
  } catch (error) {
    console.error(error); // Logs the error for debugging
    res.status(500).json({ msg: "Internal server error",error:error.message });
  }
});

app.post("/login",async (req,res)=>{
    try {
      const {email,password}= req.body;
      const userExist = await User.findOne({email});

      if(!userExist){
        return res.status(400).json({message:"Invalid Credentials"});
      }
      const user = await bcrypt.compare(password,userExist.password);
      if(user){
        res.status(201).json({msg:"Login Successfull",
          token:await userExist.generateToken(),
          userId:userExist._id.toString(),
        });
      }else{
        res.status(401).json({message:"Invalid Email or Password"});
      }
    } catch (error) {
      res.status(500).json({ msg: "Internal server error",error:error.message });
    }
})
app.get('/user',authMiddleware,(req,res)=>{
  try {
    // const userData = await User.find({});
    const userData = req.user;
    return res.status(200).json({ userData });

  } catch (error) {
    console.log(` error from user route ${error}`);
  }
})

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
