//This is grabbing the button, password and username elements from signup.html
//and mapping them to seperate constant variables
const pbs = document.getElementById("pbs")
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

function hide() {
//This checks if password text box type is set to "password" upon the calling of the function
//If so then it changes the button text to "Hide" and changes the type to text
   if(newpasswd.type === "password") {
        newpasswd.type = "text"
        pbs.textContent = "Hide"
      //If the text box type is not password this changes it to password and changes the button text to "Show"
      //Upon the function being called
    } else {
        newpasswd.type = "password"
        pbs.textContent = "Show"
    }
    
}

//This uses the "pbs" variable to listen for when the show/hide button is clicked
//then calls upon the function "hide"
pbs.addEventListener("click", hide);

//This uses the "button" variable to listen for when the sign up button is clicked
//then calls upon the function "setlog"
button.addEventListener("click", setlog);