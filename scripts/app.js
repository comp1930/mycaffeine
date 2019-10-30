//=================================================
// This files contains all the javascript functions
// used in the project
//
// @author Carly Orr
// @version 1.0
//=================================================

// ---------------------------------------------
// Display the current Caffeine Count (id="caffeinecount")
// ---------------------------------------------
function showCaffeineCount(){
  //var x=25;  // get this number from database eventually
  // for now we assume this value is in localStorage
  var x=window.localStorage.getItem('num_cups');
  document.getElementById("caffeinecount").innerHTML = x;
}

// ---------------------------------------------
// Display the current Date (id="today")
// ---------------------------------------------
function showDate(){
  var d = new Date();
  var line = d.toDateString().slice(0,15);
  document.getElementById("today").innerHTML = line;
}

// ---------------------------------------------
// Setup a Listener for the Logout button called "btnLogout"
// When button is clicked, increment the "num_cups" variable.
// Eventually this is saved in the database.
// For now, we save it into LocalStorage.
// ---------------------------------------------
function setAddListener(){
  document.getElementById("addBtn").addEventListener("click", function(e) {
    var x= parseInt(window.localStorage.getItem("num_cups"));
    window.localStorage.setItem('num_cups', x+1);
    showCaffeineCount();
  })
}   

// ---------------------------------------------
// If the currently logged in user is authenticated,
// then signout this person "user".
// ---------------------------------------------
function logoutUser(){
  firebase.auth().onAuthStateChanged(function(user){
      var promise = firebase.auth().signOut();
      promise.then(function(){
          //alert("logged out");
      });
  });
}

// ---------------------------------------------
// If the currently logged in user is authenticated,
// then show the person's name in the header (id="name")
// ---------------------------------------------
function showName(){
  firebase.auth().onAuthStateChanged(function(user){
      console.log(user);
      document.getElementById("name").innerHTML = user.displayName;
  });
}
