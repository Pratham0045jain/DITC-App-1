import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyDMSIsP5xHDk80GAZwJDKJ3b-M6H2Nw2sI",
  authDomain: "ditc-app.firebaseapp.com",
  projectId: "ditc-app",
  storageBucket: "ditc-app.appspot.com",
  messagingSenderId: "752956350433",
  appId: "1:752956350433:web:37899b2ca86c9a54947ca0"
};

if (!firebase.apps.length){

firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();