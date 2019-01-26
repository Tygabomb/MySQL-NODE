# MySQL-NODE Bamazon 

Bamazon is a simulated online marketplace that runs on the command line using Node.js.

##How to Use
The Bamazon application comes with three distinct "Views", Customer, Manager, and Supervisor. The Customer can order items from Bamazon, the Manager can restock items and add new items for sale, and the Supervisor can check each department's profits and add new departments.

##Customer View
To enter the Customer View, run node customer from the application's root directory.

 * item_id (unique id for each product) 

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

This will display all items that are avilable for purchase, and then prompt the user to choose an item and state how many of that item they intend to purchase.

If there is enough of that item in stock, the purchase will go through. If there is not enough, the user will be told that the stock is insufficient.


### Runing Example LINK 




##Credits

NPM Packages 

* Colors
* Cli-Table
* Inquirer
* MySQL
