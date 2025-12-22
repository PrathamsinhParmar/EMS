import React from 'react'
import Login from './Login'
import Profile from './Profile'

const Hero = () => {
    
  return (
    <div className='h-screen w-full flex flex-row p-20'>
      <Login />
      <Profile />
    </div>
  )
}

export default Hero
