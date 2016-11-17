function employee(id, name, surname, level, salary) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.level = level;
    this.salary = salary;
}

employees = [];

function getEmployee(id) {
    for (var i = 0; i < employees.length; i++) {
        if (employees[i].id === id) {
            return employees[i];
        }
    }
    return null;
}

function updateEmployee(id, name, surname, level, salary, emplObj) {
    if (id) {
        emplObj.id = id;
    }
    if (name) {
        emplObj.name = name;
    }
    if (surname) {
        emplObj.surname = surname;
    }
    if (level) {
        emplObj.level = level;
    }
    if (salary) {
        emplObj.salary = salary;
    }
}

function addEmployee(id, name, surname, level, salary) {
    if (id) {
        employees.append(new employee(id, name, surname, level, salary));
    } else
        employees.append(new employee(employees[employees.lenght - 1].id + 1, name, surname, level, salary))
}