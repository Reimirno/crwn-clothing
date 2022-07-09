import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";

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

//Auth-related Wrapper
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const signInWithEmail = async (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
export const createUserEmailAccount = async (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);
export const updateUserProfileName = async (user, displayName) => {
  if (displayName) {
    await updateProfile(user, { displayName: displayName });
    updateUserProfileDocumentField(user, "displayName", displayName);
  } else {
    console.log("no displayname");
  }
};

//Db-related wrapper
export const getUserProfileDocumentSnapshot = async (user) => {
  if (!user) return;
  const userRef = doc(db, "user", `${user.uid}`);
  const userSnap = await getDoc(userRef);
  return userSnap;
};
export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = doc(db, "user", `${user.uid}`);
  const userSnap = await getDoc(userRef);

  try {
    if (!userSnap.exists()) {
      const newUserData = {
        displayName: user.displayName,
        email: user.email,
        creationTime: new Date(),
        additionalData: additionalData ? additionalData : null,
      };
      setDoc(userRef, newUserData);
    }
  } catch (e) {
    console.log(e);
  }
  return userRef;
};
export const updateUserProfileDocumentField = async (user, key, value) => {
  if (!user) return;
  const userRef = doc(db, "user", `${user.uid}`);

  try {
    updateDoc(userRef, { [key]: value });
  } catch (e) {
    console.log(e);
  }
  return userRef;
};
export const onSnapshotChanged = onSnapshot;
