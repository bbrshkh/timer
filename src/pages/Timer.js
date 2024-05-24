import React from 'react'
import TimerAction from '../component/TimerAction'
import Time from '../component/Time';
import { useDispatch, useSelector } from 'react-redux';
import { alertSelector, resetMessage } from '../redux/alertReducer';

function Timer() {
  const dispatch = useDispatch();
  const { message } = useSelector(alertSelector);


  return (
    <div className='flex justify-center flex-col items-center m-4 gap-14'>

      {message && <div>
        <h1>{message}</h1>
        </div>}
        
      <h1 className='text-5xl font-bold font-serif mt-10 '>Simple Timer</h1>
      <Time/>
      <TimerAction/>
    </div>
  )
}

export default Timer
