//npm i sqlite3
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('2_papers.sqlite');
 
db.serialize(function() {
  db.run("CREATE TABLE refs (info TEXT)");
 
  var stmt = db.prepare("INSERT INTO refs VALUES (?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("paper " + i);
  }
  stmt.finalize();
 
  db.each("SELECT rowid AS id, info FROM refs", (err, row)=>{
      console.log(row.id + ": " + row.info);
  });
});
 
db.close();
