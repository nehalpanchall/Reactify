const TodoItems = () => {
  let todoName = ["Buy milk", "Practice JavaScript"];
  let todoDate = ["11/06/2025", "18/06/2024"];

  return (
    <>
      <div class="bg-white p-4 rounded-lg shadow-md">
        <div class="flex justify-between items-center py-2 border-b border-gray-200">
          <span class="text-gray-700">{todoName[0]}</span>
          <span class="text-gray-500 text-sm">{todoDate[0]}</span>
          <button class="text-red-500 hover:text-red-600">Delete</button>
        </div>
      </div>

      <div class="bg-white p-4 rounded-lg shadow-md">
        <div class="flex justify-between items-center py-2 border-b border-gray-200">
          <span class="text-gray-700">{todoName[1]}</span>
          <span class="text-gray-500 text-sm">{todoDate[1]}</span>
          <button class="text-red-500 hover:text-red-600">Delete</button>
        </div>
      </div>
    </>
  );
};

export default TodoItems;
