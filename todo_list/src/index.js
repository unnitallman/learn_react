import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import TodoApp from './TodoApp';

ReactDOM.render(<TodoApp name="Unni's ToDo List" />, document.getElementById('root1'));
ReactDOM.render(<TodoApp name="Deepti's ToDo List" />, document.getElementById('root2'));

