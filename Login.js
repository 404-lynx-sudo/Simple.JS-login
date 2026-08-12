//This grabs the sign up credentials from local storage and maps them to seperate variables
let newpassword = localStorage.getItem("password")
let newusername = localStorage.getItem("username")

//This is grabbing the button, password and username elements from index.html
//and mapping them to seperate constant variables
const hidepasswd = document.getElementById("hidePasswd")
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
function hide() {

//This checks if password text box type is set to "password" upon the calling of the function
//If so then it changes the button text to "Hide" and changes the type to text
    if(passwd.type === "password") {
        passwd.type = "text"
        hidepasswd.textContent = "Hide"
    //If the text box type is not password this changes it to password and changes the button text to "Show"
    //Upon the function being called
    } else {
        passwd.type = "password"
        hidepasswd.textContent = "Show"
    }
    
}

//This uses the "hidepasswd" variable to listen for when the show/hide button is clicked
//then calls upon the function "hide"
hidepasswd.addEventListener("click", hide);
//This uses the "button" variable to listen for when the sign up button is clicked
//then calls upon the function "login"
button.addEventListener("click", login);