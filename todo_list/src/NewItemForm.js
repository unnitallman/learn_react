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

    if(this.state.value != ""){
      this.props.add(this.state.value);  
    }
  }

  render() {
    return (
      <form className="form" onSubmit={ this.handleSubmit }>
        <div className="form-group">
          <input placeHolder="What needs to be done?" className="form-control" type="text" value={this.state.value} onChange={ this.handleChange } />
        </div>

        <div className="form-group">  
          <input className="btn btn-success" type="submit" value="Add" />
        </div>

      </form>
    );
  }
}

export default NewItemForm;
