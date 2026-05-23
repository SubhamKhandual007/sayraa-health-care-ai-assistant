import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

let app = null;
let auth = null;
let provider = null;
let db = null;
let analytics = null;
let initialized = false;

const firebaseConfig = {
    apiKey: "AIzaSyBbvGRqi1qTUAIGsy6XhX4avY3jsF_23wE",
    authDomain: "suusri-56c82.firebaseapp.com",
    projectId: "suusri-56c82",
    storageBucket: "suusri-56c82.firebasestorage.app",
    messagingSenderId: "176648937808",
    appId: "1:176648937808:web:1c497d5aa509fac5fe4c55",
    measurementId: "G-R0X3KPK5E3"
};

export function getFirebase() {
    if (initialized && app) return { app, auth, provider, db, analytics };

    try {
        app = initializeApp(firebaseConfig);
        auth = getAuth(app);
        provider = new GoogleAuthProvider();
        db = getFirestore(app);
        initialized = true;
        
        // Add additional Google provider settings
        provider.setCustomParameters({
            prompt: 'select_account'
        });

        // Set auth language
        auth.languageCode = 'en';

        console.log("Firebase initialized successfully");
        return { app, auth, provider, db, analytics };
    } catch (error) {
        console.error("Failed to initialize Firebase:", error);
        throw error;
    }
}
