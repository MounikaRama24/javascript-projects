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
  var ForgotPasswordDB = firebase.database().ref("ForgotPassword");
  
  document.getElementById("ForgotPassword").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    
    var email= getElementVal("email");
    
  
    saveMessages( email);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("ForgotPassword").reset();
  }
  
  const saveMessages = ( email) => {
    var newForgotPassword = ForgotPasswordDB.push();
  
    newForgotPassword.set({
     
      email: email,

    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  //javascript user data warning code?
window.addEventListener("beforeunload", function (e) {
    var confirmationMessage = 'It looks like you have been editing something. '
                            + 'If you leave before saving, your changes will be lost.';

    (e || window.event).returnValue = confirmationMessage; //Gecko + IE
    return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
});


var formSubmitting = false;
var setFormSubmitting = function() { formSubmitting = true; };

window.onload = function() {
    window.addEventListener("beforeunload", function (e) {
        if (formSubmitting) {
            return undefined;
        }

        var confirmationMessage = 'It looks like you have been editing something. '
                                + 'If you leave before saving, your changes will be lost.';
        
        (e || window.event).returnValue = confirmationMessage; //Gecko + IE
        return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
    });
};


<form method="post" onsubmit="setFormSubmitting()">     
    <input type="submit" />
</form>


var isDirty = function() { return false; }

window.onload = function() {
    window.addEventListener("beforeunload", function (e) {
        if (formSubmitting || !isDirty()) {
            return undefined;
        }
        
        var confirmationMessage = 'It looks like you have been editing something. '
                                + 'If you leave before saving, your changes will be lost.';

        (e || window.event).returnValue = confirmationMessage; //Gecko + IE
        return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
    });
};
    



