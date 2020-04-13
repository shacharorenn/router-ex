import React from 'react';
import './App.css';
import Search from './components/Search';
import TodoListFunction from './components/TodoListFunction';
import {Route} from 'react-router-dom';
import TodoListClass from './components/TodoListClass';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Todo List route communication</h1>
        <div className="row">
        <div className="col-6">
            <TodoListClass/>
          </div>
          <div className="col-6">
            <Search/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
