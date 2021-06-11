import { Button, TableCell, TableRow } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWorker } from '../../../store/workersSlice/workersSlice';

const Worker = ({workerData}) => {

  const dispatch = useDispatch();

  const deleteWorker = () => {
    dispatch(removeWorker(workerData.workerName));
  };

  return (
    <TableRow key={workerData.workerName}>
      <TableCell>
        {workerData.workerName}
      </TableCell>
      <TableCell>
        {workerData.workHours}
      </TableCell>
      <TableCell>
        {workerData.score}
      </TableCell>
      <TableCell>
        <Button 
          variant="outlined"
          onClick={deleteWorker}
          color="secondary"
        >
          delete
        </Button>
      </TableCell>
    </TableRow>
  )
};

export default Worker;