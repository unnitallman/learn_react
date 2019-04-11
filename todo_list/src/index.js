import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import TodoApp from './TodoApp';

ReactDOM.render(<TodoApp name="Unni's ToDolist" />, document.getElementById('root1'));
ReactDOM.render(<TodoApp name="Deepti's ToDolist" />, document.getElementById('root2'));

