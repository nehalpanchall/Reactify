import { useState } from 'react';
import TodoTitle from './TodoTitle';
import { IoAddCircleSharp } from 'react-icons/io5';

const TodoAdd = ({ getTodoItem }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const manageName = (event) => {
    setName(event.target.value);
  };

  const manageDate = (event) => {
    setDate(event.target.value);
  };

  const handleAddButton = () => {
    getTodoItem(name, date);
    setName('');
    setDate('');
  };

  return (
    <>
      <TodoTitle />
      <div className="flex items-center gap-4 mb-4">
        <input
          type="text"
          id="todoName"
          onChange={(event) => manageName(event)}
          value={name}
          placeholder="Enter Todo.."
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          id="todoDate"
          onChange={(event) => manageDate(event)}
          value={date}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="bg-blue-500 text-white px-3 py-3 rounded-lg hover:bg-blue-600"
          onClick={handleAddButton}
        >
          <IoAddCircleSharp className="size-5" />
        </button>
      </div>
    </>
  );
};

export default TodoAdd;
