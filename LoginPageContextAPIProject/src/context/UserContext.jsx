import React, { createContext, useState } from 'react'

export const UserDataContext = createContext()



const UserContext = (props) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [url, setUrl] = useState('')

  const {user, setUser} = useState({
    username : "",
    password : ""
  })

  return (
    <div >
      <UserDataContext.Provider value={{username, password, setUsername, setPassword, user, setUser, email, setEmail, url, setUrl}}>
          {props.children}
      </UserDataContext.Provider>
      
    </div>
  )
}

export default UserContext
