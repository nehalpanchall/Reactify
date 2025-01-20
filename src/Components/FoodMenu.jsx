import FoodItems from './Food Menu/FoodItems';
import FoodTitle from './Food Menu/FoodTitle';

const FoodMenu = () => {
  const title = 'Healthy Food Menu';

  const items = [
    'Greek Yogurt',
    'Soup and Salad',
    'Paneer Bowl',
    'Fruits Slice',
    'Nuts and Seeds'
  ];

  return (
    <>
      <FoodTitle title={title} />

      <FoodItems FoodItems={items} />
    </>
  );
};

export default FoodMenu;
