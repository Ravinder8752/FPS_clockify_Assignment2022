var btn = document.getElementById("signup");
var body = document.querySelector('body')

function validateUser(event) {

    var name = document.getElementById("email").value
    var password = document.getElementById("password").value

    if (name == "" || password == "") {
        console.log("cant be null")
        alert("Email or Password Cannot be Null")
    }
    // else if (name == "ravinder@gmail.com" && password == "ravinder") {
    //     if (!Check()) {
    //         alert("Please agree to terms and conditions")
    //     }
        else {
            localStorage.setItem("email",name)
            localStorage.setItem("password",password)
            window.location = "time_sheet.html"
        }
    console.log(name, password)
    event.preventDefault();
}

function Check() {
    var checkbox = document.getElementById('SignUpCheckbox');
    var err = document.getElementById('SignUpError')

    if (checkbox.checked != true) {

        return false;
    }
    else {
        return true;
    }
}
btn.addEventListener('click', validateUser)