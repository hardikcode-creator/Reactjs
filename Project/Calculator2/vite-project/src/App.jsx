import Display from './components/Display'
import styles from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonContainer from './components/Buttoncontainer';
import { useState } from 'react';
function App() {

  let [displayValue,setValue]=useState("");
  const handleButtonClick=(e,buttonName)=>{
      
      console.log(buttonName);
      if(buttonName==='C')
      {
          setValue("");
      }
      else if(buttonName==='=')
      {
        const result=eval(displayValue);
        setValue(result);
      }
      else{
            const newDisplayvalue=displayValue+buttonName;
            setValue(newDisplayvalue);
      }

  }
    return (
      <div className={styles.calculator}>
       <Display displayValue={displayValue}></Display>
       <ButtonContainer onButtonClick={handleButtonClick}></ButtonContainer>
      </div>

    );
}

export default App
