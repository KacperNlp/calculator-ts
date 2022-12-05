import React from 'react'

import './CalculatorScreen.scss';

interface CalculatorScreenInterface {
    currentValue: string,
    prevValue?: string | undefined,
}

const CalculatorScreen: React.FC<CalculatorScreenInterface> = ({currentValue, prevValue}) => {
    return ( 
        <div className="calculator-screen">
            <p className="calculator-screen-prev-number">{prevValue}</p>
            <p className="calculator-screen-active-number">+ {currentValue}</p>
        </div>
     );
}
 
export default CalculatorScreen;