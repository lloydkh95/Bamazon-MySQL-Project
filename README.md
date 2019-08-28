# Bamazon-MySQL-Project
Overview
A Node.js & MySQL digital storefront. This is a command line Node app that mimics a Amazon.com.

Node.js
JavaScript file replicates the basics of a simple ecommerce engine:

BamazonCustomer.js (See example here)

A sample of the menu is below:
View Products for Sale
View Low Inventory
Add to Inventory
Add New Product

MySQL
The JavaScript files mentioned above query a MySQL database called Bamazon which is locally hosted on my laptop.

Please refer to the schema.sql file to see how the database was created using raw SQL queries.

If you wish to run this app on your own machine, then please note the following commands:

If you are new to MySQL, please set up MySQL and MySQL Workbench on your laptop and then open up to your localhost connection.
Run CREATE DATABASE Bamazon; in mySQL Workbench.
Be sure to select the correct database by running the USE Bamazon;
Refer to the raw SQL commands under the === First Table === comment to set up the Products table.
Refer to the raw SQL commands under the === Second Table === comment to set up the Departments table.
Node Package Manager (npm)
If you clone this repo down to your machine, note that it has two npm dependencies! Before running the JavaScript files mentioned above, please run npm install in your terminal to download the prompt and mysql node packages.
