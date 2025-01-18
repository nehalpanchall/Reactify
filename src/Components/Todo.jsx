import TodoAdd from './Todo/TodoAdd';
import TodoItems from './Todo/TodoItems';
import TodoTitle from './Todo/TodoTitle';

const Todo = () => {
  let title = 'Todo with props';

  let todoName = ['Buy milk', 'Practice JavaScript'];
  let todoDate = ['11/06/2025', '18/06/2024'];
  return (
    <>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto mt-10">
        <TodoTitle newTitle={title} />
        <TodoAdd />

        <TodoItems names={todoName} dates={todoDate} />
      </div>
    </>
  );
};

export default Todo;
