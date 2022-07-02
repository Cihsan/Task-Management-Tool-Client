// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC52WLifJCW_A8QO3OfnnU20hlPm9V-Hxc",
  authDomain: "task-management-6e99f.firebaseapp.com",
  projectId: "task-management-6e99f",
  storageBucket: "task-management-6e99f.appspot.com",
  messagingSenderId: "861281194085",
  appId: "1:861281194085:web:793e9278d07fafa956f68c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth