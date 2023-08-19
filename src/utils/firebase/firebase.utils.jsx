import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCLnszhl7GIngdscW1_2BD_nBGVT-h1NY4",
  authDomain: "crnw-clothings.firebaseapp.com",
  projectId: "crnw-clothings",
  storageBucket: "crnw-clothings.appspot.com",
  messagingSenderId: "669701711462",
  appId: "1:669701711462:web:0bd648a1fdd3f83252efa7"
};

const firebasApp = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore()

export const createUserDocumentFromAuth = async(userAuth) => {
  if (!userAuth) return
  // see if there is an existing document reference
  const userDocRef = doc(db, 'users', userAuth.uid)


const userSnapshot = await getDoc(userDocRef)
console.log(userSnapshot);
console.log(userSnapshot.exists())

if (!userSnapshot.exists()){
  const { displayName, email } = userAuth;
  const createdAt = new Data();

  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt
    });
  } catch (error) {
    console.log('Error creating the user', error.message);
  }
}

return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async() => {
  if (!email || !password) return;

  return createUserWithEmailAndPassword(auth, email, password)
}
export default firebasApp;