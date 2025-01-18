import css from './Calculator.module.css';

const Calculator = () => {
  return (
    <>
      <div className={css.body}>
        <div className={css.mainContainer}>
          <div className={css.display}></div>
          <div className={css.displayButtons}>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>

            <button>+</button>
            <button>-</button>
            <button>*</button>
            <button>/</button>
            <button>C</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
