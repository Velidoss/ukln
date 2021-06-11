import { makeStyles } from "@material-ui/core";

const ComparisonListItemStyle = makeStyles({
  itemBetter: {
    padding: 20,
    margin: 10,
    backgroundColor: 'green',
    color: 'white',
  },
  itemWorse: {
    padding: 20,
    margin: 10,
  },
});

export default ComparisonListItemStyle;