import React, { Component } from 'react';

import TodoItem from './TodoItem';

class TodoItemsList extends Component {
  todoItems(){
    return this.props.values.map((value) => (<TodoItem value={value.value} key={value.id} remove={this.props.remove} completed={value.completed} />));
  }

  render() {
    return (
      <div className="todo-item-list">
        <ul class="list-unstyled">
          {this.todoItems()}
        </ul>
      </div>
    );
  }
}

export default TodoItemsList;
