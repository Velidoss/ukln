import { makeStyles } from "@material-ui/core";

const ComparisonStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 600,
  },
}));

export default ComparisonStyles;