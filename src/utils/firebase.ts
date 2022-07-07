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
const analytics = isSupported().then((result) => result ? getAnalytics(app) : undefined)
const appCheck = isSupported().then((result) => result ? initializeAppCheck(app, { provider: new ReCaptchaV3Provider("6LfV8tEgAAAAADL7Cguk4DF6iqLc8oH_c9aH4FRc") }) : undefined)

interface AnalyticsCallback {
    (analytic: Analytics): void
}
const analytic = (callback: AnalyticsCallback) => {
    analytics.then((a) => {
        if (a == undefined) {
            throw "Not support analytics";
        }
        callback(a)
    }).catch((r) => {
        throw r
    })
}

export { analytics, analytic, appCheck }