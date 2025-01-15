const Todo = () => {
  return (
    <>
      <div class="bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto mt-10">
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

        <div class="bg-white p-4 rounded-lg shadow-md">
          <div class="flex justify-between items-center py-2 border-b border-gray-200">
            <span class="text-gray-700">Buy milk</span>
            <span class="text-gray-500 text-sm">11/06/2025</span>
            <button class="text-red-500 hover:text-red-600">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
