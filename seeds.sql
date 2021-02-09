DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department(
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE role(
	id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2),
    department_id INT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE employee(
	id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO department(name) VALUES ('Engineering');
INSERT INTO department(name) VALUES ('HR');
INSERT INTO department(name) VALUES ('Safety');
INSERT INTO department(name) VALUES ('Finance');


INSERT INTO role(title, salary, department_id) VALUES ('Software Engineer', 120000, 314);
INSERT INTO role(title, salary, department_id) VALUES ('Manager', 80000, 310);
INSERT INTO role(title, salary, department_id) VALUES ('Safety Officer', 60000, 311);
INSERT INTO role(title, salary, department_id) VALUES ('Accountant', 65000, 313);


INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('Porya', 'Arya', 20, 29);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('David', 'Anelka', 20, 25);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('Diego', 'Vargas', 15, 10);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('Andrea', 'Wenger', 15, 10);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('Ahmed', 'Patel', 30, 35);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('Jamie', 'Ozil', 30, 35);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('Mary', 'Nickson', 40, 45);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('Sara', 'Floyd', 40, 45);


SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;