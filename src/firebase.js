// Import the functions you need from the SDKs you need
import { FirebaseApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth';
import 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIutCSF14eRH8V0cty4TnnAzIIdIb2wu0",
  authDomain: "chat-app-95e20.firebaseapp.com",
  databaseURL: "https://chat-app-95e20-default-rtdb.firebaseio.com",
  projectId: "chat-app-95e20",
  storageBucket: "chat-app-95e20.appspot.com",
  messagingSenderId: "542333898861",
  appId: "1:542333898861:web:fc457e96255f51843faf64",
  measurementId: "G-TN1X82V4HX"
};

// Initialize Firebase
const app=FirebaseApp.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =firebase.auth();
export const database=firebase.database();