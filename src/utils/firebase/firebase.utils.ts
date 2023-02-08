// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { useCookies } from "react-cookie";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyCPoCyIXvPCrmTJMAK9oJN8iz_jg4344F0",
  // authDomain: "e-com-clothing-db-4c7d6.firebaseapp.com",
  // projectId: "e-com-clothing-db-4c7d6",
  // storageBucket: "e-com-clothing-db-4c7d6.appspot.com",
  // messagingSenderId: "791703503630",
  // appId: "1:791703503630:web:9a652cb883f1d8f57a0d5f",
  apiKey: "AIzaSyBQy4zHp0P2algx7dZuF_a7Bj6QysChOSw",
  authDomain: "sirloin-pos-97dfb.firebaseapp.com",
  projectId: "sirloin-pos-97dfb",
  storageBucket: "sirloin-pos-97dfb.appspot.com",
  messagingSenderId: "1079042154066",
  appId: "1:1079042154066:web:6ebbf688504ceb0ed7898b",
  measurementId: "G-0H1EWV9BWC",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, {
    vapidKey:
      "BJK1LCuW9TP3N-MN1z0_mX39R6cOCnnS247DjtmaCrdoHgjIhxoXz5u_rrR6bo-XlaYB8JOcpoW4Y_73fNx4QLQ",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        // Perform any other neccessary action with the token
        localStorage.setItem("device_token", currentToken);
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one."
        );
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload);
      resolve(payload);
    });
  });

// const googleProvider = new GoogleAuthProvider();

// googleProvider.setCustomParameters({
//   prompt: "select_account",
// });

// export const auth = getAuth();
// export const signInWithGooglePopup = () =>
//   signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, googleProvider);

// export const db = getFirestore();

// export const createUserDocumentFromAuth = async (
//   userAuth: any,
//   additionalInformation = {}
// ) => {
//   if (!userAuth) return;

//   const userDocRef = doc(db, "users", userAuth.uid);

//   const userSnapshot = await getDoc(userDocRef);

//   if (!userSnapshot.exists()) {
//     const { displayName, email } = userAuth;
//     const createAt = new Date();

//     try {
//       await setDoc(userDocRef, {
//         displayName,
//         email,
//         createAt,
//         ...additionalInformation,
//       });
//     } catch (error: any) {
//       console.log("error creating the user", error.message);
//     }
//   }

//   return userDocRef;
// };

// export const createAuthUserWithEmailAndPassword = async (
//   email: any,
//   password: any
// ) => {
//   if (!email || !password) return;

//   return await createUserWithEmailAndPassword(auth, email, password);
// };
