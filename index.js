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
    console.log(req.body)
    let roomId = await db.room(id)
})


io.on('connection', (socket) => {
  console.log('a user connected');  
  
  
})

server.listen(4000, () => {
  console.log('listening on *:3000');
});

app.get("/", (req, res) =>{
    console.log("hello")
    
})