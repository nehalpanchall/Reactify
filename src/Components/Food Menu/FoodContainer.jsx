import css from './FoodContainer.module.css';

const FoodContainer = props => {
  console.log(props);
  return <div className={css.container}>{props.children}</div>;
};

export default FoodContainer;
