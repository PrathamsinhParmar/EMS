import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='mt-5'>
      {/* TASK TITLE SECTION */}
            <div className='w-full flex flex-row gap-3 mt-5'>
                <div className=' w-1/4 p-5 bg-orange-500 rounded-2xl px-8 '>
                    <h2 className='text-2xl font-medium'>0</h2>
                    <h3 className='text-xl font-medium'>New Task</h3>
                </div>

                <div className=' w-1/4 p-5 bg-blue-500 rounded-2xl px-8 '>
                    <h2 className='text-2xl font-medium'>0</h2>
                    <h3 className='text-xl font-medium'>New Task</h3>
                </div>

                <div className=' w-1/4 p-5 bg-green-500 rounded-2xl px-8 '>
                    <h2 className='text-2xl font-medium'>0</h2>
                    <h3 className='text-xl font-medium'>New Task</h3>
                </div>

                <div className=' w-1/4 p-5 bg-yellow-500 rounded-2xl px-8 '>
                    <h2 className='text-2xl font-medium'>0</h2>
                    <h3 className='text-xl font-medium'>New Task</h3>
                </div>
               
            </div>
    </div>
  )
}

export default TaskListNumbers
