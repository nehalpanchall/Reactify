import { RiDeleteBin6Fill } from 'react-icons/ri';
import TodoContext from '../Context/TodoContext';
import { useContext } from 'react';

const TodoItems = () => {
  // [

  // {todoName: "Buy Milk", todoDate: "11/6/2025"},

  // {todoName: "Practice JavaScript", todoDate: "18/06/2024"}

  // ]

  // console.log(todoItems);

  // for (let i of todoItems) {
  //   for (let j in i) {
  //     console.log(i[j]);
  //   }
  // }

  const { todoItems, deleteItem } = useContext(TodoContext);

  // console.log(objFromProvider);
  return (
    <>
      {todoItems.map(items => {
        return (
          <div
            key={items.todoName}
            className="bg-white p-4 rounded-lg shadow-md"
          >
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-gray-700">{items.todoName}</span>
              <span className="text-gray-500 text-sm ">{items.todoDate}</span>
              <button
                className="text-red-500 hover:text-red-600"
                onClick={() => deleteItem(items)}
              >
                <RiDeleteBin6Fill className="size-6 mr-5" />
              </button>
            </div>
          </div>
        );
      })}

      {/* <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <span className="text-gray-700">{todoItems[1].todoName}</span>
          <span className="text-gray-500 text-sm">{todoItems[1].todoDate}</span>
          <button className="text-red-500 hover:text-red-600">Delete</button>
        </div>
      </div> */}
    </>
  );
};

export default TodoItems;
