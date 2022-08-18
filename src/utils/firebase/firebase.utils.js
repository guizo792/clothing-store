import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtri_ErgKKtSSyV3s9056LL9YchYa7KXg",
  authDomain: "clothing-store-636c7.firebaseapp.com",
  projectId: "clothing-store-636c7",
  storageBucket: "clothing-store-636c7.appspot.com",
  messagingSenderId: "1075373017073",
  appId: "1:1075373017073:web:b0a10deeee63199a8c6650",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  // if user data does not exists, then create/set document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log("error creating the user \n", err.message);
    }
  }
  // if user data exists
  return userDocRef;
};
