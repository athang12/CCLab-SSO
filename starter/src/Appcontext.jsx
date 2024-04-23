import React, { createContext, useContext, useState } from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from './auth'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [value, setValue] = useState('')
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email)
      localStorage.setItem('email', data.user.email)
    })
  }
  const handleLogout = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <AppContext.Provider value={{ value, setValue, handleClick, handleLogout }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
