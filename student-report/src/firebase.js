import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebase = {
    apiKey: "AIzaSyAhVBnjMnwF1g5y0tKwjTZ2YP9ovhJMsfM",
    authDomain: "student-report-react-513b7.firebaseapp.com",
    projectId: "student-report-react-513b7",
    storageBucket: "student-report-react-513b7.appspot.com",
    messagingSenderId: "355222827858",
    appId: "1:355222827858:web:b92f0b34a066c46735408b"
};

const app = initializeApp(firebase);
const db = getFirestore(app);

export default db;