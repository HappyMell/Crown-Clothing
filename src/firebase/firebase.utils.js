import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBryGrXEe51hwDDB0_YQNhPBLm04S8ZEb0",
  authDomain: "crown-db-cf562.firebaseapp.com",
  databaseURL: "https://crown-db-cf562.firebaseio.com",
  projectId: "crown-db-cf562",
  storageBucket: "crown-db-cf562.appspot.com",
  messagingSenderId: "444672241210",
  appId: "1:444672241210:web:0a49374a5b06d24fb94f03",
  measurementId: "G-GPXD8KNJ8M",
};

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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
