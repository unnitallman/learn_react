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
        {id: 1, value: 'Wake up Deepti', completed: false}, 
        {id: 2, value: 'Boil water', completed: true}, 
        {id: 3, value: 'Cook food', completed: false}
      ]
    }
  }

  add(value){
    let newValues = this.state.values.slice();
    newValues.push({id: 4, value: value, completed: false});
    
    this.setState({
      values: newValues
    });
  }

  remove(value){
    let newValues = this.state.values.slice();

    for( var i = 0; i < newValues.length; i++){ 
      if ( newValues[i].value === value) {
        newValues.splice(i, 1); 
      }
    }
    
    this.setState({
      values: newValues
    }); 
  }

  render() {
    return (
      <div className="todolist">
        <h1>Todos</h1> 
        <NewItemForm add={ this.add }/>
        <TodoItemsList values={this.state.values} remove={this.remove}/>
      </div>
    );
  }
}

export default TodoApp;
