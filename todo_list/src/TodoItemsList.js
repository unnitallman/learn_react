import React, { Component } from 'react';

import Filters from './Filters';
import TodoItem from './TodoItem';

class TodoItemsList extends Component {
  todoItems(){
    return this.props.values.map((value) => (<TodoItem value={value.value} id={value.id} key={value.id} remove={this.props.remove} completed={value.completed} toggleComplete={this.props.toggleComplete} deleteItem={this.props.deleteItem}/>));
  }

  render() {
    return (
      <div className="row">
        <div className="todo-item-list">
          <div className="col-md-12">
            <Filters />
          </div>
          <div className="col-md-12">
            <ul className="list-unstyled list-group">
              {this.todoItems()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoItemsList;
