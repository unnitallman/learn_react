import React, { Component } from 'react';

import Utils from './Utils';
import NewItemForm from './NewItemForm';
import TodoItemsList from './TodoItemsList';
import Widget from './Widget';

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

  add(amount, description, category, date){
    let newValues = this.state.values.slice();
    newValues = [{id: Utils.uuid(), date: date, amount: amount, description: description, category: category}].concat(newValues);
    
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

    if(this.state.activeListName === 'oneoff'){
      return this.state.values.filter((x) => {return x.completed===false});
    }

    if(this.state.activeListName === 'recurring'){
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
        <div className="row">
          
          <div className="col-md-6">
            <Widget title={"ADD NEW EXPENSE"}>
              <NewItemForm add={ this.add }/>
            </Widget>
          </div>

          <div className="col-md-6">
            <Widget title={"EXPENSES"}>
              <TodoItemsList values={this.activeValues()} remove={this.remove} toggleComplete={this.toggleComplete} deleteItem={this.remove} activeListName={this.state.activeListName}/>
            </Widget>      
          </div>
        </div>  
      </div>
    );
  }
}

export default TodoApp;
