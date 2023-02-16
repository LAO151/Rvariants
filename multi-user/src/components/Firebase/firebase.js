// import app from 'firebase/app';

// const config = {
//     apiKey: "AIzaSyDrYSWUYJcLqfVetEsjQ7FK8cnJo5xjtyY",
//     authDomain: "db-auth-5c313.firebaseapp.com",
//     projectId: "db-auth-5c313",
//     storageBucket: "db-auth-5c313.appspot.com",
//     messagingSenderId: "821743547422",
//     appId: "1:821743547422:web:b224bea56ee3b310702a0f"
// };

// class Firebase {
//   constructor() {
//     app.initializeApp(config);
//   }
// }

// export default Firebase;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrYSWUYJcLqfVetEsjQ7FK8cnJo5xjtyY",
  authDomain: "db-auth-5c313.firebaseapp.com",
  projectId: "db-auth-5c313",
  storageBucket: "db-auth-5c313.appspot.com",
  messagingSenderId: "821743547422",
  appId: "1:821743547422:web:b224bea56ee3b310702a0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);