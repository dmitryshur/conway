import { Grid } from 'components/Grid/Grid';
import { IConfig, Duration } from './types';
import './App.css';

const CONFIG: IConfig = {
  size: 50,
  density: 0.5,
  tickDuration: Duration.Millisecond * 400,
};

function App() {
  return (
    <div className="App">
      <Grid config={CONFIG} />
    </div>
  );
}

export default App;
