import React from 'react'
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { MdOutlineReplay } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { startTimer, pauseTimer, resetTimer } from '../redux/timerReducer';
import { useSelector } from 'react-redux';

function TimerAction() {
    const dispatch = useDispatch();
    const { time, isRunning} = useSelector((state)=> state.timerReducer)

  return (
    <div className='flex gap-10 bg-yellow-300 text-yellow-300 p-4 rounded-xl text-3xl '>
        
        <button 
            disabled = {isRunning}
            className='border-2 border-white p-4 rounded-full bg-black disabled:bg-yellow-200 hover:text-yellow-400'
            onClick={()=>dispatch(startTimer())}>
            <FaPlay />
        </button>

        <button 
            disabled = {!isRunning}
            className='border-2 border-white p-4 rounded-full bg-black disabled:bg-yellow-200 hover:text-yellow-400'
            onClick={()=>dispatch(pauseTimer())} >
            <FaPause/>
        </button>

        <button 
            disabled = {time === 0 && !isRunning}
            className='border-2 border-white p-4 rounded-full bg-black disabled:bg-yellow-200 hover:text-yellow-400'
            onClick={()=>dispatch(resetTimer())}>
            <MdOutlineReplay/>
        </button>
      
    </div>
  )
}

export default TimerAction
