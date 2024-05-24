import React from 'react';
import { useSelector } from 'react-redux';
import { UseDispatch } from 'react-redux';

function Count() {
  const { count } = useSelector((state) => state.counterReducer);
  return (
    <div>
      { count }
    </div>
  )
}

export default Count
