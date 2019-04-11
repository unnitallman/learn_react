import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props){
    super(props);

    this.state = {completed: this.props.completed}

    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  renderItemName(){
    if(this.state.completed){
      return(<span style={{'textDecoration': 'line-through'}}>{this.props.value}</span>);      
    }
    else{
      return(<span>{this.props.value}</span>);
    }
  }

  render() {
    return (
      <div className="todo-item" id={this.props.id}>
        <li className="list-group-item">
          <div className="row">
            <div className="col-md-12">
              <button onClick={this.handleDelete} className="mr-4" href="#"><i className="fa fa-trash" aria-hidden="true"></i></button>
              <label>
                <input type="checkbox" defaultChecked={this.state.completed} onChange={ this.handleCheckbox }/>&nbsp;
                { this.renderItemName() }
              </label>
            </div>
          </div>
        </li>
      </div>
    );
  }
}

export default TodoItem;
