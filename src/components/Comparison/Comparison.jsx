import React from 'react';
import useAppSelector from './../../store/hooks/useAppSelector';
import { comparisonsSelector } from './../../store/selectors';
import { Grid, List, Typography } from '@material-ui/core';
import ComparisonListItem from './ComparisonListItem/ComparisonListItem';
import style from './ComparisonStyles';

const Comparison = () => {

  const comparisons = useAppSelector(comparisonsSelector);
  const classes = style();

  return (
    <Grid container direction="column">
      <Grid item container justify="center" >
        <Typography style={{marginTop: 20}}>
          Workers comparisons
        </Typography>
      </Grid>
      <Grid item container justify="center" >
        <List className={classes.root}>
          {
            comparisons.map((item, index) => (
              <ComparisonListItem key={index} comparisonItem={item} />
            ))
          }
        </List>
      </Grid>
    </Grid>
  )
};

export default Comparison;