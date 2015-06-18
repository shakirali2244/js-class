var credsloc = require('./local_config');
var pg = require('pg');
var conString = "postgres://"
				+String(credsloc.creds.user)+":"
				+String(credsloc.creds.password)+"@"
				+String(credsloc.creds.host)+"/"
				+String(credsloc.creds.db);
var client = new pg.Client(conString);

exports.client = client;