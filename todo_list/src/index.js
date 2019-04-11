import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import TodoApp from './TodoApp';

ReactDOM.render(<TodoApp name="Unni's Todolist" />, document.getElementById('root1'));
ReactDOM.render(<TodoApp name="Deepti's Todolist" />, document.getElementById('root2'));

