import firebase from "firebase";
import "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCYS3oILrpfL9y9sO9b53O83l8G1BZjfwY",
    authDomain: "facebook-next-tail.firebaseapp.com",
    projectId: "facebook-next-tail",
    storageBucket: "facebook-next-tail.appspot.com",
    messagingSenderId: "722448129108",
    appId: "1:722448129108:web:610b8abb4151a6d6efa1c1",
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
