const TodoItems = ({ names, dates }) => {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <span className="text-gray-700">{names[0]}</span>
          <span className="text-gray-500 text-sm">{dates[0]}</span>
          <button className="text-red-500 hover:text-red-600">Delete</button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <span className="text-gray-700">{names[1]}</span>
          <span className="text-gray-500 text-sm">{dates[1]}</span>
          <button className="text-red-500 hover:text-red-600">Delete</button>
        </div>
      </div>
    </>
  );
};

export default TodoItems;
