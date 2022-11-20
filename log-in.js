let btn1 = document.getElementById("login-btn")     // logIn btn
let email = document.getElementById("email")        // Email input txt

email.addEventListener("keyup", onLoad)     // This event is executed when key is released

function onLoad() {     // Function to check if user email matches with the registered email
    let emailData = email.value
    if((emailData == "" || emailData != "hydrogen@gmail.com")) {
        btn1.disabled = true    //if user input does not match, log-in button is disabled
        email.style.border = 1 + "px solid red"
        pswd.style.border = 1 + "px solid red"
    }
    else {
        btn1.removeAttribute("disabled")    //if user input matches, log-in button is enabled
        email.style.border = 1 + "px solid #c6d2d9"
        pswd.style.border = 1 + "px solid #c6d2d9"
    }
}



var btn = document.getElementById("login-btn");
var body = document.querySelector('body')

function validateUser(event) {

    var name = document.getElementById("email").value
    var password = document.getElementById("password").value

    if (name == "" || password == "") {
        console.log("cant be null")
        alert("Email or Password Cannot be Null")
    } // hydrogen
    // else if (name == "ravinder@gmail.com" && password == "ravinder") {
    //     if (!Check()) {
    //         alert("Please agree to terms and conditions")
    //     }
        else {
            localStorage.setItem("email",name)
            localStorage.setItem("password",password)
            window.location = "nav.html"
        }
    console.log(name, password)
    event.preventDefault();
}

function Check() {
    var checkbox = document.getElementById('SignUpCheckbox');
    var err = document.getElementById('SignUperror')

    if (checkbox.checked != true) {

        return false;
    }
    else {
        return true;
    }
}
btn.addEventListener('click', validateUser)