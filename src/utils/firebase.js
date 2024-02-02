// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBw49K9vEQd2tyt5XSzlJqeIUl2LGqWELQ",
    authDomain: "netflixgpt-by-suvid.firebaseapp.com",
    projectId: "netflixgpt-by-suvid",
    storageBucket: "netflixgpt-by-suvid.appspot.com",
    messagingSenderId: "767685420415",
    appId: "1:767685420415:web:971503ec6ae59e4524664a",
    measurementId: "G-D8YVD8WHYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();