var methodSearch = 'GET';
var actionSearch = 'http://127.0.0.1:1337/search';
var methodInsert = 'POST';
var actionInsert = '/insert'
var methodDelete = 'POST';
var actionDelete = '/delete';
var showhide = document.getElementById('showhide');
var form = document.getElementById('form');

/**
 * @brief behaviour of the form. when shown it remove all the content
 */
showhide.onclick = function () {
    if (form.style.visibility === 'visible') {
        hideform();
    } else {
        document.getElementById("idf").value = '';
        document.getElementById("namef").value = '';
        document.getElementById("surnamef").value = '';
        document.getElementById("levelf").value = '';
        document.getElementById("salaryf").value = '';
        showForm();
    }
};

function showForm() {
    form.style.visibility = 'visible';
}

function hideform() {
    form.style.visibility = 'hidden';
}


var search = document.getElementById('search');
search.onclick = function () {
    var id = document.getElementById("id").value;
    var xhr = new XMLHttpRequest();
    xhr.open(methodSearch, actionSearch + "?id=" + id, true);
    xhr.send();
    xhr.onloadend = function () {
        var result = JSON.parse(xhr.responseText);
        if (result.id != -1) {
            document.getElementById("idf").value = result.id;
            document.getElementById("namef").value = result.name;
            document.getElementById("surnamef").value = result.surname;
            document.getElementById("levelf").value = result.level;
            document.getElementById("salaryf").value = result.salary;
        } else {
            document.getElementById("idf").value = "";
            document.getElementById("namef").value = "";
            document.getElementById("surnamef").value = "";
            document.getElementById("levelf").value = "";
            document.getElementById("salaryf").value = "";
        }
        showForm();
    }
};

/**
 * @brief method that sends the data which has to be saved on the server
 * @return nothing.
 */
var insert = document.getElementById('insert');
insert.onclick = function () {
    var id = document.getElementById("idf").value;
    if (id == "") {
        id = -1;
    }
    var name = document.getElementById("namef").value;
    if (name == "") {
        name = "none";
    }
    var surname = document.getElementById("surnamef").value;
    if (surname == "") {
        surname = "none";
    }
    var level = document.getElementById("levelf").value;
    var salary = document.getElementById("salaryf").value;
    console.log(message);
    var message = "id=" + id + "&name=" + name + "&surname=" + surname + "&level=" + level + "&salary=" + salary;
    console.log(message);

    var xhr = new XMLHttpRequest();
    xhr.open(methodInsert, actionInsert, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onloadend = function () {
        console.log("inserted");
    }
    xhr.send(message);
}


/**
 * @brief delete the employee who has the id 
 * @return nothing
 */
document.getElementById('delete').onclick = function () {
    var id = document.getElementById("id").value;
    var xhr = new XMLHttpRequest();
    xhr.open(methodDelete, actionDelete, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("id=" + id);
    xhr.onloadend = function () {
        console.log("deleted");
    }
}