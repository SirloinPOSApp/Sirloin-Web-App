// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
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
        // console.log("current token for client: ", currentToken);
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
