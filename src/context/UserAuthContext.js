import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(name,email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
    .then(()=>{
      return updateProfile(auth.currentUser,{
        displayName:name,
      });
    }).then((res)=>console.log(res)).catch(err=>console.log(err.msg))

  }
  function logOut() {
    return signOut(auth)
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, googleSignIn }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}