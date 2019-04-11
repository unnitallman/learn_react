import React, { Component } from 'react';

import Utils from './Utils';
import NewItemForm from './NewItemForm';
import TodoItemsList from './TodoItemsList';

class TodoApp extends Component {
  constructor(props){
    super(props);

    this.state  = this.initialState();
    this.add    = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
  }

  componentDidUpdate(){
    Utils.store(this.props.name, this.state);
  }

  initialState(){
    return (Utils.store(this.props.name) || {values: []});
  }

  add(value){
    let newValues = this.state.values.slice();
    newValues = [{id: Utils.uuid(), value: value, completed: false}].concat(newValues);
    
    this.setState({
      values: newValues
    });
  }

  toggleComplete(value){
    console.log(value);

    let newValues = this.state.values.slice();
    let index = this.findItem(newValues, value);

    newValues[index].completed = !newValues[index].completed;

    this.setState({
      values: newValues
    }); 
  }

  findItem(values, value){
    return (values.findIndex(function(x){ return(x.value === value) }));
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
        <h1>{this.props.name}</h1> 
        <NewItemForm add={ this.add }/>
        <TodoItemsList values={this.state.values} remove={this.remove} toggleComplete={this.toggleComplete}/>
      </div>
    );
  }
}

export default TodoApp;
