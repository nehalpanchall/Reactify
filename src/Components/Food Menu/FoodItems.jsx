import css from './FoodMenu.module.css';

const FoodItems = ({ FoodItems, method }) => {
  return (
    <>
      {FoodItems.map((items, index) => {
        return (
          <ul key={index}>
            <li className={css.items}>{items}</li>
            <button onClick={() => method(items)} className={css.foodButton}>
              Buy Me
            </button>
          </ul>
        );
      })}
    </>
  );
};

export default FoodItems;
