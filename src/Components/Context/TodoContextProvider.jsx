// TodoProvider.jsx
import React, { useState } from 'react';
import TodoContext from './TodoContext';

const TodoProvider = (props) => {
  let title = 'Todo with Context';

  const [todoItems, setTodoItems] = useState([
    { todoName: 'Buy Milk', todoDate: '11/06/2025' },
  ]);

  const getTodoItem = (name, date) => {
    let newItem = { todoName: name, todoDate: date };
    setTodoItems((currentArr) => [...currentArr, newItem]);
  };

  const deleteItem = (deleteItem) => {
    setTodoItems((currentArr) =>
      currentArr.filter((item) => item !== deleteItem)
    );
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
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
