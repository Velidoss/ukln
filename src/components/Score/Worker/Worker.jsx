import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWorker } from '../../../store/workersSlice/workersSlice';

const Worker = ({workerData}) => {
  console.log(workerData)
  const dispatch = useDispatch();

  const deleteWorker = () => {
    dispatch(removeWorker(workerData.workerName));
  };

  return (
    <tr key={workerData.workerName}>
      <td>
        {workerData.workerName}
      </td>
      <td>
        {workerData.workHours}
      </td>
      <td>
        {workerData.score}
      </td>
      <td>
        <button onClick={deleteWorker}>delete</button>
      </td>
    </tr>
  )
};

export default Worker;