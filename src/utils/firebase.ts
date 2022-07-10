// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Analytics, getAnalytics, isSupported } from "firebase/analytics";
import { initializeAppCheck, getToken, ReCaptchaV3Provider } from 'firebase/app-check';
import app from "gatsby-plugin-firebase-v9.0";

const checkAnalyticsSupport = isSupported().then((result) => result ? getAnalytics(app) : undefined)
const checkAppCheckSupport = isSupported().then((result) => result ? initializeAppCheck(app, { provider: new ReCaptchaV3Provider("6LfV8tEgAAAAADL7Cguk4DF6iqLc8oH_c9aH4FRc") }) : undefined)

interface AnalyticsCallback {
    (analytic: Analytics): void
}
const useAnalytics = (callback: AnalyticsCallback) => {
    checkAnalyticsSupport.then((analytics) => {
        if (analytics == undefined) {
            console.log("Not support analytics");
            return;
        }
        callback(analytics)
    }).catch((r) => {
        throw r
    })
}

export { useAnalytics, checkAppCheckSupport }