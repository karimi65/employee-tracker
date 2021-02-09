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
        console.log(answer)
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


// Add Role
const addRole = () => {
    inquirer.prompt([
        {
            name: "title",
            type: "input",
            message: "What is the title of the role?"
        },
        {
            name: "salary",
            type: "input",
            message: "How much is the salary for this role?"
        },
        {
            name: "departmentId",
            type: "input",
            message: "What is the department ID of the role?"
        }

    ]).then(answer => {
        connection.query(`INSERT INTO role(title, salary, department_id) VALUES (?, ?, ?);`,
            [answer.title, answer.salary, answer.departmentId],
            (err) => {
                if (err) throw err
                console.log('Role Added!')
                firstAction()
            })
    })
}

// Add Employee
const addEmployee = () => {
    inquirer.prompt([
        {
            name: "firstName",
            type: "input",
            message: "What is the employee\'s first name?"
        },
        {
            name: "lastName",
            type: "input",
            message: "What is the employee\'s last name?"
        },
        {
            name: "roleId",
            type: "input",
            message: "What is the employee\'s role id?"
        },
        {
            name: "managerId",
            type: "input",
            message: "What is the employee\'s manager id?"
        }

    ]).then(answer => {
        connection.query(`INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);`,
            [answer.firstName, answer.lastName, answer.roleId, answer.managerId],
            (err) => {
                if (err) throw err
                console.log('Employee Added!')
                firstAction()
            })
    })
}

// View All Departments
const viewAllDepartments = () => {
    connection.query('SELECT * FROM department', (err, data) => {
        if (err) throw err
        console.table(data)
        firstAction()
    })
}

// View All Roles
const viewAllRoles = () => {
    connection.query('SELECT * FROM role', (err, data) => {
        if (err) throw err
        console.table(data)
        firstAction()
    })
}

// View All Employyees
const viewAllEmployees = () => {
    connection.query('SELECT * FROM employee', (err, data) => {
        if (err) throw err
        console.table(data)
        firstAction()
    })
}

// Update Employee Roles
const updateRoles = () => {
    inquirer.prompt([
        {
            name: "id",
            type: "input",
            message: "What is the employee id you want to change?"
        },
        {
            name: "newId",
            type: "input",
            message: "What is the new role id?"
        }
    ]).then(answer => {
        connection.query('UPDATE employee SET role_id = ? WHERE id = ?', [answer.newId, answer.id], (err) => {
            if (err) throw err
            console.log('Role ID Changed!')
            firstAction()
        })
    })

}

