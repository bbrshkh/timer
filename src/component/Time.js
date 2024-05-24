import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementTimer } from '../redux/timerReducer';

function Time() {
  const {time, isRunning} = useSelector((state)=> state.timerReducer);
  const dispatch = useDispatch();

  useEffect(()=>{
      let interval;
      if(isRunning){
        console.log('object')
        interval = setInterval(()=>{
          dispatch(incrementTimer());
        }, 1000);
      }
      return ()=>{
        clearInterval(interval);
      }
  }, [ isRunning])


  return (
    <div>
      {time}
    </div>
  )
}

export default Time
