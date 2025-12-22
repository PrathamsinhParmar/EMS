import React from 'react'
import Section1 from './componants/Section1/Section1'
import Section2 from './componants/Section2/Section2'

const App = () => {

  const users = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Stricker",
      btn:"Go"
    },
    {
      img: "https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?q=80&w=759&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Flexible",
      btn:"Yo"
    },
    {
      img: "https://images.unsplash.com/photo-1717068341198-95cce0b54b26?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Gundo",
      btn:"Ro"
    },
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Stricker",
      btn:"Go"
    },
    {
      img: "https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?q=80&w=759&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Flexible",
      btn:"Yo"
    },
    {
      img: "https://images.unsplash.com/photo-1717068341198-95cce0b54b26?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Gundo",
      btn:"Ro"
    },
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Stricker",
      btn:"Go"
    },
    {
      img: "https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?q=80&w=759&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Flexible",
      btn:"Yo"
    },
    {
      img: "https://images.unsplash.com/photo-1717068341198-95cce0b54b26?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Gundo",
      btn:"Ro"
    },
    
    
  ]
  return (
    <div className='h-full w-100%'>
      <Section1 users={users} />
      <Section2/>
    </div>
    
  )
}

export default App
