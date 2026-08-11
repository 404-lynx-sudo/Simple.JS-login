//This is grabbing the button, password and username elements from signup.html
//and mapping them to seperate constant variables
const button = document.getElementById("button");
const newpasswd = document.getElementById("newPasswd1");
const newUser = document.getElementById("newUser1");

//This creates function "setlog" and stores the values from the html text boxes
//into variables then stores those variables in local storage
function setlog() {
   let newpassword = newpasswd.value;
   let newusername = newUser.value;

   localStorage.setItem("username", newusername)
   localStorage.setItem("password", newpassword)
}

//This uses the "button" variable to listen for when the sign up button is clicked
//then calls upon the function "setlog"
button.addEventListener("click", setlog);