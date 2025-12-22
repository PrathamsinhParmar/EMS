import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTasks from '../Others/AllTasks'

const AdminDashboard = () => {
    return (
        <div className='h-screen w-full px-10 py-2'>
            <Header />
            <CreateTask />
            <AllTasks />
        </div>
    )
}

export default AdminDashboard
