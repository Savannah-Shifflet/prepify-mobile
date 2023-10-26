// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJwAmhz_eRn0SnDFkrnLr7dB27et3TjC8",
  authDomain: "prepify-da31a.firebaseapp.com",
  projectId: "prepify-da31a",
  storageBucket: "prepify-da31a.appspot.com",
  messagingSenderId: "936068695489",
  appId: "1:936068695489:web:10ceb2992716eb12231b40",
  measurementId: "G-8TM92PXRJD"
};

// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);
export const firebase_auth = initializeAuth(firebase_app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
// TODO: add analytics to app
// export const analytics = getAnalytics(firebase_app);
// logEvent(analytics, 'test_event')