import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addWorker} from '../../store/workersSlice/workersSlice';

const Input = () => {

  const [workerName, setWorkerName] = useState('');
  const [workHours, setWorkHours] = useState('');
  const dispatch = useDispatch();
  
  const changeWorkerName = (event) => {
    setWorkerName(event.target.value);
  };
  const changeWorkHours = (event) => {
    setWorkHours(event.target.value);
  };


  const addItem = (event) => {
    event.preventDefault();
    console.log(workerName, workHours);
    dispatch(addWorker({workerName, workHours}));
  }

  return (
    <div>
      <form onSubmit={addItem}>
        <label>Worker Name</label>
        <input type="text" value={workerName} onChange={changeWorkerName} />
        <label>Worker hours</label>
        <input type="text" value={workHours} onChange={changeWorkHours} />
        <button type="submit">Add</button>
      </form>
    </div>
  )
};

export default Input;