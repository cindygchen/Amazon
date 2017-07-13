
// Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
// If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
// However, if your store does have enough of the product, you should fulfill the customer's order.
// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.


var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "cindy",
  database: "bamazon"
});

connection.connect(function(err) {
if (err) throw err;

listProducts();
});

function listProducts() {
    //query the database for all items for sale
	connection.query("SELECT*FROM products",function(err, res) {
        if (err) throw err;
            for (i=0; i <res.length; i++) {
                console.log(res[i].item_id + " " + res[i].product_name + "  $" + res[i].price);
            }
        customer();
	});
};

function customer() {
    inquirer.prompt([
        {
            name: "choice",
            type: "input",
            message: "Which item would you like to purchase?"
        },
        {
            name: "units",
            type: "input",
            message: "How many units would you like to purchase?"
        } 
    ]).then(function(answer) {
        connection.query("SELECT*FROM products",function(err, res) {
            if (err) throw err;
            if (res[answer.choice-1].stock_quantity >= answer.units) {
                console.log("Purchase is successful! Your total cost comes out to $" + res[answer.choice-1].price);
                connection.query("UPDATE products SET ? WHERE ?", 
                [
                    {
                        stock_quantity: res[answer.choice-1].stock_quantity - answer.units 
                    },
                    {
                        item_id: answer.choice
                    }
                ],
                function (err, res) {
                    listProducts();
                });

            }
            // else if(res[answer.choice-1].stock_quantity < answer.units) {
            //     console.log("We don't have enough inventory for your request. Sorry.");
            //     listProducts();
            // }
            else {
                console.log("Insufficient Inventory! Pick another item!");
                listProducts(); 
            }
        })
    });   
};















