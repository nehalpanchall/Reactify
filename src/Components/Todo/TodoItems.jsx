const TodoItems = () => {
  let todoName = "Buy milk";
  let todoDate = "11/06/2025";

  return (
    <>
      <div class="bg-white p-4 rounded-lg shadow-md">
        <div class="flex justify-between items-center py-2 border-b border-gray-200">
          <span class="text-gray-700">{todoName}</span>
          <span class="text-gray-500 text-sm">{todoDate}</span>
          <button class="text-red-500 hover:text-red-600">Delete</button>
        </div>
      </div>
    </>
  );
};

export default TodoItems;
