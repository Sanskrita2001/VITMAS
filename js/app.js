var db = firebase.firestore();

  function storeData() {
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
