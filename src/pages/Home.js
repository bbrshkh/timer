import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className='h-[400px] bg-black items-center justify-center flex gap-[80px] font-bold'>

      <NavLink className='p-7 bg-yellow-300 rounded-xl hover:bg-yellow-400' to='/timer'>Timer</NavLink>
      <NavLink className='p-7 bg-yellow-300 rounded-xl hover:bg-yellow-400' to='/counter'>Counter</NavLink>

    </div>
  )
}

export default Home
