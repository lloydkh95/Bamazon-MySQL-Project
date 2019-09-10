//Requiring mySQL node package 
const mysql = require("mysql");

//Requireing node package inquirer
const inquirer = require("inquirer");

//Requiring the table
require("console.table");

//Creating a connection 
const connection = mysql.createConnection({
    host: "localhost",

    //Your port 
    port: 3306,

    //Your Username
    user: "root",

    //Your password
    password: "Katya1997kh@",
    database: "bamazon"
});

// Connect to the Database
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id" + connection.threadId);
});

//Display all items inside the Database and sell an item to the customer
connection.query('SELECT * FROM Products', function(err, res) {

    //Error Handler
    if(err) throw err;

    //Show user message
    console.log('Check out our selection...\n');


    //Loop through database and show all items
    
    console.table(res);

    //================================================================================================

    //After the table is shown, ask the user to buy something
    inquirer
    .prompt([
      {
        type: "input",
        name: "choice",
        message: "What is the ID of the item you would you like to purchase? [Quit with Q]",
        validate: function(val) {
          return !isNaN(val) || val.toLowerCase() === "q";
        }
      }
    ]).then(function(val) {

    //Ask for item ID
    console.log('\nWhich item would you like to buy?');
    prompt.length(['buyItemId']), function (err, result) {

        //Show ID selected
        var buyItemID = result.buyItemID;
        console.log('You selected Item #' + buyItemID + '.');

        //Then ask for quantity
        console.log('\nHow many do you wish to buy?')
        prompt.length(['buyItemQuantity'], function (err, result) {

            //Show quantity selected
            var buyItemQuantity = result.butItemQuantity;
            console.log('You selected to buy ' + buyItemQuantity + ' of these. ');

            //Once the customer has placed the order, check if store has enough of the product to meet request
            connection.query('Select StockQuantity from Products where?', [{ItemID: buyItemID}], function(err, res) {
                if(err) throw err; 

                if(res[0] == undefined){
                    console.log('Sorry... We found no items with the ID'  +   buyItemId   + "");
                    connection.end(); 
                }

                //Compare Bamazon inventory with user qquantity
                else{
                    var bamazonQuantity = res[0],StockQuantity;

                    if(bamazonQuantity >= buyItemQuantity){

                        var newInventory = parseInt(bamazonQuantity) - parseInt(buyItemQuantity);
                        connection.query('Update Products set? where?', [{StockQuantity: newInventory}, {ItemID: buyItemID}], function (err, res){
                            if(err) throw err; 
                        });

                       //Sow customer their purchase total
                       var customertotal;
                       connection.query('Select price from products where?', [{ItemID: buyItemID}], function(err, res) {
                           var buyItemPrice = res[0].Price;
                           customerTotal = buyItemQuantity*buyItemPrice.toFixed(2);

                           console.log('\nYour total is $' + customerTotal + '.');

                         
                       }) 
                    }
                }
            })
        })
    }
})



