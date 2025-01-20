import css from './FoodMenu.module.css';

const FoodTitle = props => {
  return (
    <>
      <h2 className={css.title}>{props.title}</h2>
    </>
  );
};

export default FoodTitle;
