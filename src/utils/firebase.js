import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Password } from "@mui/icons-material";
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
export const SignUpWithEmailAndPassword = async (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const SignInAuthWithEmailAndPassword = async (email, password) => {
return await signInWithEmailAndPassword(auth, email, password);
};

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

};

