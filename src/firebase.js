// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAGkYC8iQyQby7eare9vdYwbp_8ng9mrA",
  authDomain: "realtor-clone-react-2806a.firebaseapp.com",
  projectId: "realtor-clone-react-2806a",
  storageBucket: "realtor-clone-react-2806a.appspot.com",
  messagingSenderId: "906751950053",
  appId: "1:906751950053:web:78785890fc933b599ca80c"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 
 export const db=getFirestore()