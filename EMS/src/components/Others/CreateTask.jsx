import React, { useState } from 'react'

const CreateTask = () => {


    let [title, setTitle] = useState('')
    let [date, setDate] = useState('')
    let [assign, setAssign] = useState('')
    let [category, setCategory] = useState('')
    let [description, setDescription] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        // console.log("Form Data : ",title,date,assign,category,description)
        setTitle('')
        setDate('')
        setAssign('')
        setCategory('')
        setDescription('')
    }

    return (
        <div>
            {/* TASK FORM SECTION */}
            <div>
                <div className='w-full bg-gray-800 p-5 rounded-xl'>
                    <form  id="form" action="" className='w-full flex flex-row  justify-between'
                        onSubmit={submitHandler}
                    >
                        <div>
                            <div className='flex flex-col mb-4'>
                                <label className='text-xs  mb-1' htmlFor="" id='title'>Task Title</label>
                                <input id='inputTitle' value={title} className='w-100 px-2 py-1 rounded outline border-white text-s' type="text" placeholder='Make a UI Design' 
                                    onChange={(e)=>{
                                        setTitle(e.target.value)
                                    }}
                                />
                            </div>

                            <div className='flex flex-col mb-4'>
                                <label className='text-xs mb-1' htmlFor="" id='date'>Date</label>
                                <input value={date} className='w-full px-2 py-1 rounded outline border-white text-s' type="date" placeholder='DD/MM/YYYY' 
                                    onChange={(e)=>{
                                        setDate(e.target.value)
                                    }}
                                />
                            </div>

                            <div className='flex flex-col mb-4'>
                                <label className='text-xs  mb-1' htmlFor="" id='assignto'>Assign To</label>
                                <input value={assign} className='w-full px-2 py-1 rounded outline border-white text-s' type="text" placeholder='Employee Name' 
                                    onChange={(e)=>{
                                        setAssign(e.target.value)
                                    }}
                                />
                            </div>

                            <div className='flex flex-col mb-4'>
                                <label className='text-xs mb-1' htmlFor="" id='category'>Category</label>
                                <input value={category} className='w-full px-2 py-1 rounded outline border-white text-s' type="text" placeholder='Design, Development, Management etc' 
                                    onChange={(e)=>{
                                        setCategory(e.target.value)
                                    }}
                                />
                            </div>

                        </div>

                        <div>
                            <div className='flex flex-col mb-4'>
                                <label className='text-xs mb-1' htmlFor="" id='description'>Description</label>
                                <textarea id='inputDesc' value={description} name="description" className='w-100 h-50 border rounded px-4 py-2' placeholder='Task Description'
                                    onChange={(e)=>{
                                        setDescription(e.target.value)
                                    }}
                                ></textarea>
                            </div>
                            <button className='w-full text-center font-medium text-xs bg-cyan-400 py-2 rounded text-black active:bg-cyan-300'>Create Task</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    )
}

export default CreateTask
