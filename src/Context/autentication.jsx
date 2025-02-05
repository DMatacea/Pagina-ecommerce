import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [signUpButton, setSignUpButton] = useState(false)
  const [errorOfUser, setErrorOfUser] = useState(null)
  const [hasUsers, setHasUsers] = useState(false)
  const [userVerify, setUserVerify] = useState({})

  const checkForUsers = () => {
    const keys = Object.keys(localStorage)
    return keys.length > 0
  }

  useEffect(() => {
    const hasUser = checkForUsers()
    setHasUsers(hasUser)
  }, [])

  // const loginSession = (username, password) => {
  //   if (username === 'admin' && password === '1234') {
  //     const userData = { username, token: 'fake-token' }
  //     setUser(userData)
  //     localStorage.setItem('user', JSON.stringify(userData))
  //     setErrorOfUser(null)
  //   } else {
  //     setErrorOfUser('Usuario o contraseña incorrectos')
  //   }
  // }

  // const logoutSession = () => {
  //   setUser(null)
  //   localStorage.removeItem('user')
  // };

  return (
    <AuthContext.Provider
      value={{
        user,
        errorOfUser,
        setErrorOfUser,
        // loginSession,
        // logoutSession,
        signUpButton,
        setSignUpButton,
        userVerify,
        setUserVerify,
        hasUsers,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}