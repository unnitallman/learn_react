import React, { Component } from 'react';

class NewItemForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      amount: '',
      description: '',
      category: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, key){
    this.setState({
      [key]: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    
    this.setState({description: '', amount: '', category: ''});

    if(this.state.category !== ""){
      this.props.add(this.state.description);  
    }
  }

  categories(){
    return([
      ['','Which category does this expense belong to?'],
      ['Travel', 'Travel'],
      ['Entertainment','Entertainment'],
      ['Groceries', 'Groceries'],
      ['Recurring', 'Recurring'],
      ['EMI', 'EMI'],
      ['Saving/Investment', 'Saving/Investment'],
      ['Other', 'Other']
    ]);
  }

  render() {
    return (
      <form className="form" onSubmit={ this.handleSubmit }>
        <div className="form-group">
          <input placeholder="How much did you spend?" className="form-control" type="text" value={this.state.amount} onChange={ (e) => { this.handleChange(e, 'amount') } } />
        </div>

        <div className="form-group">
          <input placeholder="What did you spend it on?" className="form-control" type="text" value={this.state.description} onChange={ (e) => { this.handleChange(e, 'description') } }  />
        </div>

        <div className="form-group">
          <select value={this.state.category} className="form-control" onChange={ (e) => { this.handleChange(e, 'category') } } >
            {this.categories().map((category, i) => {return(<option value={category[0]}key={i}>{category[1]}</option>)})}
          </select>
        </div>

        <div className="form-group">
          <input type="submit" className="btn btn-primary" value="Add" />
        </div>
      </form>
    );
  }
}

export default NewItemForm;
