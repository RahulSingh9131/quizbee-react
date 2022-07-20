import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBiJNGdSQMU9MrWelAw7p67Cw9TEJWkq1M",
    authDomain: "quizbee-react.firebaseapp.com",
    projectId: "quizbee-react",
    storageBucket: "quizbee-react.appspot.com",
    messagingSenderId: "412754343594",
    appId: "1:412754343594:web:01c101e66fe84a0131c2d3"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };