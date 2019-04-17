import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props){
    super(props);

    this.state = {completed: this.props.completed}

    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleDelete   = this.handleDelete.bind(this);
  }

  handleCheckbox(event){
    this.setState({
      completed: !this.state.completed
    });

    this.props.toggleComplete(this.props.id);
  }

  handleDelete(event){
    event.preventDefault();

    this.props.deleteItem(this.props.id);
  }

  render() {
    return (
      <div className="todo-item" id={this.props.id}>
        <li className="list-group-item">
          <div className="row">
            <div className="col-md-12">
              <button onClick={this.handleDelete} className="mr-2" href="#"><i className="fa fa-trash" aria-hidden="true"></i></button>
              <span>{this.props.description}</span>
              <span class="badge badge-primary ml-2">{this.props.category}</span>
              <span className="float-right"><b>{this.props.amount}</b></span>
            </div>
          </div>
        </li>
      </div>
    );
  }
}

export default TodoItem;
