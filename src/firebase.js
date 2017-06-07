import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCkvdmR1ZejhOwIRgz6pnvZOy1txs0-qTY",
    authDomain: "first-flight-with-friend-5cad4.firebaseapp.com",
    databaseURL: "https://first-flight-with-friend-5cad4.firebaseio.com",
    projectId: "first-flight-with-friend-5cad4",
    storageBucket: "first-flight-with-friend-5cad4.appspot.com",
    messagingSenderId: "943121771622"
  };
  
  firebase.initializeApp(config);

  export default firebase;

  export const database = firebase.database();