DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
	-- Columns
	ItemID INT NOT NULL AUTO_INCREMENT,
	ProductName VARCHAR(200) NULL,
	DepartmentName VARCHAR(200) NULL,
	Price FLOAT(6, 2) NOT NULL,
	StockQuantity INT (6) NOT NULL,
    PRIMARY KEY (ItemID)
);


-- 11 sample products in Rows
INSERT INTO products (ProductName, departmentName, price, stockQuantity) 
VALUES ("Processor", "Intel CORE m7", 529.99, 50);

INSERT INTO products (ProductName, departmentName, price, stockQuantity) 
VALUES ("Motherboard", "Gigabyte z390 Aorus Ultra", 129.99, 15);

INSERT INTO products (ProductName, departmentName, price, stockQuantity) 
VALUES("Two 8GB sticks of RAM", "CORSAIR - Vengeance RGB PRO", 124.99, 30);

INSERT INTO products (ProductName, departmentName, price, stockQuantity) 
VALUES("GPU (Graphic Prcessing UNIT)", "MSI GeForse RTX 2080 TI", 1399.99, 8);

INSERT INTO products (ProductName, departmentName, price, stockQuantity) 
VALUES("SSD Hard Drives", "SAMSUNG 860 EVO Series 2.5", 57.99, 25);

INSERT INTO products (ProductName, departmentName, price, stockQuantity) 
VALUES("Power Supply", "EVGA - 80 PLUS 600W ATX", 34.99, 10);

INSERT INTO products (ProductName, departmentName, price, stockQuantity) 
VALUES ("KeyBoard & wireless mouse", "RaZor Keyboard", 89.99, 5);

INSERT INTO products (ProductName, departmentName, price, stockQuantity) 
VALUES ("Monitors", " ACER Predetor X27", 199.99, 19);

INSERT INTO products (ProductName, departmentName, price, stockQuantity) 
VALUES ("PC Case", "Xidax X-6 Gaming PC", 499.99, 11);

INSERT INTO products (ProductName, departmentName, price, stockQuantity) 
VALUES ("Liquid cooling System", "CORSAIR H100i RGB PLATINUM", 159.99, 5 );

INSERT INTO products (ProductName, departmentName, price, stockQuantity) 
VALUES ("OS (Operating System)", "Windows 10", 199.99, 16);


SELECT * FROM products;