const TodoTitle = (props) => {
  let title = props.newTitle;
  return (
    <>
      <h1 className="text-center text-gray-600 text-xl mb-6 font-bold">
        {title}
      </h1>
    </>
  );
};

export default TodoTitle;
