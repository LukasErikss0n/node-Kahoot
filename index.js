const { engine } = require ("express-handlebars")
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

app.get("/quizes", async (req, res)=>{
  let listOfQuiz = await db.allQuizes()
  if(listOfQuiz.length){
    console.log(listOfQuiz[0].name_of_quiz)
  }
})

app.get("/room", (req, res) =>{
  req.body.id
})

app.post("/creat-room", (req, res) =>{
  let id = req.body.roomId
  //let roomId = await db.room(id)
  res.redirect(`/room?id=${id}`)
})

app.get("/join-room", (req, res) =>{
  let roomId = req.body.roomKey
  res.redirect(`/room?id=${id}`)
})

io.on('connection', (socket) => {
  console.log("user connected")
  socket.join(`${id}`)
})

app.get("/room", (req,res) =>{
  res.send("hej")
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