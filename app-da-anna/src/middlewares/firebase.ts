// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {
    serverTimestamp,
    initializeFirestore,
    persistentLocalCache,
    // PersistentCacheSettings,
  } from 'firebase/firestore';
import { getPerformance } from 'firebase/performance';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDaQgQlZZVsg5EzaMM7Tmbm4ksNh-ChFaI",
  authDomain: "vsco-449d9.firebaseapp.com",
  databaseURL: "https://vsco-449d9-default-rtdb.firebaseio.com/",
  projectId: "vsco-449d9",
  storageBucket: "vsco-449d9.appspot.com",
  messagingSenderId: "19246517125",
  appId: "1:19246517125:web:1c742f338b549e735bd2ec",
  measurementId: "G-KZ0GF0ZM24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = initializeFirestore(app, {
  localCache: persistentLocalCache({
    cacheSizeBytes: 10000000,
  }),
});

export const performance = getPerformance(app);

export const updated_at_timestamp = serverTimestamp();