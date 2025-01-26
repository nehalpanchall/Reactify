import { useState } from 'react';
import TodoAdd from './Todo/TodoAdd';
import TodoItems from './Todo/TodoItems';
import TodoTitle from './Todo/TodoTitle';
import TodoContext from './Context/TodoContext';

const Todo = () => {
  let title = 'Todo with props';

  const [todoItems, setTodoItems] = useState([
    { todoName: 'Buy Milk', todoDate: '11/06/2025' },
  ]);

  const getTodoItem = (name, date) => {
    let newItem = { todoName: name, todoDate: date };
    setTodoItems((currentArr) => {
      let newArr = [...currentArr, newItem];
      return newArr;
    });

    // name.value = '';
    // date.value = '';
    // name.focus();
  };

  const deleteItem = (deleteItem) => {
    let notDelete = todoItems.filter((item) => item !== deleteItem);
    setTodoItems(notDelete);
  };

  return (
    <TodoContext.Provider
      value={{
        todoItems,
        deleteItem,
        getTodoItem,
        title,
      }}
    >
      <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto mt-10">
        <TodoTitle />
        <TodoAdd />

        <TodoItems />
      </div>
    </TodoContext.Provider>
  );
};

export default Todo;
