// firebase-messaging-sw.js
// Give the service worker access to Firebase SDK.
// This is required to receive background messages.
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

// Your Firebase configuration object (copy it again here, EXACTLY as it is in index.html)
const firebaseConfig = {
  apiKey: "AIzaSyAyMnPuT99qS6firsrk62T76qCWdMbYoMA",
  authDomain: "farmersurveypushnotifications.firebaseapp.com",
  projectId: "farmersurveypushnotifications",
  storageBucket: "farmersurveypushnotifications.firebasestorage.app",
  messagingSenderId: "14429307335",
  appId: "1:14429307335:web:9f9061972c3783540399e2"
};

// Initialize Firebase in the service worker
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

// Optional: Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title || 'New Message';
  const notificationOptions = {
    body: payload.notification.body || 'You have a new notification.',
    icon: '/firebase-logo.png' // Make sure you upload this icon to your GitHub repo root
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
