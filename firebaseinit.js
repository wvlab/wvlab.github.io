import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
	getAuth,
	createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

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
const user = auth.currentUser;
const db = getDatabase(app);
