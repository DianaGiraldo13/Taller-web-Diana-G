  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC7_Qlo7bi2qQXlfccUfu4ZES9EU24BqQw",
    authDomain: "boxycharm-a54e1.firebaseapp.com",
    projectId: "boxycharm-a54e1",
    storageBucket: "boxycharm-a54e1.appspot.com",
    messagingSenderId: "929716530628",
    appId: "1:929716530628:web:7f809ca121d2a41b1dc891"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const storage = firebase.storage();
