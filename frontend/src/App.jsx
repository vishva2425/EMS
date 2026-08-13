import { useState } from 'react'
import Navbar from './components/Navbar'
import EmployeeDetails from './pages/EmployeeDetails'
import EmployeeList from './pages/EmployeeList'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'


function App() {

  return (
    <div className='flex'>
      <Navbar />
        <main className='p-8'>
            <Routes>
              <Route path='/' element={<Dashboard/>} />
              <Route path='/employeedetails' element={<EmployeeDetails/>} />
              <Route path='/employeelist' element={<EmployeeList/>} />
            </Routes>
        </main>
    </div>
  )
}

export default App
