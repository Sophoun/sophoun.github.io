// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Analytics, getAnalytics, isSupported } from "firebase/analytics";
import { initializeAppCheck, getToken, ReCaptchaV3Provider } from 'firebase/app-check';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzveiaBNmYa8n1pGYZCFirWip1gdpKwok",
    authDomain: "sophoun-project.firebaseapp.com",
    projectId: "sophoun-project",
    storageBucket: "sophoun-project.appspot.com",
    messagingSenderId: "457109583638",
    appId: "1:457109583638:web:0fd680d5a31a6c728c0237",
    measurementId: "G-9LWDE07TL5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var analytics: Analytics
if (typeof window != undefined) {
    analytics = getAnalytics(app)
}
const appCheck = initializeAppCheck(app, { provider: new ReCaptchaV3Provider("6LfV8tEgAAAAADL7Cguk4DF6iqLc8oH_c9aH4FRc") })

export { analytics, appCheck }