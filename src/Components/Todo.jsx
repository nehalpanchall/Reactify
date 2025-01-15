import TodoAdd from "./Todo/TodoAdd";

const Todo = () => {
  return (
    <>
      <div class="bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto mt-10">
        <TodoAdd />

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
