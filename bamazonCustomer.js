var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3307,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    displayAll();
});

function start(inventory) {

    inquirer
        .prompt(
            {
                name: "item",
                type: "input",
                message: "Please enter the item ID that you want to search for",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            })
        .then(function (answer) {


            var chosenID = parseInt(answer.item)
            var products = checkInventory(chosenID, inventory)
            checkQuantity(products)
            // return stock_quantity;

        })

}

function displayAll() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res, null, 2));
        start(res);
    });
}

function checkInventory(choiceId, inventory) {
    for (var i = 0; i < inventory.length; i++) {
      if (inventory[i].item_id === choiceId) {
        return inventory[i];
      }
    }
    return null;
   }
function checkQuantity(products) {
    inquirer
        .prompt(
            {
                name: "quantity",
                type: "input",
                message: "Please enter the quantity you would like to purchase",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            })
        .then(function (value) {
            var item = parseInt(value.quantity);
            if (item < products.stock_quantity) {
                makePurchase(products, item)
            }
        })
}

function makePurchase(products, item) {

    connection.query(
        "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
        [item, products.item_id],
        function (error) {
            if (error) { throw err; }
            else {
                console.log("Successfully Purchased");
                console.log(products.stock_quantity +" "+ products.product_name + " left" );
                // start();
                connection.end();
            }
        }
    );
}




