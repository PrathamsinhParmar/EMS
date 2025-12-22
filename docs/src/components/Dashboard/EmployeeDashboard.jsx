import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'


const EmployeeDashboard = () => {
    return (
        <div className='h-screen w-full px-10 py-5'>
            <Header />
            <TaskListNumbers />
            <div id='TaskListContainer' className='flex flex-row gap-4 overflow-x-auto mt-10'>
                <TaskList />
                <TaskList />
                <TaskList />
                <TaskList />
                <TaskList />
                <TaskList />
                <TaskList />
                <TaskList />
            </div>
            
        </div>
    )
}

export default EmployeeDashboard
