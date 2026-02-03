// firebase/config.ts (client-side)
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTa6woNcq5-2_q3wxGnh-1E3qKLweQ_Vw",
  authDomain: "main-95932.firebaseapp.com",
  projectId: "main-95932",
  storageBucket: "main-95932.appspot.com",
  messagingSenderId: "248989027243",
  appId: "1:248989027243:web:c82ded408672869e9220ee",
  measurementId: "G-FYNYHYNMCW",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Analytics (optional)
let analytics: any;
if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) analytics = getAnalytics(app);
  });
}

// Export Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export { analytics };
export default app;
