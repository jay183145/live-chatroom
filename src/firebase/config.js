import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBTj_FCmZhtNjdIT8HGhkiav_Q4UFYbCMk",
  authDomain: "live-chatroom-71496.firebaseapp.com",
  projectId: "live-chatroom-71496",
  storageBucket: "live-chatroom-71496.appspot.com",
  messagingSenderId: "926431551112",
  appId: "1:926431551112:web:91af8ed74fb8ecf743c93d"
};

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp}