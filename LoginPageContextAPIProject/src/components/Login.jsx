import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'




const Login = () => {

  const {username, setUsername, password, setPassword,user, setUser, url, setUrl, email, setEmail} = useContext(UserDataContext)
  // console.log(UserData.username)

  const formHandler = (e)=>{
    e.preventDefault()
    // setUser(prev =>({
    //   ...prev,
    //   username, 
    //   password
    // }))
    // console.log(user)
  }
  

  return (
    <div className='h-110 w-1/2 flex flex-col text-black border-2 rounded-xl p-10 bg-gray-100'>
      <h1 className='text-3xl font-bold text-center m-2'>Login Form</h1>
      <form action="">
        <input className='w-full m-2 p-2 rounded border' type="text" placeholder='Username' value={username}
          onChange={(e)=>{
            setUsername(e.target.value)
          }}
        /><br />
        <input className='w-full m-2 p-2 rounded border' type="email" placeholder='Email' value={email}
           onChange={(e)=>{
            setEmail(e.target.value)
          }}
        /><br />
        <input className='w-full m-2 p-2 rounded border' type="password" placeholder='Password' value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
        /><br />
        <input className='w-full m-2 p-2 rounded border' type="url" placeholder='Profile Photo Url'
          onChange={(e)=>{
            setUrl(e.target.value)
          }}
        />
        <button className='m-2 p-2 rounded-xl border w-20 bg-gray-400 active:bg-gray-300'
          onClick={formHandler}
        >Submit</button>
      </form>
      
    </div>
  )
}

export default Login
