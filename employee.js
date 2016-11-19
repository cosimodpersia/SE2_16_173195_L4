/**
 * @brief Employee object constructor
 * @param [in|out] id is the id of the employee, it must be unique
 * @param [in|out] name 
 * @param [in|out] surname 
 * @param [in|out] level 
 * @param [in|out] salary 
 * @return the object
 */
function employee(id, name, surname, level, salary) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.level = level;
    this.salary = salary;
}

/**
 * @brief array that contains the list of the employees
 */
employees = [];


/**
 * @brief check if the wanted employee is in the employees list
 * @return the object if it is found, null otherwise
 */
var getEmployee = function (id) {
    for (var i = 0; i < employees.length; i++) {
        if (employees[i].id == id) {
            return employees[i];
        }
    }
    return null;
}

/**
 * @brief update the employee objec that match the id number
 * @param [in|out] id is the id of the employee, it must be unique
 * @param [in|out] name 
 * @param [in|out] surname 
 * @param [in|out] level 
 * @param [in|out] salary 
 */
function updateEmployee(id, name, surname, level, salary, eObj) {
    if (id) {
        eObj.id = id;
    }
    if (name) {
        eObj.name = name;
    }
    if (surname) {
        eObj.surname = surname;
    }
    if (level) {
        eObj.level = level;
    }
    if (salary) {
        eObj.salary = salary;
    }
}

/**
 * @brief add the employee with the attributes listed into the employees list
 * @param [in|out] id is the id of the employee, it must be unique
 * @param [in|out] name 
 * @param [in|out] surname 
 * @param [in|out] level 
 * @param [in|out] salary 
 */
function addEmployee(id, name, surname, level, salary) {
    if (id > 0) {
        var em = getEmployee(id);
        if (em != null) {
            updateEmployee(id, name, surname, level, salary, em);
        } else {
            employees.push(new employee(id, name, surname, level, salary));
        }
    } else {
        var indd = -1;
        for (var i = 0; i < employees.length; i++) {
            if (indd < employees[i].id) {
                indd = employees[i].id;
            }
        }
        console.log(indd);
        employees.push(new employee(indd + 1, name, surname, level, salary));
    }

}

/**
 * @brief deletes the employees with id from the list.
 * @param [in|out] id is the id of the employee, it must be unique
 */
function deleteEmployee(id) {
    for (var i = 0; i < employees.length; i++) {
        if (employees[i].id == id) {
            employees.splice(i, 1);
            break;
        }
    }
}

/**
 * @brief public methods and constructor
 */
exports.getEmployee = getEmployee;
exports.updateEmployee = updateEmployee;
exports.addEmployee = addEmployee;
exports.employee = employee;
exports.deleteEmployee = deleteEmployee;