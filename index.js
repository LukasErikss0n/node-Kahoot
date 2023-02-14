import { engine } from "express-handlebars"
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const db = require("./server-con")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))

app.post("/creat-room", async (req, res) =>{
    let id = req.body.roomId
    let roomId = await db.room(id)
    res.redirect("/")
})

app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", "./views")


io.on('connection', (socket) => {
  console.log('a user connected');  
  
})

server.listen(4000, () => {
  console.log('listening on *:4000');
});

app.get("/", (req, res) =>{
  console.log("hello")  
})