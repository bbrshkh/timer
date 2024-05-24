import React from 'react'
import CounterAction from '../component/CounterAction'
import Count from '../component/Count'

function Counter() {
  return (
    <div className='flex justify-center flex-col items-center m-4 gap-14'>
        
      <h1 className='text-5xl font-bold font-serif mt-10 '>Simple Counter</h1>
      <Count/>
      <CounterAction/>
    </div>
  )
}

export default Counter
