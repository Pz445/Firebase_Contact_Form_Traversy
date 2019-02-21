// Initialize Firebase
var config = {
    apiKey: "AIzaSyAf9g8VH-ln8EDfWJy_M_84mLaA2XRjDxc",
    authDomain: "contact-form-729f0.firebaseapp.com",
    databaseURL: "https://contact-form-729f0.firebaseio.com",
    projectId: "contact-form-729f0",
    storageBucket: "",
    messagingSenderId: "176041353702"
  };
  firebase.initializeApp(config);

var messagesRef = firebase.database().ref('messages');

document.getElementById('form').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  saveMessage(name, company, email, phone, message);

  document.querySelector(".alert").style.display = "block";

  setTimeout(function() {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  document.getElementById('form').reset()

}


function getInputVal(id) {
  return document.getElementById(id).value;
}

function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}
