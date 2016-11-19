var methodSearch = 'GET';
var actionSearch = 'http://127.0.0.1:1337/search';
var methodInsert = 'POST';
var actionInsert = '/insert'
var methodDelete = 'POST';
var actionDelete = '/delete';
var showhide = document.getElementById('showhide');
var form = document.getElementById('form');
showhide.onclick = function () {
    if (form.style.visibility === 'visible') {
        hideform();
    } else {
        showForm();
    }
};

function showForm() {
    form.style.visibility = 'visible';
}

function hideform() {
    form.style.visibility = 'hidden';
}

//se id e vuoto?
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

//se i campi sono vuoti inserire valori di base
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
    if (level == "") {
        level = 0;
    }
    var salary = document.getElementById("salaryf").value;
    if (salary == "") {
        salary = 0;
    }
    var message = "id=" + id + "&name=" + name + "&surname=" + surname + "&level=" + level + "&salary=" + salary;
    console.log(message);

    var xhr = new XMLHttpRequest();
    xhr.open(methodInsert, actionInsert, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onloadend = function () {
        console.log("inserted");
    }
    xhr.send(message);
};

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