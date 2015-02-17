var pg = require('pg');
var conString = "postgres://ora:pasasword@localhost/oradb";
 
pg.connect(conString, function(err, client, done) {
  if(err) {
    return console.error('error fetching client from pool', err);
  }
  client.query('CREATE TABLE users(name varchar, email varchar , password varchar);', function (data){
  	console.log(data);
  });
});