import React from 'react'

const TaskList = () => {
    return (
        <div>
            {/* TASK DESCRIPTION SECTION */}
            <div id='TaskDescContainer' className='w-71 h-71 flex flex-col p-5 bg-gray-800 rounded-xl mt-3 break-word'>
                <div className='flex justify-between text-xs'>
                    <h3 className='bg-red-500 px-2 py-1 rounded font-medium'>High</h3>
                    <span className='mt-1 font-medium'>22 Dec, 2025</span>
                </div>
                <h2 className='text-xl mt-6 font-bold'>Build ReactJS Project</h2>
                <p className='text-s mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consectetur temporibus facilis magnam aliquid molestiae at doloribus possimus illum amet.</p>
            </div>
        </div>
    )
}
export default TaskList
