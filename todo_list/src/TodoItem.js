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
  }

  renderItemName(){
    if(this.state.completed){
      return(<span style={{'text-decoration': 'line-through'}}>{this.props.value}</span>);      
    }
    else{
      return(<span>{this.props.value}</span>);
    }
  }

  render() {
    return (
      <div className="todo-item" id={this.props.id}>
        
        <li class="ui-state-default">
          <div class="checkbox">
            <label>
              <input type="checkbox" defaultChecked={this.state.completed} onChange={ this.handleChange }/>
              { this.renderItemName() }
            </label>
          </div>
        </li>
      </div>
    );
  }
}

export default TodoItem;
