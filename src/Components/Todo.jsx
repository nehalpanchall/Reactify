import TodoAdd from "./Todo/TodoAdd";
import TodoItems from "./Todo/TodoItems";

const Todo = () => {
  return (
    <>
      <div class="bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto mt-10">
        <TodoAdd />

        <TodoItems />
      </div>
    </>
  );
};

export default Todo;
