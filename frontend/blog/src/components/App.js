import React from 'react';
import VisibleTodoList from '../containers/VisibleTodoList';
import AddTodo from '../containers/AddTodo';

const App = () => {
  return (
    <div className="App">
      <AddTodo />
      <VisibleTodoList />
    </div>
  );
};

export default App;