import TodoTitle from './TodoTitle';

const TodoAdd = () => {
  return (
    <>
      <TodoTitle />
      <div className="flex items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Enter Todo.."
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Add
        </button>
      </div>
    </>
  );
};

export default TodoAdd;
