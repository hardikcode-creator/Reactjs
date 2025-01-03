
import './App.css'
import Clockheading from './components/Clockheading';
import Clockslogan from './components/Clockslogan';
import CurrentTime from './components/CurrentTime';

function App() {
  return (
  <center>
    <Clockheading></Clockheading>
    <Clockslogan/>
    <CurrentTime/>
  </center>
  );
}

export default App
