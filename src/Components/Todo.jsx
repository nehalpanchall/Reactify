import { useState } from 'react';
import TodoAdd from './Todo/TodoAdd';
import TodoItems from './Todo/TodoItems';
import TodoTitle from './Todo/TodoTitle';

const Todo = () => {
  let title = 'Todo with props';

  const [todoItems, setTodoItems] = useState([
    { todoName: 'Buy Milk', todoDate: '11/06/2025' },
  ]);

  const getTodoItem = (name, date) => {
    let newItem = { todoName: name, todoDate: date };
    let newArr = [...todoItems, newItem];
    setTodoItems(newArr);
  };

  return (
    <>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto mt-10">
        <TodoTitle newTitle={title} />
        <TodoAdd getTodoItem={getTodoItem} />

        <TodoItems todoItems={todoItems} />
      </div>
    </>
  );
};

export default Todo;
