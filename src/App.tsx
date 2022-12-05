import React, { useEffect, useState } from 'react';

import Button from './components/Button/Button';
import CalculatorScreen from './components/CalculatorScreen/CalculatorScreen';

import './App.scss';

const MAX_LENGTH_OF_VALUE= 12;

enum ButtonTypes {
  AC = "AC",
  Addition = "Addition",
  Delete = "Delete",
  Division = "Division",
  Multiplication = "Multiplication",
  Subtraction = "Subtraction"
}

const App = () => {
  const [leftButtons, setLeftButtons] = useState([]);
  const [rightButtons, setRightButtons] = useState([]);
  const [currentValue, setCurrentValue] = useState('');
  const [prevValue, serPrevValue] = useState('');

  useEffect(() => {
    fetch('/data/buttons.json')
      .then(res => {
        if(res.status !== 200) throw new Error('We have different status than 200!');
        return res.json();
      }).then(res => {
        setLeftButtons(res.buttonsLeft)
        setRightButtons(res.buttonsRight)
      }).catch(err => {
        throw new Error(err);
      })
  }, [])

  if(!leftButtons.length && !rightButtons.length) return <p>Sorry we cannot get data! :/</p>

  const onButtonClick = (value: string, type: string | null):void => {
    const {AC, Addition, Delete, Division, Multiplication, Subtraction} = ButtonTypes;

    switch(type) {
      case AC:
        setCurrentValue('');
        serPrevValue('');
      break;

      case Addition:
      case Division:
      case Multiplication:
      case Subtraction:
        if(!!currentValue.length) {
          setCurrentValue('');
          serPrevValue(currentValue);
        }
      break;

      case Delete:
        const valueAfterRemovedLastNumber = currentValue.slice(0, currentValue.length - 1);
        setCurrentValue(valueAfterRemovedLastNumber);
      break;

      default:
        if(currentValue.length < MAX_LENGTH_OF_VALUE) setCurrentValue(prevValue => (prevValue + value))
    }
  }

  const generatedLeftButtons = leftButtons.map(({text, type, value, id}) => (
    <li key={id}>
      <Button 
        text={text}
        type={type}
        value={value}
        onClick={onButtonClick}
      />
    </li>
  ))

  const generatedRightButtons = rightButtons.map(({text, type, value, id}) => (
    <li key={id}>
      <Button 
        text={text}
        type={type}
        value={value}
        onClick={onButtonClick}
      />
    </li>
  ))

  return ( 
    <div className="calculator-container">
      <div className="calculator">
        <CalculatorScreen
          currentValue={currentValue}
          prevValue={prevValue}
        />
        <div className="calculator-buttons">
            <ul className="calculator-buttons-list calculator-buttons-list-left">{generatedLeftButtons}</ul>
            <ul className="calculator-buttons-list calculator-buttons-list-right">{generatedRightButtons}</ul>
        </div>
      </div>
    </div>
   );
}
 
export default App;
