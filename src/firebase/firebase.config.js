// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// console.log('ENV variable',import.meta.env.VITE_apiKey)
// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_apiKey,
//   authDomain:import.meta.env.VITE_authDomain,
//   projectId:import.meta.env.VITE_projectId,
//   storageBucket:import.meta.env.VITE_storageBucket,
//   messagingSenderId:import.meta.env.VITE_messagingSenderId,
//   appId:import.meta.env.VITE_appId
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtfHC-cBcJIat-d4XjqcKyMgKirLYE7Xg",
  authDomain: "chef-auth-ea056.firebaseapp.com",
  projectId: "chef-auth-ea056",
  storageBucket: "chef-auth-ea056.appspot.com",
  messagingSenderId: "720209571481",
  appId: "1:720209571481:web:20cdad6a17f5f50c555208"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
