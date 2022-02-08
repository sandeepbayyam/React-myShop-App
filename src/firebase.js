
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArXqH5RFrYToXHiIWE7FUfUxSpmdm3nEo",
  authDomain: "myshopapp-91777.firebaseapp.com",
  projectId: "myshopapp-91777",
  storageBucket: "myshopapp-91777.appspot.com",
  messagingSenderId: "394547891955",
  appId: "1:394547891955:web:52c8bdef694307c32a7186",
  measurementId: "G-2K95BQK389"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;