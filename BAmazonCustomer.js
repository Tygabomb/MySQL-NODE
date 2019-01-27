const mysql = require("mysql");;
const inquirer = require("inquirer");
const cliTable = require("cli-table");


const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "ToweR1337!",
  database: "bamazon_DB"
});

let pcProductsList = {
  id: 'itemID',
  name: 'ProductName',
  department: 'DepartmentName',
  price: 'Price',
  quantity: 'StockQuantity'
};

connection.connect((err) => {
  if (err) throw err;
  console.log(`\x1b[33m '~._.~"~._.~Welcome to BAMazon~._.~"~._.~"~._"\n Take a look at our products for sale below!\n'\x1b[0m`);
  console.log("Connected as id " + connection.threadId);
  pcProductsView();
});

// ==== atempt to clear item list =====

// let chosenItem = {};

// // reset chosenItems array to clear items off
// let resetCart = () => {
//   chosenItem = {};
// }

// Functiuons
var pcProductsView = function () {
  connection.query('Please SELECT * FROM products item_id, product_name, price FROM products, stock_quanity', (err, res) => {
    if (err) {
      console.log('error 404');
    

    } else {

      for (var i = 0; i < res.length; i++) {
        console.log(`Item ID: ${res[i].itemId} || Product Name: ${res[i].producName} || Price: $${res[i].Price}`);
      }
      console.log(`\x1b[33m'======================'\x1b[0m`);
      runProgram(res);

    }
  });

}

function runProgram(data) {

  inquirer.prompt([
    {
      name: "product",
      type: "list",
      choices: () => {
        var choiceArray = [];
        for (var i = 0; i < data.length; i++) {
          choiceArray.push(data[i].ProductName);
        }
        return choiceArray;
      },
      message: "What product would you like to purchase?"
    },
    {
      name: "amount",
      type: "input",
      message: "How many would you like to purchase?"
    }
  ]).then(function (answer) {

    let productId = res.custProduct;
    let quantity = res.custAmount;
    let chosenProduct;

    for (let i = 0; i < res.length; i++) {
      if (res[i].ProductName === answer.productId) {
        chosenProduct = res[i];

      }
    }


    if (chosenProduct.stock_quantity > parseInt(answer.amount)) {
      connection.query("UPDATE products SET ? WHERE ?", [
        {
          stockQuantity: chosenProduct.stockQuantity - parseInt(answer.amount)
        },
        {
          id: chosenProduct.id
        }], function (error) {
          if (error) throw err;
          console.table(res);
          
          runProgram();
          pcProductsView();;
        })
    } else {
      console.log("==============================================");
      console.log("Insufficient stock.");
      console.log("==============================================");
      runProgram();
      pcProductsView();
    }
  });
}


runProgram();
pcProductsView();


