//---------------------------------------------------------------------
// Your web app's Firebase configuration;
// Speficies which firebase project your application is connected with.
//---------------------------------------------------------------------

var firebaseConfig = {
    
  // Your API stuff goes here;  get it from firebase console
  
};

// Initialize Firebase
// Henceforce, any reference to the database can be made with "db"
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
