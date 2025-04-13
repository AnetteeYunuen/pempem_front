import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYdJurV5E2Jy-WDZfRjeh_89WZu85g3tE",
  authDomain: "pempem-e10a6.firebaseapp.com",
  projectId: "pempem-e10a6",
  storageBucket: "pempem-e10a6.firebasestorage.app",
  messagingSenderId: "367321962919",
  appId: "1:367321962919:web:ffa8f7503b039e7cb4be82"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db  };