import TodoContextProvider from './Context/TodoContextProvider';
import TodoAdd from './Todo/TodoAdd';
import TodoItems from './Todo/TodoItems';
import TodoTitle from './Todo/TodoTitle';

const Todo = () => {
  return (
    <TodoContextProvider>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto mt-10">
        <TodoTitle />
        <TodoAdd />

        <TodoItems />
      </div>
    </TodoContextProvider>
  );
};

export default Todo;
