import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='h-[90vh] flex px-7 py-10 justify-between items-center gap-5'>
      <LeftContent />
      <RightContent users = {props.users}/>
    </div>
  )
}

export default Page1Content
