// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyBQy4zHp0P2algx7dZuF_a7Bj6QysChOSw",
  authDomain: "sirloin-pos-97dfb.firebaseapp.com",
  projectId: "sirloin-pos-97dfb",
  storageBucket: "sirloin-pos-97dfb.appspot.com",
  messagingSenderId: "1079042154066",
  appId: "1:1079042154066:web:6ebbf688504ceb0ed7898b",
  measurementId: "G-0H1EWV9BWC",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  // console.log("Received background message ", payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
