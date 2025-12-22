import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='h-full w-2/3'>
      <div id='right' className='w-full h-full flex flex-row gap-5 overflow-x-auto'>
          {props.users.map(function(element, idx){
            return <RightCard key={idx} id={idx} img={element.img} title={element.title} btn={element.btn}/>
          })}
      </div>
    </div>
  )
}

export default RightContent
