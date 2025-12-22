import React from 'react'

const RightCard = (props) => {
  return (
    <div className='rounded-4xl'>
      <div className='h-100 w-60 object-cover relative'>
        <img src={props.img} alt="" className='rounded-3xl'/>
      </div>
      <div className='flex flex-row '>
        <div className='p-3 w-10 rounded-4xl justify-center items-center bg-green-300'>
          {props.id + 1 }
        </div>
        <div className='p-3 w-19 rounded-4xl bg-amber-500'>
          {props.title}
        </div>
        <div className='p-4 w-15 rounded-4xl bg-red-600'>
          {props.btn}
        </div>
      </div>


    </div>
  )
}

export default RightCard
