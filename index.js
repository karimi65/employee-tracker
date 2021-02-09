const inquirer = require('inquirer');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'employee_db'
});

connection.connect(err => {
    if (err) throw err
    console.log(`Connected as id ${connection.threadId}`)
    firstAction();
});

const choices = [
    'Add Departments',
    'Add Roles',
    'Add Employees',
    'View All Departments',
    'View All Roles',
    'View All Employees',
    'Update Employee Roles',
    'Exit'
]

const firstAction = () => {
    inquirer.prompt([
        {
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: choices
        }
    ]).then(answer => {
        // console.log(answer)
        if (answer.action === choices[0]) {
            addDepartment()
        }
        else if (answer.action === choices[1]) {
            addRole()
        }
        else if (answer.action === choices[2]) {
            addEmployee()
        }
        else if (answer.action === choices[3]) {
            viewAllDepartments()
        }
        else if (answer.action === choices[4]) {
            viewAllRoles()
        }
        else if (answer.action === choices[5]) {
            viewAllEmployees()
        }
        else if (answer.action === choices[6]) {
            updateRoles()
        }
        else {
            exit()
        }
    })
}

// Add Department
const addDepartment = () => {
    inquirer.prompt([
        {
            name: "newDept",
            type: "input",
            message: "What department would you like to add?"
        }
    ]).then(answer => {
        connection.query(`INSERT INTO department(name) VALUES ('${answer.newDept}')`,
            (err) => {
                if (err) throw err
                console.log('Department Added!')
                firstAction()
            })

    })
}

