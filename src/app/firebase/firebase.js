import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyCB1gF8RPB2MkMMSq1FBeOw61VOHdoqp7Y",

    authDomain: "astrotalk-3ed3b.firebaseapp.com",

    projectId: "astrotalk-3ed3b",

    storageBucket: "astrotalk-3ed3b.appspot.com",

    messagingSenderId: "871346163694",

    appId: "1:871346163694:web:4bc8bfa2e316529fd508ff",

    measurementId: "G-JZ1Z6JRJ06"

  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
