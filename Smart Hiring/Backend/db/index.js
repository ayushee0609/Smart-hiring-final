var mysql = require('mysql');

// Add the credentials to access your database

var connection = mysql.createConnection({
    host     : '192.168.4.134',
    user     : 'root',
    password : '',
    database : 'smarthiringtool'
});

// connect to mysql
connection.connect(function(err) {
    // in case of error
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
    else
    {
        console.log("Connected Successfully");
    }
});
exports.DbConnect= connection