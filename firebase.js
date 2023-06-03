import firebase from 'firebase/app';
import 'firebase/auth';
import { initializeApp, getApps } from "firebase/app"
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYUiqTHP5tptSAehNAvS1xnpEJ5RPc1jc",
  authDomain: "cooksnap-a9b8e.firebaseapp.com",
  projectId: "cooksnap-a9b8e",
  storageBucket: "cooksnap-a9b8e.appspot.com",
  messagingSenderId: "852971397403",
  appId: "1:852971397403:web:943dc8edd36c9de2faf3be"
};

let app;

if (!getApps().length) {
    app = initializeApp(firebaseConfig);
}
const auth = getAuth(app)

export { auth }
