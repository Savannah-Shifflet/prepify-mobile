import React, { createContext, useEffect, useState, useContext } from "react";
import { onAuthStateChanged } from 'firebase/auth'
import { firebase_auth } from "../../firebaseConfig";


const FirebaseAuthContext = createContext(undefined);

const FirebaseAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const value = { user };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebase_auth, user=>{
        console.log('got user: ', user);
        if(user){
            setUser(user);
        }else{
            setUser(null);
        }
    });
    return unsubscribe;
  }, []);

  return (
    <FirebaseAuthContext.Provider value={value}>
      {children}
    </FirebaseAuthContext.Provider>
  );
};

function useFirebaseAuth() {
    const context = useContext(FirebaseAuthContext);
    if (context === undefined) {
      throw new Error(
        "useFirebaseAuth must be used within a FirebaseAuthProvider"
      );
    }
    return context.user;
  }

  export { FirebaseAuthProvider, useFirebaseAuth };