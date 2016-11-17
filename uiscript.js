var showhide = document.getElementById('showhide');
showhide.onclick = function () {
    var form = document.getElementById('form');
    if (form.style.visibility === 'visible') {
        form.style.visibility = 'hidden';
    } else {
        form.style.visibility = 'visible';
    }
};


var search = document.getElementById('search');
search.onclick = function () {
    var id = document.getElementById("id").value;

};