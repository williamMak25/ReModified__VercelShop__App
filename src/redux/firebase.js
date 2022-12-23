import {initializeApp} from 'firebase/app'
import {getFirestore } from 'firebase/firestore'
import {getAuth} from'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCCvxvu6gf-rhLox_GZtrQqF1sFgCL6C2c",
    authDomain: "test-firebase-b14d2.firebaseapp.com",
    projectId: "test-firebase-b14d2",
    storageBucket: "test-firebase-b14d2.appspot.com",
    messagingSenderId: "866402960598",
    appId: "1:866402960598:web:3ef95ac2be106d347f7577",
    measurementId: "G-7GHWDE40W4"
  };
  const app = initializeApp(firebaseConfig)
  
  export const db = getFirestore()
  export const auth = getAuth(app)
