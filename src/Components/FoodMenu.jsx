import FoodItems from './Food Menu/FoodItems';
import FoodTitle from './Food Menu/FoodTitle';
import FoodContainer from '/Users/nehal/Desktop/Reactify/Reactify/src/Components/Food Menu/FoodContainer.jsx';

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
    <FoodContainer>
      <FoodTitle title={title} />
      <FoodItems FoodItems={items} />
    </FoodContainer>
  );
};

export default FoodMenu;
