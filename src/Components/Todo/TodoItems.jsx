const TodoItems = ({ todoItems }) => {
  console.log();

  // for (let i of todoItems) {
  //   for (let j in i) {
  //     console.log(i[j]);
  //   }
  // }

  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <span className="text-gray-700">{todoItems[0].todoName}</span>
          <span className="text-gray-500 text-sm">{todoItems[0].todoDate}</span>
          <button className="text-red-500 hover:text-red-600">Delete</button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <span className="text-gray-700">{todoItems[1].todoName}</span>
          <span className="text-gray-500 text-sm">{todoItems[1].todoDate}</span>
          <button className="text-red-500 hover:text-red-600">Delete</button>
        </div>
      </div>
    </>
  );
};

export default TodoItems;
