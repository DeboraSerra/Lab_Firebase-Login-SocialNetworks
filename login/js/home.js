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

const onAuthStateChanged = (user) => {
};

window.addEventListener("load", function () {
  //Listen for auth state changes
  firebase.auth().onAuthStateChanged(onAuthStateChanged);
  //Implement SignOut Function
  document.querySelector("#sign-out-button").addEventListener("click", () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("Logged out");
        alert("Logged out");
        location.href = "index.html";
      })
      .catch((error) => {
        console.log(error);
      });
  });
});
