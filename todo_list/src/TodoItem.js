import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props){
    super(props);

    this.state = {completed: this.props.completed}

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      completed: !this.state.completed
    });

    this.props.toggleComplete(this.props.value);
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
              <button className="mr-4" href="#"><i className="fa fa-trash" aria-hidden="true"></i></button>
              <label>
                <input type="checkbox" defaultChecked={this.state.completed} onChange={ this.handleChange }/>&nbsp;
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
