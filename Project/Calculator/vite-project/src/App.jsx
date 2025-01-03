import Display from './components/Display'
import styles from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonContainer from './components/Buttoncontainer';
function App() {
    return (
      <div className={styles.calculator}>
       <Display></Display>
       <ButtonContainer></ButtonContainer>
      </div>

    );
}

export default App
