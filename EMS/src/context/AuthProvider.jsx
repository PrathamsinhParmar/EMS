import React, { createContext, useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    let [userData, setUserData] = useState(null)

    const {employees, admin} = getLocalStorage()
    console.log(employees)
    console.log(admin)
    
  return (
    <div>
        <AuthContext.Provider value={{employees,admin}}>
            {children}
        </AuthContext.Provider>
      
    </div>
  )
}

export default AuthProvider
