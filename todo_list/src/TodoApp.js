import React, { Component } from 'react';

import NewItemForm from './NewItemForm';
import TodoItemsList from './TodoItemsList';

class TodoApp extends Component {
  constructor(props){
    super(props);

    this.state  = this.initialState();
    this.add    = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  initialState(){
    return {
      values: [
        [1, 'Wake up Deepti'], 
        [2, 'Boil water'], 
        [3, 'Cook food']
      ]
    }
  }

  add(value){
    let newValues = this.state.values.slice();
    newValues.push([4, value]);
    
    this.setState({
      values: newValues
    });
  }

  remove(value){
    let newValues = this.state.values.slice();

    for( var i = 0; i < newValues.length; i++){ 
      if ( newValues[i][1] === value) {
        newValues.splice(i, 1); 
      }
    }
    
    this.setState({
      values: newValues
    }); 
  }

  render() {
    return (
      <div className="todo-app">
        <NewItemForm add={ this.add }/>
        <TodoItemsList values={this.state.values} remove={this.remove}/>
      </div>
    );
  }
}

export default TodoApp;
