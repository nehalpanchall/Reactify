import css from './Calculator.module.css';

const ButtonsContainer = ({ keypad }) => {
  return (
    <>
      <div className={css.displayButtons}>
        {keypad.map((items, index) => {
          return <button key={index}>{items}</button>;
        })}
      </div>
    </>
  );
};

export default ButtonsContainer;
