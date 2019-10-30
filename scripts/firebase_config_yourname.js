   // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyCTjQNdAlqs7OeETdTvePiBTkkKCLfwP44",
      authDomain: "fir-eb9ef.firebaseapp.com",
      databaseURL: "https://fir-eb9ef.firebaseio.com",
      projectId: "fir-eb9ef",
      storageBucket: "fir-eb9ef.appspot.com",
      messagingSenderId: "922951246749",
      appId: "1:922951246749:web:9a0cc62c6d2be171ef4574",
      measurementId: "G-6NPCQH1NVP"
    };
    // Initialize Firebase
    // Henceforce, any reference to the database can be made with "db"
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    //db.settings({timestampsInSnapshots: true});