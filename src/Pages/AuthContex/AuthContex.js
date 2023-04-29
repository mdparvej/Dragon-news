import React, { createContext, useState } from "react";
import app from "../../Firebase/Firebase";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";

export const auth = getAuth(app);
export const myContex = createContext();

const AuthContex = ({ children }) => {
    const [currentUser,setCurrentUser] = useState({})
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const signWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const userInfo = {
    signWithGoogle,
    signWithGithub,
    currentUser,
    setCurrentUser

  };
  return <myContex.Provider value={userInfo}>{children}</myContex.Provider>;
};

export default AuthContex;
