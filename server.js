var pg = require('pg');
var conString = "postgres://ora:pasasword@localhost/oradb";
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

pg.connect(conString, function(err, client, done) {
  if(err) {
    return console.error('error fetching client from pool', err);
  }
  client.query('CREATE TABLE IF NOT EXISTS users(name varchar, email varchar , password varchar);', function (data){
  	console.log(data);
  });
});

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on("toggle",function(data){
  	console.log(data);
  })
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

