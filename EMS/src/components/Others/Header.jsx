import React from 'react'

const Header = () => {
  return (
    <div>
       {/* HEADER SECTION */}
            <div className='flex justify-between text-white py-5'>
                <h1 >
                    <span id='helloSlogan' className='text-2xl font-medium'>Hello</span>
                    <br />
                 <span id='helloSlogan' className='text-3xl font-bold'>Pratham 👋</span>
                </h1>
                <button className='flex bg-orange-600 h-8 px-3 rounded items-center justify-center text-xs active:bg-orange-500 my-3 font-bold'>Log Out</button>
            </div>
    </div>
  )
}
export default Header
