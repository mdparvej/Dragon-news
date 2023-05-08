import React, { createContext, useEffect, useState } from "react";
import app from "../../Firebase/Firebase";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const auth = getAuth(app);
export const myContex = createContext();

const AuthContex = ({ children }) => {
    const [currentUser,setCurrentUser] = useState({})
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [loading,setLoading] = useState(true);

  const signWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const signWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth)
  };

  const createUser = (email,password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
  }

  const signIn = (email,password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser,profile);
  }
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  }

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (newUser) => {
      if(currentUser === null || currentUser.emailVerified){
        setCurrentUser(newUser);
        console.log(currentUser,'this auth contest');
      }
      setLoading(false)
    });
    return () => {
      unsubcribe();
    }
  },[])
  const userInfo = {
    signWithGoogle,
    signWithGithub,
    currentUser,
    setCurrentUser,
    logOut,
    createUser,
    signIn,
    loading,
    updateUserProfile,
    verifyEmail,
    setLoading
  };
  return <myContex.Provider value={userInfo}>{children}</myContex.Provider>;
};

export default AuthContex;
