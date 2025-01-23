import Display from './Calc/Display';
import css from './Calc/Calculator.module.css';
import ButtonsContainer from './Calc/ButtonsContainer';
import CalContainer from './Calc/CalContainer';
import { useState } from 'react';

const Calculator = () => {
  let buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/', 'C', '='];

  let [displaykey, setDisplayKey] = useState('');

  const getClickedValue = event => {
    // console.log(event);

    if (event.target.innerHTML === '=') {
      let result = eval(displaykey);
      setDisplayKey(result);
    } else if (event.target.innerHTML === 'C') {
      setDisplayKey('');
    } else {
      let finalVal = displaykey + event.target.innerHTML;
      setDisplayKey(finalVal);
    }
  };

  return (
    <CalContainer>
      <div className={css.mainContainer}>
        <Display passKey={displaykey} />

        <ButtonsContainer getValue={getClickedValue} keypad={buttons} />
      </div>
    </CalContainer>
  );
};

export default Calculator;
