// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDIPb-bxOeCwbEJk5kombqFitE2YGTJgOQ',
  authDomain: 'authsso-5a26e.firebaseapp.com',
  projectId: 'authsso-5a26e',
  storageBucket: 'authsso-5a26e.appspot.com',
  messagingSenderId: '892587734443',
  appId: '1:892587734443:web:5d1eae5a5e96851678ceee',
  measurementId: 'G-X6Z60E5YGL',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export { auth, provider }
