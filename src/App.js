import './App.css';
import Comparison from './components/Comparison/Comparison';
import Input from './components/Input/Input';
import Score from './components/Score/Score';

function App() {
  return (
    <div className="App">
        <div>
          <Input/>
          <Score/>
        </div>
        <div>
          <Comparison/>
        </div>
    </div>
  );
}

export default App;
