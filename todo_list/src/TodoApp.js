import React, { Component } from 'react';

import Utils from './Utils';
import NewItemForm from './NewItemForm';
import TodoItemsList from './TodoItemsList';

import { Route } from "react-router-dom";


class TodoApp extends Component {
  constructor(props){
    super(props);

    this.state          = this.initialState();

    this.add            = this.add.bind(this);
    this.remove         = this.remove.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.activeValues   = this.activeValues.bind(this);
  }

  componentDidUpdate(){
    Utils.store(this.props.name, this.state);
  }

  componentWillMount(){
    if(this.props.activeListName){
      this.setState({activeListName: this.props.activeListName})
    }
  }

  initialState(){
    return (Utils.store(this.props.name) || {values: [], activeListName: 'all'});
  }

  add(value){
    let newValues = this.state.values.slice();
    newValues = [{id: Utils.uuid(), value: value, completed: false}].concat(newValues);
    
    this.setState({
      values: newValues
    });
  }

  remove(id){
    let newValues = this.state.values.slice();

    for( var i = 0; i < newValues.length; i++){ 
      if ( newValues[i].id === id) {
        newValues.splice(i, 1); 
      }
    }
    
    this.setState({
      values: newValues
    }); 
  }

  toggleComplete(id){
    let newValues = this.state.values.slice();
    let index = this.findItem(newValues, id);

    newValues[index].completed = !newValues[index].completed;

    this.setState({
      values: newValues
    }); 
  }

  activeValues(){
    if(this.state.activeListName === 'all'){
      return this.state.values;
    }

    if(this.state.activeListName === 'active'){
      return this.state.values.filter((x) => {return x.completed===false});
    }

    if(this.state.activeListName === 'completed'){
      return this.state.values.filter((x) => {return x.completed===true});
    }
  }

  findItem(values, id){
    return (values.findIndex(function(x){ return(x.id === id) }));
  }

  render() {
    return (
      <div className="todolist">
        <h1>{this.props.name}</h1> 
        <NewItemForm add={ this.add }/>
        <TodoItemsList values={this.activeValues()} remove={this.remove} toggleComplete={this.toggleComplete} deleteItem={this.remove} activeListName={this.state.activeListName}/>
      </div>
    );
  }
}

export default TodoApp;
