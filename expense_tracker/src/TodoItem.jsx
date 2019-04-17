import React, { Component } from 'react';
import moment from 'moment';

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
              <small className="text-muted mr-2">{moment(this.props.date).format('DD-MM-YYYY')}</small>
              <span>{this.props.description}</span>
              <i onClick={this.handleDelete} className="m-1 pl-1 float-right fa fa-trash" aria-hidden="true"></i>
              <span className="float-right"><b>₹{this.props.amount}</b></span>
              <small className="form-text text-muted"><span className="badge badge-primary">{this.props.category}</span></small>
            </div>
          </div>
        </li>
      </div>
    );
  }
}

export default TodoItem;
