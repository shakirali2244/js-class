var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var con = require('./db_init/db').client;
var Wrapper = require('./db_init/Wrapper.js');
var wrapper = new Wrapper(con);


io.on('connection', function(socket){
  console.log('a user connected');

  socket.on("toggle",function(data){
  	console.log(data);
  })
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

console.log(wrapper.get());