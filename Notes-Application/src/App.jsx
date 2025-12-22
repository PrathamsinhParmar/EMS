import React, { useState } from 'react'

const App = () => {

  const deleteNote = (idx)=>{
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  let [title, setTitle] = useState('')
  let [details, setDetails] = useState('')
  let [task, setTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    // console.log("Title : ",title)
    // console.log("Note : ",details)

    // MAIN LOGIC OF NOTES APPLICATION
    let copyTask = [...task]
    copyTask.push({title, details})
    setTask(copyTask)
    console.log(task)

    setTitle('')
    setDetails('')
  }

  return (
    <div className='w-full lg:flex flex-row h-150 bg-black'>
      <div className='w-full h-full bg-black p-10'>
          <h1 className='my-3 items-center text-start'>Notes Application</h1>
          <form action="" className='flex flex-col border outline-none p-5 rounded-xl w-150' onSubmit={(elem)=>{
                submitHandler(elem)
                }}>
          
          <input className='px-5 py-2 font-medium border outline-none rounded-xl gap-5 my-2' type="text"         placeholder='Title' value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
          />

          <textarea className='px-5 py-2 font-medium border outline-none rounded-xl gap-5 my-2  h-40' name="" id="" placeholder='Type Something' value={details}
              onChange={(e)=>{
                setDetails(e.target.value)
              }}
          ></textarea>
          <button id='addNote' className='outline-none border-none active:bg-gray-400'>Add Notes</button>
        </form>
      </div> 

      <div className='w-full h-full p-10 mx-5  bg-black'>
            <h1 className=' mb-2'>Your Notes</h1>
            <div id="scroll" className='flex flex-row gap-5 flex-wrap items-start justify-start h-[90%] overflow-x-auto w-full bg-black'>
                {task.map((elem, idx)=>{
                  return <div key={idx} className='h-60 w-50 rounded-xl bg-white text-black px-4 py-2 flex flex-col justify-between break-all'>
                    <div>
                        <h3 className='font-medium text-2xl bold leading-tight overflow-hidden'>{elem.title}</h3>
                        <p className='font-medium leading-tight mt-2 text-gray-600'>{elem.details}</p>
                    </div>
                    <button className=' p-3 text-white items-center border-0 active:scale-95 outline-none' onClick={()=>{
                      deleteNote(idx)
                    }}>Delete</button>
                  </div>
                })}
               

            </div>
            
      </div>
    </div>
  )
}

export default App
