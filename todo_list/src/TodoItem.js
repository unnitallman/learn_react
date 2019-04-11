import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <div className="todo-item" id={this.props.id}>
        {this.props.value}
        <button onClick={ () => {this.props.remove(this.props.value)} } >delete</button>
      </div>
    );
  }
}

export default TodoItem;
