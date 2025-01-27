import { useContext, useRef } from 'react';
import TodoTitle from './TodoTitle';
import { IoAddCircleSharp } from 'react-icons/io5';
import TodoContext from '../Context/TodoContext';

const TodoAdd = () => {
  const todoNameInput = useRef();
  const todoDateInput = useRef();

  const handleAddButton = (event) => {
    let name = todoNameInput.current.value;
    let date = todoDateInput.current.value;

    todoNameInput.current.value = '';
    todoDateInput.current.value = '';
    event.preventDefault();
    todoNameInput.current.focus();
    getTodoItem(name, date);
  };

  let { getTodoItem } = useContext(TodoContext);

  return (
    <>
      <form className="flex items-center gap-4 mb-4" onSubmit={handleAddButton}>
        <input
          type="text"
          ref={todoNameInput}
          placeholder="Enter Todo.."
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          id="todoDate"
          ref={todoDateInput}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="bg-blue-500 text-white px-3 py-3 rounded-lg hover:bg-blue-600"
          // onClick={handleAddButton}
        >
          <IoAddCircleSharp className="size-5" />
        </button>
      </form>
    </>
  );
};

export default TodoAdd;
