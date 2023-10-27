import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    getAuth
  } from "firebase/auth";
  import {firebase_auth} from "../../firebaseConfig";
  import AsyncStorage from "@react-native-async-storage/async-storage";

  const auth = firebase_auth; 

export const appLogIn = async (email, password) => {
    try {
      const resp = await signInWithEmailAndPassword(auth, email, password);
      // AsyncStorage.setItem('id_token', resp._tokenResponse.idToken)
      const keys = await AsyncStorage.getAllKeys();
      console.log(keys)
      return { user: auth.currentUser };
    } catch (e) {
      return { error: e };
    }
  };

export const appLogOut = async () => {
  const auth = getAuth();
    try {
      await signOut(auth);
      return;
    } catch (e) {
      return { error: e };
    }
  };

  export const appSignUp = async (email, password) => {
    try {
      const resp = await createUserWithEmailAndPassword(auth, email, password);
      return { user: auth.currentUser };
    } catch (e) {
      return { error: e };
    }
  };