// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD9lYcR-xMgDFW6Nbf_JjjqpbYidJ3GJaM",
    authDomain: "vitmas-contactform.firebaseapp.com",
    databaseURL: "https://vitmas-contactform.firebaseio.com",
    projectId: "vitmas-contactform",
    storageBucket: "vitmas-contactform.appspot.com",
    messagingSenderId: "63952654032",
    appId: "1:63952654032:web:3b754d36b1638b6d2e98d5",
    measurementId: "G-HMJCEPDT0H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

var firestore = firebase.firestore();

  /*function storeData() {
      var inputText = document.getElementById("name").value;
      var area = document.getElementById("email").value;
       var date = document.getElementById("message").value;
       // var work = document.getElementById("text_field2").value;


      db.collection("SejalWeb").doc().set({
              Name: inputText,
              Email: area,
              Message:date
            

          })
          .then(function (docRef) {
              console.log("Document written with ID: ", docRef.id);
          })
          .catch(function (error) {
              console.error("Error adding document: ", error);
          });
  }
*/
// Start grabbing our DOM Element
const submitBtn=document.querySelector('#submit');

let userName=document.querySelector('#userName');
let userEmail=document.querySelector('#userEmail');
let userMessage=document.querySelector('#userMessage');

const db=firestore.collection("contactData");
submitBtn.addEventListener('click',function(){
    let userNameInput=userName.value;
    let userEmailInput=userEmail.value;
    let userMessageInput=userMessage.value;

    //Access the Database Collection
    db.doc()
    .set({
        name: userNameInput,
        email: userEmailInput,
        message: userMessageInput
    })
    .then(function(){
        console.log("Data Saved");
    })
    .catch(function(error){
        console.log(error);
    });
});