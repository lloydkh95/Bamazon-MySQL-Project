CREATE DATABASE Bamazon;

Use Bamazon;

CREATE TABLE Products(
ItemId INTEGER AUTO_INCREMENT PRIMARY KEY,
ProductName VARCHAR(30),
DepartmentName VARCHAR(30),
Price DOUBLE(10,2),
StockQuantity INTEGER);

INSERT INTO Products(ProductName, DepartmentName, Price, StockQuantity)
VALUES ("Bread", "grocery", 1.99, 12),
("Potatoes", "grocery", 2.99, 24),
("Earbuds", "electronics", 20.99, 5),
("IPhone", "electronics", 1999.99, 7),
("Polo", "clothing", 15.99, 18),
("Skirt", "clothing", 20.99, 2),
("Aloe", "plants", 5.99, 49),
("Bonsai", "plants", 150.99, 69),
("Diamond", "jewelry", 2999.99, 33),
("Ruby", "jewelery", 1999.99, 6),
("Couch", "furniture", 599.99, 36),
("Bed", "furniture", 799.99, 21),
("Futon", "furniture", 299.99, 15);