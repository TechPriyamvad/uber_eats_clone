import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDF8ASaG0raeQT07iqW8sovjZ4llZPxjew",

  authDomain: "react-native-uber-eats-c-189e9.firebaseapp.com",

  projectId: "react-native-uber-eats-c-189e9",

  storageBucket: "react-native-uber-eats-c-189e9.appspot.com",

  messagingSenderId: "829554972176",

  appId: "1:829554972176:web:0937beb0d5879b296cdc95",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
