import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React from 'react';
import useAppSelector from './../../store/hooks/useAppSelector';
import { workersSelector } from './../../store/selectors';
import Worker from './Worker/Worker';

const Score = () => {

  const workers = useAppSelector(workersSelector);

  return (
    <TableContainer component={Paper} >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Worker name
            </TableCell>
            <TableCell>
              Work hours
            </TableCell>
            <TableCell>
              Worker score
            </TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {
            workers.map((worker) => (
              <Worker key={worker.workerName} workerData={worker} />
            ))
          }
        </TableBody>
      </Table>
    </TableContainer >
  )
};

export default Score;