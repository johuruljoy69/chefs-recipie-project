// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyADyEqDFBbQYu787GkXF4YVkBQO9_8g16c",
  authDomain: "js-foodhub-project-23a51.firebaseapp.com",
  projectId: "js-foodhub-project-23a51",
  storageBucket: "js-foodhub-project-23a51.appspot.com",
  messagingSenderId: "618010604353",
  appId: "1:618010604353:web:54833b956804aef459e7c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;