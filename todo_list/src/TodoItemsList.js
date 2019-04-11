import React, { Component } from 'react';

import TodoItem from './TodoItem';

class TodoItemsList extends Component {
  todoItems(){
    return this.props.values.map(([id, value]) => (<TodoItem value={value} key={id} remove={this.props.remove} />));
  }

  render() {
    return (
      <div className="todo-item-list">
        {this.todoItems()}
      </div>
    );
  }
}

export default TodoItemsList;
