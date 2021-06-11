import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import React from 'react';
import useAppSelector from './../../store/hooks/useAppSelector';
import { workersSelector } from './../../store/selectors';
import Worker from './Worker/Worker';
import style from './ScoreStyles';

const Score = () => {

  const workers = useAppSelector(workersSelector);
  const classes = style();

  return (
    <TableContainer className={classes.scoreTable} component={Paper} >
      <Typography align="center">
        Worker stats
      </Typography>
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
            workers.map((worker, index) => (
              <Worker key={worker.workerName} index={index} workerData={worker} />
            ))
          }
        </TableBody>
      </Table>
    </TableContainer >
  )
};

export default Score;