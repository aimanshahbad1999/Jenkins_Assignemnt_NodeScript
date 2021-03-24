var mysql = require('mysql');
const csvtojson = require('csvtojson');
var con = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "csvtomysql"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });

const fileName = "data.csv"; 
csvtojson().fromFile(fileName).then(source => {  
    for (var i = 0; i < source.length; i++) { 
        var Username = source[i]["Username"], 
            Address = source[i]["Address"]
  
        var insertStatement = "INSERT INTO customers values(?, ?)"; 
        var items = [Username, Address]; 
        con.query(insertStatement, items,  
            (err, results, fields) => { 
            if (err) { 
                console.log( 
    "Unable to insert item at row ", i + 1); 
                return console.log(err); 
            } 
        }); 
    } 
    console.log( 
"All items stored into database successfully"); 
}); 