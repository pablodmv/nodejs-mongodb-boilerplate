const http = require("http");
const app = require("./server");
const server = http.createServer(app);
const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/database', {   useNewUrlParser: true,
useUnifiedTopology: true})
var db = mongoose.connection

db.on('error', function(err){
    console.log('connection error', err)
  })
  
  db.once('open', function(){
    console.log('Connection to DB successful')
  })




server.listen(3000);
console.log("Server on port", 3000);
