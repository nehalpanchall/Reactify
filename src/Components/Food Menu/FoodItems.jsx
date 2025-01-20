import css from './FoodMenu.module.css';

const FoodItems = ({ FoodItems }) => {
  console.log(FoodItems);
  return (
    <>
      {FoodItems.map((items, index) => {
        return (
          <ul key={index}>
            <li className={css.items}>{items}</li>
          </ul>
        );
      })}
    </>
  );
};

export default FoodItems;
