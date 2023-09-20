document.getElementById("main-form").addEventListener("submit", checkForm);

function checkForm(event) {
    event.preventDefault();
    
    var el = document.getElementById("main-form");
    var login = el.login.value;
    console.log(login);
}