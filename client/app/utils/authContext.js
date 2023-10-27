import React, { createContext, useEffect, useState, useContext } from "react";
import {firebase_auth} from "../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";


const FirebaseAuthContext = createContext(undefined);

const FirebaseAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebase_auth, user=>{
        if(user){
            setUser(user);
        }else{
            setUser(null);
        }
    });
    console.log(unsubscribe)
    return unsubscribe;
}, []);

  const value = { user, logOutTest };
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