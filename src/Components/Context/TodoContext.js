import { createContext } from 'react';

const TodoContext = createContext({
  todoItems: [],
  deleteItem: () => {},
  getTodoItem: () => {},
  title: '',
});

export default TodoContext;
