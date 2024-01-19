import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyACIRZYkQsDf6PRRkdHfKcv5oc-1TMckzA",
    authDomain: "shop2door-fd46c.firebaseapp.com",
    databaseURL: "https://shop2door-fd46c-default-rtdb.firebaseio.com",
    projectId: "shop2door-fd46c",
    storageBucket: "shop2door-fd46c.appspot.com",
    messagingSenderId: "1015485178687",
    appId: "1:1015485178687:web:31418dfb3281d2cadf298a"
  };

const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage};
