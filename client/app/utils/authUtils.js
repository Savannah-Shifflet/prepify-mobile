import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
  import { firebase_auth } from "../../firebaseConfig";


export const appLogIn = async (email, password) => {
    try {
      const resp = await signInWithEmailAndPassword(firebase_auth, email, password);
      return { user: firebase_auth.currentUser };
    } catch (e) {
      return { error: e };
    }
  };

export const appLogOut = async () => {
    try {
      await signOut(firebase_auth);
      return { user: firebase_auth.currentUser };
    } catch (e) {
      return { error: e };
    }
  };

  export const appSignUp = async (email, password) => {
    try {
      const resp = await createUserWithEmailAndPassword(firebase_auth, email, password);
      return { user: firebase_auth.currentUser };
    } catch (e) {
      return { error: e };
    }
  };