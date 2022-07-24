import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyArchezsDsyEJGuKodAOFebK_5Gd7e9v3Q",
    authDomain: "recipe-c5978.firebaseapp.com",
    projectId: "recipe-c5978",
    storageBucket: "recipe-c5978.appspot.com",
    messagingSenderId: "293722206814",
    appId: "1:293722206814:web:c8d09e53ed0053f6e2facf"
  };



  firebase.initializeApp(firebaseConfig);


  const projectFirestore = firebase.firestore();
  const projectStorege = firebase.storage();

  

  export  {projectFirestore, projectStorege, firebaseConfig};