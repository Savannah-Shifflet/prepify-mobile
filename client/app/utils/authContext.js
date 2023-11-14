import React, { createContext, useEffect, useState, useContext } from "react";
import {firebase_auth} from "../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
// import { useRouter } from "expo-router";


const FirebaseAuthContext = createContext(undefined);

const FirebaseAuthProvider = ({ children }) => {
  // const router = useRouter();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebase_auth, user=>{
        if(user){
            setUser(user);
        }else{
            setUser(null);
            // router.replace('/');
        }
    });
    return unsubscribe;
}, []);

  const value = { user };
  return (
    <FirebaseAuthContext.Provider value={value}>
      {children}
    </FirebaseAuthContext.Provider>
  );
};

function useFirebaseAuth() {
    return useContext(FirebaseAuthContext);
  }

  export { FirebaseAuthProvider, useFirebaseAuth };