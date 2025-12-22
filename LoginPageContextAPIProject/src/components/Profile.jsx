import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'

const Profile = () => {

  const {username, url} = useContext(UserDataContext)

  return (
    <div className='flex flex-col items-center'>
     
      <div className='object-cover h-80 w-80 rounded-full overflow-hidden ml-35 mt-5'>
        <img src={url} alt="Photo" />
      </div>
      <h1 className='text-4xl font-bold text-center ml-35 mt-10'>Welcome {username}</h1>
    </div>
  )
}

export default Profile
