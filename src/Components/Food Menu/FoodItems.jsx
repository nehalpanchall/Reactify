import css from './FoodMenu.module.css';

const FoodItems = ({ FoodItems }) => {
  const handleClick = event => {
    console.log(event.target);
  };
  return (
    <>
      {FoodItems.map((items, index) => {
        return (
          <ul key={index}>
            <li className={css.items}>{items}</li>
            <button onClick={handleClick} className={css.foodButton}>
              Buy Me
            </button>
          </ul>
        );
      })}
    </>
  );
};

export default FoodItems;
