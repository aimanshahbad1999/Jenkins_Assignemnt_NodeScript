// // Importing mysql and csvtojson packages 
// // Requiring module 
// const csvtojson = require('csvtojson'); 
// const mysql = require("mysql"); 
  
// // Database credentials 
// const hostname = "localhost", 
//     username = "user", 
//     password = "12345", 
//     databasename = "csvtomysql"
  
  
// // Establish connection to the database 
// let con = mysql.createConnection({ 
//     host: hostname, 
//     user: username, 
//     password: password, 
//     database: databasename, 
// }); 
  
// con.connect((err) => { 
//     if (err) return console.error( 
//             'error: ' + err.message); 
  
//     con.query("DROP TABLE sample",  
//         (err, drop) => { 
  
//         // Query to create table "sample" 
//         var createStatament = "CREATE TABLE sample(Username char(50), Address char(50))"
  
//         // Creating table "sample" 
//         con.query(createStatament, (err, drop) => { 
//             if (err) 
//                 console.log("ERROR: ", err); 
//         }); 
//     }); 
// }); 
  
// // CSV file name 
// const fileName = "data.csv"; 
  
// // csvtojson().fromFile(fileName).then(source => { 
  
// //     // Fetching the data from each row  
// //     // and inserting to the table "sample" 
// //     for (var i = 0; i < source.length; i++) { 
// //         var Username = source[i]["Username"], 
// //             Address = source[i]["Address"], 
            
  
// //         var insertStatement = "INSERT INTO sample values(?, ?)"; 
// //         var items = [Username, Address]; 
  
// //         // Inserting data of current row 
// //         // into database 
// //         con.query(insertStatement, items,  
// //             (err, results, fields) => { 
// //             if (err) { 
// //                 console.log( 
// //     "Unable to insert item at row ", i + 1); 
// //                 return console.log(err); 
// //             } 
// //         }); 
// //     } 
// //     console.log( 
// // "All items stored into database successfully"); 
// // }); 



var mysql = require('mysql');
const csvtojson = require('csvtojson');
var con = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "12345",
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
  
    // Fetching the data from each row  
    // and inserting to the table "sample" 
    for (var i = 0; i < source.length; i++) { 
        var Username = source[i]["Username"], 
            Address = source[i]["Address"]
  
        var insertStatement = "INSERT INTO customers values(?, ?)"; 
        var items = [Username, Address]; 
  
        // Inserting data of current row 
        // into database 
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