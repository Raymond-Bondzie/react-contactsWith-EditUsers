import firebase from "firebase";



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkP2TqBtDA6bTcmDuZPE4-N3jht1WDdT8",
    authDomain: "react-contact-app-fb7c8.firebaseapp.com",
    projectId: "react-contact-app-fb7c8",
    storageBucket: "react-contact-app-fb7c8.appspot.com",
    messagingSenderId: "547866628739",
    appId: "1:547866628739:web:a24c32a3a6911c4a3a81b6"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;