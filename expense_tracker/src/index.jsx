import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import TodoApp from './TodoApp';
import { BrowserRouter, Route } from 'react-router-dom';


const AllExpenses = () => (
  <TodoApp name="EXPENSE TRACKER" activeListName={'all'} />
)

const OneOffExpenses = () => (
  <TodoApp name="EXPENSE TRACKER" activeListName={'oneoff'} />
)

const RecurringExpenses = () => (
  <TodoApp name="EXPENSE TRACKER" activeListName={'recurring'} />
)


ReactDOM.render(
  <BrowserRouter> 
    <Route exact path="/" component={AllExpenses} />
    <Route exact path="/all" component={AllExpenses} />
    <Route exact path="/oneoff" component={OneOffExpenses} />
    <Route exact path="/recurring" component={RecurringExpenses} />
  </BrowserRouter>,   
document.getElementById('root'));
