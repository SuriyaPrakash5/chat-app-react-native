import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD3vAZOSL_lX5_9_KAyj8UfDLKutUvymkM",
  authDomain: "psapp-afaf4.firebaseapp.com",
  projectId: "psapp-afaf4",
  storageBucket: "psapp-afaf4.appspot.com",
  messagingSenderId: "96702345291",
  appId: "1:96702345291:web:582e1b8392f0820aa2ddce",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const database = getFirestore();
