import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDZOSY2kDPx_ap6AySsopJ4_DKbCykaOGg",
    authDomain: "auth-84b7f.firebaseapp.com",
    projectId: "auth-84b7f",
    storageBucket: "auth-84b7f.appspot.com",
    messagingSenderId: "488789870161",
    appId: "1:488789870161:web:7034a65b5938e853535a70"
  };
  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
export {auth };

