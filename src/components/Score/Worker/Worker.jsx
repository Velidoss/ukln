import { Button, Chip, TableCell, TableRow } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWorker } from '../../../store/workersSlice/workersSlice';
import style from '../ScoreStyles';

const Worker = ({index, workerData}) => {

  const dispatch = useDispatch();
  const classes = style();
  const deleteWorker = () => {
    dispatch(removeWorker(workerData.workerName));
  };

  return (
    <TableRow key={workerData.workerName}>
      <TableCell>
        {workerData.workerName}
        {
          index === 0 && <Chip className={classes.winnerShip} label="winner" color="primary" />
        }
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