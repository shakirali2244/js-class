var credsloc = require("./local_config");
var pg = require('pg');
var conString = "postgres://"
				+String(credsloc.creds.user)+":"
				+String(credsloc.creds.password)+"@"
				+String(credsloc.creds.host)+"/"
				+String(credsloc.creds.db);

pg.connect(conString, function(err, client, done) {
  if(err) {
    return console.error('error fetching client from pool', err);
  }
  client.query('CREATE TABLE IF NOT EXISTS users(name varchar, email varchar , hash varchar , salt bigint);', function (data){
  	console.log(data);
  });
});