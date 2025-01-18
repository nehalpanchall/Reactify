import css from './Calculator.module.css';

const ButtonsContainer = () => {
  let operations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/', 'C'];

  return (
    <>
      <div className={css.displayButtons}>
        {operations.map((items, index) => {
          return <button key={index}>{items}</button>;
        })}
      </div>
    </>
  );
};

export default ButtonsContainer;
