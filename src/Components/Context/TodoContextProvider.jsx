// TodoProvider.jsx
import React, { useReducer, useState } from 'react';
import TodoContext from './TodoContext';

function reducer(currItem, action) {
  console.log(action);
  let newItem = currItem;

  if (action.type === 'ADD_TODO') {
    newItem = [
      ...currItem,
      {
        todoName: action.payload.name,
        todoDate: action.payload.date,
      },
    ];
  } else if (action.type === 'DELETE_TODO') {
    console.log(action.payload.deleteItem);
    newItem = currItem.filter((items) => items !== action.payload.deleteItem);
  }
  return newItem;
}

// component
const TodoProvider = (props) => {
  let initialState = [{ todoName: 'Buy Milk', todoDate: '11/06/2025' }];
  let title = 'Todo with Context';

  // const [todoItems, setTodoItems] = useState([
  //   { todoName: 'Buy Milk', todoDate: '11/06/2025' },
  // ]);

  const [todoItems, dispatchTodo] = useReducer(reducer, initialState);

  const getTodoItem = (name, date) => {
    const addTodoAction = {
      type: 'ADD_TODO',
      payload: {
        name,
        date,
      },
    };

    dispatchTodo(addTodoAction);

    // let newItem = { todoName: name, todoDate: date };
    // setTodoItems((currentArr) => [...currentArr, newItem]);
  };

  const deleteItem = (deleteItem) => {
    const deleteTodoAction = {
      type: 'DELETE_TODO',
      payload: { deleteItem },
    };

    dispatchTodo(deleteTodoAction);

    // setTodoItems((currentArr) =>
    //   currentArr.filter((item) => item !== deleteItem)
    // );
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
