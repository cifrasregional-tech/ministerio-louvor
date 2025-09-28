importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "SUA_API_KEY_AQUI",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJETO",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
});

// initialize messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload){
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/favicon.ico' // ou /icons/...
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
