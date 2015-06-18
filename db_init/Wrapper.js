var method = Wrapper.prototype;

function Wrapper(con){
	this.con = con;
} 

method.get = function(){
	var con = this.con;
  con.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    con.query('SELECT * FROM USERS;', function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
      console.log(result);
      con.end();
    });
  });
}

module.exports = Wrapper;