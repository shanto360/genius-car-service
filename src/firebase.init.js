// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD64YqioC6ACfQprLf0HRt7n62d_tsFlXw",
  authDomain: "genius-car-service-ef523.firebaseapp.com",
  projectId: "genius-car-service-ef523",
  storageBucket: "genius-car-service-ef523.appspot.com",
  messagingSenderId: "871104017598",
  appId: "1:871104017598:web:c6b6b40537f790f1679aef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth