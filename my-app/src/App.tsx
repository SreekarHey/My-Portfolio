import './App.scss';
import { Button, Spinner } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Button type="button">Primary</Button>
      <Spinner animation="grow" />
    </div>
  );
}

export default App;
