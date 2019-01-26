let mysql = require("mysql");;
let inquirer = require("inquirer");
let table = require("cli-table");


var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "ToweR1337!",
    database: "bamazon_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("\nWelcome to BAmazon! Take a look at our products for sale below!\n");
   
    pcProducts();
});