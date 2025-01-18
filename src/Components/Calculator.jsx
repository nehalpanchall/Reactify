import Display from './Calc/Display';
import css from './Calc/Calculator.module.css';
import ButtonsContainer from './Calc/ButtonsContainer';

const Calculator = () => {
  return (
    <>
      <div className={css.body}>
        <div className={css.mainContainer}>
          <Display />

          <ButtonsContainer />
        </div>
      </div>
    </>
  );
};

export default Calculator;
