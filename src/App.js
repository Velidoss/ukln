import { Container, Grid } from '@material-ui/core';
import Comparison from './components/Comparison/Comparison';
import Input from './components/Input/Input';
import Score from './components/Score/Score';

function App() {
  return (
    <Container>
      <Grid container direction="row">
        <Grid container item  direction="column" xs={6}>
          <Grid container item justify="center" >
             <Input/>
          </Grid>
          <Grid container item justify="center" >
            <Score/>
          </Grid>
        </Grid>
        <Grid container item xs={6}>
          <Comparison/>
        </Grid>
      </Grid>
    </Container>

  );
}

export default App;
