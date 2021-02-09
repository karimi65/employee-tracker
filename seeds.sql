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
INSERT INTO role(title, salary, department_id) VALUES ('Software Engineer', 120000, 314);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('Porya', 'Arya', 20, 29);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;