import TodoTitle from './TodoTitle';

const TodoAdd = ({ getTodoItem }) => {
  return (
    <>
      <TodoTitle />
      <div className="flex items-center gap-4 mb-4">
        <input
          type="text"
          id="todoName"
          placeholder="Enter Todo.."
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          id="todoDate"
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={() => getTodoItem(todoName, todoDate)}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default TodoAdd;
