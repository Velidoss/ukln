import { Container, Grid } from '@material-ui/core';
import Comparison from './components/Comparison/Comparison';
import Input from './components/Input/Input';
import Score from './components/Score/Score';

function App() {
  return (
    <Container>
      <Grid container direction="row">
        <Grid container item direction="column">
          <Input/>
          <Score/>
        </Grid>
        <Grid  container item>
          <Comparison/>
        </Grid>
      </Grid>
    </Container>

  );
}

export default App;
