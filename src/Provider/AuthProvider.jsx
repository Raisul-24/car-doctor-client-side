import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
   const [user,setUser] = useState(null);
   const [loading,setLoading] = useState(true);

   const createUser = (email,password) =>{
      setLoading(true);
      return createUserWithEmailAndPassword(auth,email,password);
   }
   useEffect(() =>{
      const unsubscribe = onAuthStateChanged(auth,currentUser =>{
         setUser(currentUser);
         // console.log("current User",currentUser);
         setLoading(false);
      });
      return () =>{
         return unsubscribe();
      }
   },[])

   const signIn = (email,password) =>{
      setLoading(true);
      return signInWithEmailAndPassword(auth,email,password);
   }
   const googleSignIn = () =>{
      setLoading(true);
      return signInWithPopup(auth,googleProvider);
   }
   const githubSignIn = () =>{
      setLoading(true);
      return signInWithPopup(auth,githubProvider);
   }
   const twitterSignIn = () =>{
      setLoading(true);
      return signInWithPopup(auth,twitterProvider);
   }
   const logOut = () => {
      return signOut(auth);
   }

   const authInfo = {
      user,
      loading,
      createUser,
      signIn,
      logOut,
      googleSignIn,
      githubSignIn,
      twitterSignIn,
   }
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;