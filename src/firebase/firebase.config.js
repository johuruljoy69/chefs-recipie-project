// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-f9E-6TZzK6IS7k_AZh4U9Vc81uuLq90",
  authDomain: "js-foodhub-project.firebaseapp.com",
  projectId: "js-foodhub-project",
  storageBucket: "js-foodhub-project.appspot.com",
  messagingSenderId: "458336258101",
  appId: "1:458336258101:web:20541a3ae3c1ff7479897c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;