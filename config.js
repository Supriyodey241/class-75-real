import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyDDX1SWHyo6EfKYIE6UAZw3ziS_nyy-Dcc",
  authDomain: "willy-app-daf6d.firebaseapp.com",
  projectId: "willy-app-daf6d",
  storageBucket: "willy-app-daf6d.appspot.com",
  messagingSenderId: "536771716804",
  appId: "1:536771716804:web:7f32c73aab8c6cc47a0b91"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();