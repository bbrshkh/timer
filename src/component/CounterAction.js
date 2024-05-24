import React from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { MdOutlineReplay } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { incrementCounter, decrementCounter, resetCounter } from '../redux/counterReducer'
function CounterAction() {
  const dispatch = useDispatch();
  const { count } = useSelector( (state)=> state.counterReducer)
  return (
    <div className='flex gap-10 bg-yellow-300 text-yellow-300 p-4 rounded-xl text-3xl '>
        
        <button 
          className='border-2 border-white p-4 rounded-full bg-black hover:text-yellow-400'
          onClick={()=> dispatch(incrementCounter())}>
            <FaPlus />
        </button>

        <button 
          disabled={ count == 0}
          className='border-2 border-white p-4 rounded-full bg-black disabled:bg-yellow-200 hover:text-yellow-400'
          onClick={()=> dispatch(decrementCounter())} >
            <FaMinus />
        </button>

        <button 
          disabled={ count == 0}
          className='border-2 border-white p-4 rounded-full bg-black disabled:bg-yellow-200 hover:text-yellow-400'
          onClick={()=> dispatch(resetCounter())}>
            <MdOutlineReplay />
        </button>
      
    </div>
  )
}

export default CounterAction
