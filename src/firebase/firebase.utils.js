import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//Init firebase app with config
const firebaseConfig = {
  apiKey: "AIzaSyCPc7kJPiQnHluo2LrmMLLibJCwIMWaftU",
  authDomain: "crwn-db-e7c1e.firebaseapp.com",
  projectId: "crwn-db-e7c1e",
  storageBucket: "crwn-db-e7c1e.appspot.com",
  messagingSenderId: "345983777925",
  appId: "1:345983777925:web:01b8dde59d1e8b29263dec",
};
const firebaseApp = initializeApp(firebaseConfig);

//Init auth and db functionalities
export const auth = getAuth(firebaseApp);
auth.useDeviceLanguage();
export const db = getFirestore(firebaseApp);

//Set up Google Sign in
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
//provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
export const signInWithGoogle = () => signInWithPopup(auth, provider);
