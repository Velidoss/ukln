import { makeStyles } from "@material-ui/core";

const ScoreStyles = makeStyles(() => ({
  scoreTable: {
    width: '100%',
    position: 'relative',
    overflow: 'auto',
    maxHeight: 600,
    marginTop: 20,
  },
  winnerShip: {
    marginLeft: 10,
    backgroundColor: 'green',
  }
}));

export default ScoreStyles;