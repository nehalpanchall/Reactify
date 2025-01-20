import css from './Calculator.module.css';

const CalContainer = props => {
  console.log(props);
  return (
    <>
      <h1>Props child Container</h1>
      <div className={`${css.body} ${css.container}`}>{props.children}</div>
    </>
  );
};

export default CalContainer;
