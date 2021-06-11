import { Button, TextField, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addWorker} from '../../store/workersSlice/workersSlice';
import style from './InputStyle';
import useAppSelector from './../../store/hooks/useAppSelector';
import { errorSelector } from './../../store/selectors';
import { toggleErrorState } from './../../store/workersSlice/workersSlice';

const Input = () => {
  const classes = style();

  const [workerName, setWorkerName] = useState('');
  const [workHours, setWorkHours] = useState('');
  const dispatch = useDispatch();
  const errorState = useAppSelector(errorSelector);

  const changeWorkerName = (event) => {
    if (errorState){
      dispatch(toggleErrorState(false));
    }
    setWorkerName(event.target.value);
  };
  
  const changeWorkHours = (event) => {
    setWorkHours(event.target.value);
  };

  const addItem = (event) => {
    event.preventDefault();
    dispatch(addWorker({workerName, workHours}));
  }

  return (
    <form onSubmit={addItem}>
      <Grid 
        container 
        justify="center"
        direction="column"
        alignItems="center"
      >
        <Typography className={classes.formItem}>
          Enter worker data
        </Typography>
        <TextField 
          error={errorState}
          helperText={errorState ? 'This name is already exists': ''}
          className={classes.formItem}
          label="Worker Name"
          type="text" 
          value={workerName} 
          onChange={changeWorkerName}
          variant="outlined"
        />
        <TextField 
          className={classes.formItem}
          label="Worker hours"
          type="number" 
          value={workHours} 
          onChange={changeWorkHours}
          variant="outlined"
        />
        <Button 
          className={`${classes.formItem} ${classes.formButton}`}
          type="submit"
          variant="outlined" 
          color="primary"
        >
          Add
        </Button>
      </Grid>
    </form>
  )
};

export default Input;