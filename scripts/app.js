

// ---------------------------------------------
// Display the current Caffeine Count (id="caffeinecount")
// ---------------------------------------------
function showCaffeineCount(){
  //var x=25;  // get this number from database
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
// ---------------------------------------------
function setAddListener(){
  document.getElementById("addBtn").addEventListener("click", function(e) {
    var x= parseInt(window.localStorage.getItem("num_cups"));
    window.localStorage.setItem('num_cups', x+1);
    showCaffeineCount();
  })
}   

function logoutUser(){
  // for the currently logged in user
  // call the signout function, then go back to index.html

  firebase.auth().onAuthStateChanged(function(user){
      var promise = firebase.auth().signOut();
      promise.then(function(){
          //alert("logged out");
      });
  });
}

function showName(){
  firebase.auth().onAuthStateChanged(function(user){
      console.log(user);
      document.getElementById("name").innerHTML = user.displayName;
  });
}
