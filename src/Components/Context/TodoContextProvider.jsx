import React, { useReducer } from 'react';
import TodoContext from './TodoContext';

function reducer(currItem, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...currItem,
        {
          todoName: action.payload.name,
          todoDate: action.payload.date,
        },
      ];

    case 'DELETE_TODO':
      return currItem.filter((items) => items !== action.payload.deleteItem);

    default:
      return currItem;
  }
}

// component
const TodoProvider = (props) => {
  let initialState = [{ todoName: 'Buy Milk', todoDate: '11/06/2025' }];
  let title = 'Todo with Context';

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
  };

  const deleteItem = (deleteItem) => {
    const deleteTodoAction = {
      type: 'DELETE_TODO',
      payload: { deleteItem },
    };

    dispatchTodo(deleteTodoAction);
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
