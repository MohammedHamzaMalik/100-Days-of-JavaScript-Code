var button = document.getElementById("button");
var show = document.querySelector(".show");
var copy = document.querySelector(".copy");

// creating a function for generating random password using the characters given below
button.onclick = function generatePassword() {
  var characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_";
  var pwdLength = 16;
  var password = "";

  for (let i = 0; i < pwdLength; i++) {
    var generatePwd = Math.floor(Math.random() * characters.length);
    password += characters.substring(generatePwd, generatePwd + 1);
  }
  document.getElementById("password").value = password;
  show.innerHTML = "Your new Password is: <br>" + password;
};

// creating a function for showing that the generated password is copied
copy.onclick = function copyPwd() {
  var text = document.getElementById("password");
  text.select();
  text.setSelectionRange(0, 9999);
  document.execCommand("i");
  show.classList.toggle("active");
  setTimeout(() => {
    show.classList.toggle("active");
  }, 2000);
};
