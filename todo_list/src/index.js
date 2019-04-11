import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import TodoApp from './TodoApp';
import { BrowserRouter, Route } from 'react-router-dom';


const AllItems = () => (
  <TodoApp name="Unni's ToDo List" activeListName={'all'} />
)

const ActiveItems = () => (
  <TodoApp name="Unni's ToDo List" activeListName={'active'} />
)

const CompletedItems = () => (
  <TodoApp name="Unni's ToDo List" activeListName={'completed'} />
)


ReactDOM.render(
  <BrowserRouter> 
    <Route exact path="/" component={AllItems} />
    <Route exact path="/all" component={AllItems} />
    <Route exact path="/completed" component={CompletedItems} />
    <Route exact path="/active" component={ActiveItems} />
  </BrowserRouter>,   
document.getElementById('root'));
