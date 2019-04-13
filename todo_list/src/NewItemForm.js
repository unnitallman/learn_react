import React, { Component } from 'react';

class NewItemForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState({value: ''});

    this.props.add(this.state.value);
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input type="text"   value={this.state.value} onChange={ this.handleChange } />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default NewItemForm;
