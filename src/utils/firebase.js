<<<<<<< HEAD
import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAXLmDqK5nmabn9Cn_O_Q2wwpm8BS9XRm0",
  authDomain: "fb-clone-58d5f.firebaseapp.com",
  projectId: "fb-clone-58d5f",
  storageBucket: "fb-clone-58d5f.appspot.com",
  messagingSenderId: "1048025636129",
  appId: "1:1048025636129:web:913a6adc46a0ff36c8f260",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

// Initialize Firebase

const auth = new getAuth();
const provider = new GoogleAuthProvider();

export const popup = () => signInWithPopup(auth, provider);

provider.setCustomParameters({
  prompt: "select_account",
});

export const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error); // Log the error to the console
    }
  }

  return userDocRef;
=======
import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAXLmDqK5nmabn9Cn_O_Q2wwpm8BS9XRm0",
  authDomain: "fb-clone-58d5f.firebaseapp.com",
  projectId: "fb-clone-58d5f",
  storageBucket: "fb-clone-58d5f.appspot.com",
  messagingSenderId: "1048025636129",
  appId: "1:1048025636129:web:913a6adc46a0ff36c8f260",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

// Initialize Firebase

const auth = new getAuth();
const provider = new GoogleAuthProvider();

export const popup = () => signInWithPopup(auth, provider);

provider.setCustomParameters({
  prompt: "select_account",
});

export const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error); // Log the error to the console
    }
  }

  return userDocRef;
>>>>>>> dbb312af7a7cf09d9cb13326355f28a6853049fa
};