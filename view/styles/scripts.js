// var checkbox = document.getElementById("adminCheck");
var f1 = document.getElementById("login-form");
var f2 = document.getElementById("admin-form");
var f3 = document.getElementById("signup-form");
var f4 = document.getElementById("signup-form-admin");



var ad = 0;
// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("open-btn");

// Get the <span> element that closes the modal
var span = document.getElementById("close-btn");

// Get the login button
var loginBtn = document.getElementById("login-btn");
var loginBtn1 = document.getElementById("login-btn1");

// Get the email and password fields
var email = document.getElementById("email");
var password = document.getElementById("password");
var emaila = document.getElementById("emaila");
var passworda = document.getElementById("passworda");

// When the user clicks the button, open the modal
btn.onclick = function() {
  // if (checkbox.checked) {
  //   f1.style.display = "none";
  //   f2.style.display = "block";
  // }
  
    f1.style.display = "block";
    f2.style.display = "none";
  
  modal.style.display = "block";
  
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  ad=0;
}

// When the user clicks the login button
// loginBtn.onclick = function() {
//   // alert("hello");
//   // Check if the email and password fields are empty
//   if(email.value === "" || password.value === "") {
//     // Show an alert message
//     alert("Fields should not be empty");
//   }
//   else if (!email.value.endsWith("@bmsce.ac.in")) {
//     // Check if the email address is valid
//     alert("Please enter a valid BMSCE email address");
//   }
//    else {
    
    
//     window.location.href = "secondpage.html";
    
    
    
//   }
// }

// When the user clicks the login button
// loginBtn1.onclick = function() {
//   // alert("hello");
//   // Check if the email and password fields are empty
//   if(emaila.value === "" || passworda.value === "") {
//     // Show an alert message
//     alert("Fields should not be empty");
//   }
//   else if (emaila.value !== "anoshor.cs21@bmsce.ac.in" && emaila.value !== "anshumohandas.cs21@bmsce.ac.in" && emaila.value !== "amshu.cs21@bmsce.ac.in" && emaila.value !== "anaghams.cs21@bmsce.ac.in") {
//     // Check if the email address is valid
//     alert("Please enter a valid ADMIN address");
//   }

//   else if (emaila.value === "anoshor.cs21@bmsce.ac.in" && passworda.value !== "anoshor") {
//     alert("incorrect password");
//   }
//   else if (emaila.value === "amshu.cs21@bmsce.ac.in" && passworda.value !== "amshu") {
//     alert("incorrect password");
//   }
//   else if (emaila.value === "anshumohandas.cs21@bmsce.ac.in" && passworda.value !== "anshu") {
//     alert("incorrect password");
//   }
//   else if (emaila.value === "anaghams.cs21@bmsce.ac.in" && passworda.value !== "anagha") {
//     alert("incorrect password");
//   }
  
  
//    else {
    
    
//     window.location.href = "secondpage_admin.html";
    
    
    
//   }
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// signup form

// Get the modal
var modal1 = document.getElementById("modal1");

// Get the button that opens the modal
var btn1 = document.getElementById("open-btn1");

// Get the <span> element that closes the modal
var span1 = document.getElementById("close-btn1");

// Get the login button
var signupBtn = document.getElementById("signup-btn");
var signupBtn1 = document.getElementById("signup-btn1");

// Get the email and password fields
var email1 = document.getElementById("email1");
var password1 = document.getElementById("password1");
var password2 = document.getElementById("password2");
var usn = document.getElementById("usn");
// Get the email and password fields for ADMINNNNNNNNN
var email1a = document.getElementById("email1a");
var password1a = document.getElementById("password1a");
var password2a = document.getElementById("password2a");
var usna = document.getElementById("usna");

// When the user clicks the button, open the modal
btn1.onclick = function() {
  // if (checkbox.checked) {
  //   f3.style.display = "none";
  //   f4.style.display = "block";
  // }
  // else {
    f3.style.display = "block";
    f4.style.display = "none";
  
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks the signup button
// signupBtn.onclick = function() {

//   const passwordPattern = /^(?=.*\d)(?=.*[@#%&])[A-Za-z\d@#%&]{8,}$/;
  
//   // alert("hello");
//   if(email1.value === "" || password1.value === "" || usn.value === "" || password2.value === "") {
//     // Show an alert message
//     alert("Fields should not be empty");
//   }

//   else if (!passwordPattern.test(password1.value)) {
//     // Check if the password is valid
//     alert("Please enter a valid password. Password must contain at least one digit, one of the symbols @,#,%,& and be at least 8 characters long.");
//   }
  
//   else if ((password1.value)!==(password2.value)) {
//     alert("Password should be same");
//   }

//   else if (!email1.value.endsWith("@bmsce.ac.in")) {
//     // Check if the email address is valid
//     alert("Please enter a valid BMSCE email address");
//   }
  
//   else {
//     window.location.href = "secondpage.html";
//   }
// }

// signupBtn1.onclick = function() {

//   const passwordPattern = /^(?=.*\d)(?=.*[@#%&])[A-Za-z\d@#%&]{8,}$/;
  
//   // alert("hello");
//   if(email1a.value === "" || password1a.value === "" || usna.value === "") {
//     // Show an alert message
//     alert("Fields should not be empty");
//   }

//   else if (!passwordPattern.test(password1a.value)) {
//     // Check if the password is valid
//     alert("Please enter a valid password. Password must contain at least one digit, one of the symbols @,#,%,& and be at least 8 characters long.");
//   }
  
//   // else if ((password1a.value)!==(password2a.value)) {
//   //   alert("Password should be same");
//   // }

//   else if (!email1a.value.endsWith("@bmsce.ac.in")) {
//     // Check if the email address is valid
//     alert("Please enter a valid BMSCE email address");
//   }
  
//   else {
//     window.location.href = "HOMEPAGE.html";
//     alert("Your Admin access confirmation will be sent to your mail");
//   }
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}


function openForm() {
  modal.style.display="none";
  trytimeout=setTimeout(popsignup,500);
}

function popsignup() {
  modal1.style.display="block";
}


// toggle


const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.querySelector('body');

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});



const sr=ScrollReveal ({
  distance:'70px',
  duration:2700,
  reset:true
});
sr.reveal('.try1',{delay:200,origin:'right'});
sr.reveal('.conimg',{delay:200,origin:'left'});
sr.reveal('#start',{delay:200,origin:'bottom'});
sr.reveal('#middd',{delay:200,origin:'bottom'});



// show password

// Get the password fields and show password checkboxes
const showPassword1 = document.getElementById("show-password1");
const showPassword1a = document.getElementById("show-password1a");
const showPassword2 = document.getElementById("show-password2");
// const showPassword3 = document.getElementById("show-password3");
const showPassword = document.getElementById("show-password");
const showPassworda = document.getElementById("show-passworda");

// Add event listeners to the show password checkboxes
showPassword1.addEventListener("click", () => {
  if (showPassword1.checked) {
    password1.type = "text";
  } else {
    password1.type = "password";
  }
});
showPassword1a.addEventListener("click", () => {
  if (showPassword1a.checked) {
    password1a.type = "text";
  } else {
    password1a.type = "password";
  }
});

showPassword2.addEventListener("click", () => {
  if (showPassword2.checked) {
    password2.type = "text";
  } else {
    password2.type = "password";
  }
});




showPassword.addEventListener("click", () => {
  if (showPassword.checked) {
    password.type = "text";
  } else {
    password.type = "password";
  }
});
showPassworda.addEventListener("click", () => {
  if (showPassworda.checked) {
    passworda.type = "text";
  } else {
    passworda.type = "password";
  }
});
