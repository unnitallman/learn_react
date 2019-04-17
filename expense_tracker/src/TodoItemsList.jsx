import React, { Component } from 'react';

import Filters from './Filters';
import TodoItem from './TodoItem';

class TodoItemsList extends Component {
  todoItems(){
    return this.props.values.map((value) => (<TodoItem value={value.value} id={value.id} key={value.id} remove={this.props.remove} completed={value.completed} toggleComplete={this.props.toggleComplete} deleteItem={this.props.deleteItem}/>));
  }

  render() {
    return (
      <div className="todo-item-list">
        <Filters activeListName={this.props.activeListName} />
        <ul className="list-unstyled list-group">
          {this.todoItems()}
        </ul>
      </div>
    );
  }
}

export default TodoItemsList;
