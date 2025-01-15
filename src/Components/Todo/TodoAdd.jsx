const TodoAdd = () => {
  return (
    <>
      <h1 className="text-center text-gray-600 text-xl mb-6 font-bold">
        Todo React App
      </h1>
      <div class="flex items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Enter Todo.."
          class="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          class="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Add
        </button>
      </div>
    </>
  );
};

export default TodoAdd;
