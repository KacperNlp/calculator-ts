import React from 'react';

import Button from './components/Button/Button';
import CalculatorScreen from './components/CalculatorScreen/CalculatorScreen';

import './App.scss';

const App = () => {

  const onButtonClick = (value: number):void => {
    console.log(value)
  }

  return ( 
    <div className="calculator-container">
      <div className="calculator">
        <CalculatorScreen
          firstNumber={2}
          secondNumber={2}
        />
        <div className="calculator-buttons">
          <Button 
            text="1"
            value={1}
            onClick={onButtonClick}
          />
        </div>
      </div>
    </div>
   );
}
 
export default App;
