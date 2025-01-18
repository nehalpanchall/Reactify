import Display from './Calc/Display';
import css from './Calc/Calculator.module.css';
import ButtonsContainer from './Calc/ButtonsContainer';

const Calculator = () => {
  let buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/', 'C'];

  return (
    <>
      <div className={css.body}>
        <div className={css.mainContainer}>
          <Display />

          <ButtonsContainer keypad={buttons} />
        </div>
      </div>
    </>
  );
};

export default Calculator;
