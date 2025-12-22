import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from './context/AuthProvider'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

const App = () => {

  let [user, setUser] = useState(null)

  const authData = useContext(AuthContext)
  
  useEffect(()=>{
    if(authData){
      const loggedInUser = localStorage.getItem("loggedInUser")
    }
    
  },[])
  


  const loginHandler = (email, password)=>{
    if(email == 'admin@example.com' && password == 123){
      setUser('admin')
    }
    else if(authData && authData.employees.find((e)=>e.email == email && e.password == password)){
      setUser('employee')
    }
    else{
      alert("Invalid Credentials...")
    }
  }

  
  return (
    <div>
      {!user ? <Login loginHandler = {loginHandler}/> : ''}
      {user == 'admin' ? <AdminDashboard /> : ''}
      {user == 'employee' ? <EmployeeDashboard /> : ''}
    </div>
  )
}

export default App
