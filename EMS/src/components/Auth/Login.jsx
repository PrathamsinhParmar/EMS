import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'


const Login = ({loginHandler}) => {
  

  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  const submitHandler = (elem) => {
    elem.preventDefault()
    loginHandler(email, password)
    // console.log("Email : ", email)
    // console.log("Password : ", password)
    // console.log("Form Submitted...")
    setEmail('')
    setPassword('')
  }


  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div id='LoginContainer' className='h-120 w-100 text-white flex flex-col justify-between items-center bg-gray-800 py-10 rounded-2xl'>
        <h1 className='text-3xl font-bold '>Log In</h1>
        <form action="" className='m-5'
          onSubmit={submitHandler}>
          <input value={email} type="email" placeholder='Email' className='w-full rounded-xl px-3 py-2 mt-3 border-orange-600 border focus:border-0 focus:ring outline-orange-600 bg-transparent'
            onChange={(elem) => {
              setEmail(elem.target.value)
            }}
          />
          <div>
            <input value={password} type="password" placeholder='Password' className='w-full rounded-xl px-3 py-2 mt-4  border-orange-600 relative border focus:border-0 focus:ring outline-orange-600 bg-transparent'
              onChange={(elem) => {
                setPassword(elem.target.value)
              }}
            />
          </div>
          <div className='flex justify-between mt-4 px-2'>
            <label className="flex items-start gap-1 text-gray-300 cursor-pointer text-xs">
              <input
                type="checkbox"
                className="w-3 h-3 orange-600"
              />
              Remember me
            </label>
            <button className='text-xs text-orange-600 active:text-white'>Forgot Password</button>
          </div>
          <div className='flex justify-center mt-10'>
            <button id='loginBtn' className='text-lg font-medium bg-orange-600 items-center px-37 py-1 rounded-xl active:bg-orange-700'

            >Log In</button>
          </div>

        </form>
      </div>
    </div>

  )
}

export default Login
