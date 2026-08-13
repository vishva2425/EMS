import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='bg-neutral-400 h-screen w-60 p-6 fixed font-serif '>
        <h2 className='font-bold text-lg mt-5 mb-5'>Akshy Technologies</h2>
          <nav>
            <div className=' mt-7 font-semibold hover '>
            <Link to='/'>Dashboard</Link>
            </div>
            <div className=' mt-7 font-semibold'>
            <Link to="/employeedetails">Employee Details</Link>
            </div>
            <div className=' mt-7 font-semibold'>
            <Link to='/employeelist'>Employee List</Link>
            </div>
          </nav>
      </div>
      
    </>
  )
}

export default Navbar
