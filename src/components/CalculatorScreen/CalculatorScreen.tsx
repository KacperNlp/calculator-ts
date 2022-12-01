import React from 'react'

import './CalculatorScreen.scss';

interface CalculatorScreenInterface {
    firstNumber: number,
    secondNumber?: number | undefined,
}

const CalculatorScreen: React.FC<CalculatorScreenInterface> = ({firstNumber, secondNumber}) => {
    return ( 
        <div className="calculator-screen">
            <p className="calculator-screen-prev-number">{firstNumber}</p>
            <p className="calculator-screen-active-number">+ {secondNumber}</p>
        </div>
     );
}
 
export default CalculatorScreen;