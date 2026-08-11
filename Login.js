//This grabs the sign up credentials from local storage and maps them to seperate variables
let newpassword = localStorage.getItem("password")
let newusername = localStorage.getItem("username")

//This is grabbing the button, password and username elements from index.html
//and mapping them to seperate constant variables
const button = document.getElementById("loginButton");
const passin = document.getElementById("passwd");
const userin = document.getElementById("userName");

//This creates function "login" and stores the values from the html text boxes
//into variables
function login() {
    let password = passin.value;
    let username = userin.value;

//This checks if both the login credentials match the signup credentials then redirects if so
    if (password === newpassword && username === newusername) {
        window.location.href = "page.html"
    //If one or both of the credentials is invalid then it displays a message
    } else {
        alert("Incorrect username and/or password. Please try again");
    }
}
//This uses the "button" variable to listen for when the sign up button is clicked
//then calls upon the function "login"
button.addEventListener("click", login);