DROP DATABASE IF EXISTS bamazon;
create database bamazon;

use bamazon;
create table products  (
	item_id integer(11) auto_increment not null,
    product_name varchar(100),
    department_name varchar(50),
    price decimal(10,2),
    stock_quantity integer(10),
    primary key (item_id)
);

-- delete from products,
-- 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("TV", "Electronics", "599", "50" );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Laptop", "Electronics", "999", "50" );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Desktop", "Electronics", "600", "50" );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apple", "Grocery", ".50", "10" );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Orange", "Grocery", ".75", "50" );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mattress", "Home", "600", "5" );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lamp", "Home", "50", "12" );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wine Opener", "Kitchen", "60", "50" );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Crockpot", "Kitchen", "30", "2" );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pot", "Kitchen", "300", "20" );

select * from products;

