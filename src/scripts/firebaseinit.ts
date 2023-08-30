import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCUkmwt22KfOi75e5X8d1Gj3UoRf6Sb3Ro",
  authDomain: "github-page-wvlab.firebaseapp.com",
  projectId: "github-page-wvlab",
  storageBucket: "github-page-wvlab.appspot.com",
  messagingSenderId: "604635650476",
  appId: "1:604635650476:web:1db0ee720c0f9907f68209",
  databaseURL:
    "https://github-page-wvlab-default-rtdb.europe-west1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
await setPersistence(auth, browserLocalPersistence);
const user = auth.currentUser;
const db = getDatabase(app);

export { app, auth, user, db };
