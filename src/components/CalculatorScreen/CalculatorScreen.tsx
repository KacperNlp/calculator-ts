import React from 'react'

import './CalculatorScreen.scss';

interface CalculatorScreenInterface {
    currentValue: string,
    prevValue?: string | undefined,
    currentAction: string
}

const CalculatorScreen: React.FC<CalculatorScreenInterface> = ({currentValue, prevValue, currentAction}) => {
    const activeValue = !!prevValue ? `${currentAction} ${currentValue}` : currentValue;

    return ( 
        <div className="calculator-screen">
            <p className="calculator-screen-prev-number">{prevValue}</p>
            <p className="calculator-screen-active-number">{activeValue}</p>
        </div>
     );
}
 
export default CalculatorScreen;