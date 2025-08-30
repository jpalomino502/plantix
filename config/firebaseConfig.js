// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJR7QiIZkd3S7CNgnPJcSezwCQNRTHBPo",
  authDomain: "plantix-unab.firebaseapp.com",
  projectId: "plantix-unab",
  storageBucket: "plantix-unab.firebasestorage.app",
  messagingSenderId: "299870960440",
  appId: "1:299870960440:web:a8395c92fa5bfa9a599fcd"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
