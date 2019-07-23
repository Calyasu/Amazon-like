DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Alexa", "Electronics", 50, 10000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Firestick", "Electronics", 35, 100000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hydro Flask", "Appliances", 40, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("3D White Strips", "Hygiene", 54, 4000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toothbrush Heads", "Hygiene", 40, 7000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Elder Blood", "Books", 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dragon Ball Super: Broly", "Movies", 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jon Snow Funko Pop", "Funkos", 12, 9000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Daenerys Funko Pop", "Funkos", 12, 9000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Harry Potter and the Prisoner of Azkaban", "Movies", 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Metal Straw", "Appliances", 10, 10000);
