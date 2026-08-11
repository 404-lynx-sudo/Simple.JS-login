let newpassword = localStorage.getItem("password")
let newusername = localStorage.getItem("username")
const button = document.getElementById("loginButton");
const passin = document.getElementById("passwd");
const userin = document.getElementById("userName");

button.addEventListener("click", function() {
    let password = passin.value;
    let username = userin.value;

    if (password === newpassword && username === newusername) {
        window.location.href = "page.html"
    } else {
        alert("Incorrect username and/or password. Please try again");
    }
});