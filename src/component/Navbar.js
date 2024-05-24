import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className='bg-yellow-300 flex pl-6 gap-4 text-lg font-bold h-[60px] items-center'>
      <NavLink className={({ isActive }) =>
              isActive ? "text-blue-700 font-bold" : ""
            } to='/' > Home </NavLink>
      <NavLink className={({isActive})=>isActive? 'text-blue-700 font-bold' : ''} to='/timer'> Timer </NavLink>
      <NavLink className={({isActive})=>isActive? 'text-blue-700 font-bold' : ''} to='/counter'> Counter </NavLink>

    </div>
    <Outlet />
    </>
    
  )
}

export default Navbar
