import React from 'react';
import { Chip, ListItem, ListItemText } from '@material-ui/core';
import style from './ComparisonListItemStyle';

const ComparisonListItem = ({comparisonItem}) => {
  const classes = style();

  return (
    <ListItem style={{display: 'flex'}}>
      <ListItemText>
        <Chip 
          className={classes.itemBetter}
          variant="outlined"
          label={comparisonItem.better}
          color="primary"
        />
      </ListItemText>
      <ListItemText>
        <Chip 
          className={classes.itemWorse}
          variant="outlined"
          label={comparisonItem.worse}
          color="default"
        />
      </ListItemText>
    </ListItem >
  )
};

export default ComparisonListItem;