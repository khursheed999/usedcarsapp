// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { APIKEY } from "../../ApiKey";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apikey:APIKEY.key,
  authDomain: "usedcarssell-app.firebaseapp.com",
  projectId: "usedcarssell-app",
  storageBucket: "gs://usedcarssell-app.appspot.com",
  messagingSenderId: "658781733293",
  appId:APIKEY.appId,
  //Get URL from the firebase by creating a new project;
 databaseURL:APIKEY.databaseURL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// //Initialize firebase Authentication and get a reference to the service;
// export const auth=getAuth(app);
// export const provider=new GoogleAuthProvider();