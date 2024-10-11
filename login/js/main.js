/*
  CCTB Website Development
  IST105
  Oct 2024
  Description: This is a simple login website where students are asked to 
  implement Social Network Login with Firebase
*/

/*
Function onAuthStateChanged(user)
Write a function to check if a user is logged
*/

window.addEventListener("load", function () {
  //Listen for auth state changes

  document
    .getElementById("sign-in-button")
    .addEventListener("click", function () {
      let provider = new firebase.auth.GoogleAuthProvider();

      provider.addScope("email");
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
          console.log("Logging sucessfully", result.user);
          location.href = "home.html";
        })
        .catch(function (error) {
          console.log("Logging fail", error);
        });
    });

  document.getElementById("sign-in-2").addEventListener("click", function () {
    let emailTxt = document.getElementById("email").value;
    let passtxt = document.getElementById("password").value;

    firebase
      .auth()
      .signInWithEmailAndPassword(emailTxt, passtxt)
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user;
        // ...
        console.log("Logging sucessfully");
        alert("Logging sucessfully");
        location.href = "home.html";
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log("Logging fail", errorMessage);
      });
  });

  document.getElementById("sign-in-3").addEventListener("click", function () {
    let emailTxt = document.getElementById("email").value;
    let passtxt = document.getElementById("password").value;

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailTxt, passtxt)
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user;
        // ...
        console.log("Account created");
        alert("Account created");
        location.href = "home.html";
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log("Logging fail", errorMessage);
      });
  });
});
