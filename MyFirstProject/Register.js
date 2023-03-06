const firebaseConfig = {
  apiKey: "AIzaSyDwzXfsxgvDbCVBre-vnHbAU8QQGIrkIGA",
  authDomain: "my-firstproject-822b4.firebaseapp.com",
  databaseURL: "https://my-firstproject-822b4-default-rtdb.firebaseio.com",
  projectId: "my-firstproject-822b4",
  storageBucket: "my-firstproject-822b4.appspot.com",
  messagingSenderId: "1072894564614",
  appId: "1:1072894564614:web:5da9c4de5140ab2ada2687"
  
};
  //   copy your firebase config informations

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var RegisterFormDB = firebase.database().ref("RegisterForm");

document.getElementById("RegisterForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email= getElementVal("email");
  var password = getElementVal("password");
  var passwordconfirm=getElementVal("passwordconfirm")

  saveMessages(name, email, password);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("RegisterForm").reset();
}

const saveMessages = (name, email, password) => {
  var newRegisterForm = RegisterFormDB.push();

  newRegisterForm.set({
    name: name,
    email: email,
    password: password,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
