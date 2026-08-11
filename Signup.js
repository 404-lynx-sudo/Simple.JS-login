const button = document.getElementById("button");
const newpasswd = document.getElementById("newPasswd1");
const newUser = document.getElementById("newUser1");

button.addEventListener("click", function() {
   let newpassword = newpasswd.value;
   let newusername = newUser.value;

   localStorage.setItem("username", newusername)
   localStorage.setItem("password", newpassword)
});