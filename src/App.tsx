import React from 'react';

import './App.scss';
import CalculatorScreen from './components/CalculatorScreen/CalculatorScreen';

const App = () => {
  return ( 
    <div className="calculator-container">
      <div className="calculator">
        <CalculatorScreen
          firstNumber={2}
          secondNumber={2}
        />
      </div>
    </div>
   );
}
 
export default App;
