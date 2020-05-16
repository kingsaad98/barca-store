import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDTesDZ-53fFh2IaLsy4U9loMGKZHn4ghE",
  authDomain: "mystore-576c8.firebaseapp.com",
  databaseURL: "https://mystore-576c8.firebaseio.com",
  projectId: "mystore-576c8",
  storageBucket: "mystore-576c8.appspot.com",
  messagingSenderId: "175082425597",
  appId: "1:175082425597:web:3bf5fde8882859b7610294",
  measurementId: "G-77CP78NTCG",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;