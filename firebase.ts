
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const firebaseConfig = {
  apiKey: "AIzaSyAZMFNA1VvGkg6ci2OB94tSZCTR0kfp0dU",
  authDomain: "vclow-6b60a.firebaseapp.com",
  projectId: "vclow-6b60a",
  storageBucket: "vclow-6b60a.firebasestorage.app",
  messagingSenderId: "384575680152",
  appId: "1:384575680152:web:e844499fdf571c94126aed",
  measurementId: "G-TS4KNTP5XM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
export const db = getFirestore(app);

// Initialize App Check (reCAPTCHA v3)
const recaptchaSiteKey = (import.meta as any).env?.VITE_RECAPTCHA_SITE_KEY || "6Ld_dummy_recaptcha_v3_site_key";

export const appCheck = typeof window !== 'undefined' && recaptchaSiteKey ? initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(recaptchaSiteKey),
  isTokenAutoRefreshEnabled: true
}) : null;

