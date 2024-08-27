// This is JS File for CONTACT US PAGE

// Hamburger Menu: Start
let m = document.querySelector('#menu-btn');
let nav = document.querySelector('.header .flex .navbar');

m.onclick = () =>{
    m.classList.toggle('fa-times');
    nav.classList.toggle('active');
}
// Hamburger Menu: End

// Form: Start
function emailValidation(emailSus) {

    var at = emailSus.indexOf("@");
    var dot = emailSus.indexOf(".");
    var space = emailSus.indexOf(" ");

    if((at != -1) &&
        (at != 0) &&
        (dot != -1) &&
        (dot != 0) &&
        (dot > at + 1) &&
        (emailSus.length > dot + 1) &&
        (space == -1)) {
        return true;
    } else {
        return false;
    }

}

function validForm() {

    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let phone = document.getElementById("phone")
    let preference = document.getElementById("preference")
    let message = document.getElementById("message")
    let conditions = document.getElementById("conditions")

    if(name.value.length == 0) {
        alert("Please fill the name!");
    } else if(email.value.length == 0) {
        alert("Please fill the e-mail box!");
    } else if(!emailValidation(email.value)){
        alert("Please input a valid e-mail address!")
    } else if(isNaN(phone.value)){
        alert("Phone numbers must be numbers!")
    } else if(phone.value.length != 11 && phone.value.length != 12 && phone.value.length != 13){
        alert("Phone numbers must contain 11-13 digits of numbers!")
    } else if(preference.value == "") {
        alert("Please choose your ramen preference!")
    } else if(message.value == "") {
        alert("Please do not leave the message box empty!")
    } else if(conditions.checked == false) {
        alert("Please agree to receive newsletter from us!")
    }

}
// Form: End