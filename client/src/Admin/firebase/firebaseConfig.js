import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAGHLnMm4uc6J1wAbaWu0LvkvrfuB-ovEg",
    authDomain: "myecommerceweb-a7b22.firebaseapp.com",
    projectId: "myecommerceweb-a7b22",
    storageBucket: "myecommerceweb-a7b22.appspot.com",
    messagingSenderId: "515022056729",
    appId: "1:515022056729:web:08a4c2b5f19de310dfa988",
    measurementId: "G-QENHEBX7HC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
