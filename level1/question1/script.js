//Use RegEx to validate form
var yourFirstName = document.getElementById("yourName");
var yourLastName = document.getElementById("yourLast");
var yourNumber = document.getElementById("yourNumber");
var yourEmail = document.getElementById("yourEmail");

var checkname = /^[a-zA-zæÆøØåÅ]+$/;
var checkNumber = /^\d{8}$/;
var checkEmail = /^([\d\w!#$%&'*+\-\/\\=?^_`{|}~]+)@([\d\w!#$%&'*+\-\/\\=?^_`{|}~]+).([a-zA-Z]{2,})$/;

function checkForm() {
    if (checkname.test(yourFirstName.value)) {
        document.getElementById("yourNameResponse").style.color = "green";
        document.getElementById("yourNameResponse").innerHTML = "Correct input";
    } else {
        document.getElementById("yourNameResponse").style.color = "red";
        document.getElementById("yourNameResponse").innerHTML = "Not a valid name";
    }
    if (checkname.test(yourLastName.value)) {
        document.getElementById("yourLastResponse").style.color = "green";
        document.getElementById("yourLastResponse").innerHTML = "Correct input";
    } else {
        document.getElementById("yourLastResponse").style.color = "red";
        document.getElementById("yourLastResponse").innerHTML = "Not a valid name";

    }
    if (checkNumber.test(yourNumber.value)) {
        document.getElementById("yourNumberResponse").style.color = "green";
        document.getElementById("yourNumberResponse").innerHTML = "Correct input";
    } else {
        document.getElementById("yourNumberResponse").style.color = "red";
        document.getElementById("yourNumberResponse").innerHTML = "Not a valid number";
    }
    if (checkEmail.test(yourEmail.value)) {
        document.getElementById("yourEmailResponse").style.color = "green";
        document.getElementById("yourEmailResponse").innerHTML = "Correct input";
    } else {
        document.getElementById("yourEmailResponse").style.color = "red";
        document.getElementById("yourEmailResponse").innerHTML = "Not a valid email"
    }
}
