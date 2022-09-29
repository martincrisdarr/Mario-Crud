import { createContext, useContext, useEffect } from "react";
import { auth } from '../firebase/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
const UserContext = createContext()

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState({})
  const createUser = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const signIn = (email,password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logout = () => {
    return signOut(auth)
  }

  useEffect(()=>{
    const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser)
      setUser(currentUser)
    })
    return () => {
      unsuscribe()
    }
  },[])
  return (
    <UserContext.Provider value={{createUser, user, logout, signIn}}>
      {children}
    </UserContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(UserContext)
}