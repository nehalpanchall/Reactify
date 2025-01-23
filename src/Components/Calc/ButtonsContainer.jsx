import css from './Calculator.module.css';

const ButtonsContainer = ({ keypad, getValue }) => {
  return (
    <>
      <div className={css.displayButtons}>
        {keypad.map((items, index) => {
          return (
            <button key={index} onClick={getValue}>
              {items}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default ButtonsContainer;
