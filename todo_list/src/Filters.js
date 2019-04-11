import React, { Component } from 'react';

class Filters extends Component {
  constructor(props){
    super(props);

    this.activeTab   = this.activeTab.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  activeTab(value){
    return ((this.props.activeListName === value) ? 'active' : '');
  }

  handleClick(event, value){
    event.preventDefault();
    
    this.props.setActiveList(value);
  }

  renderNavLink(name, displayName){
    return (<a onClick={(e) => this.handleClick(e, name)} id={name} className={"nav-link " + this.activeTab(name)} href="/">{displayName}</a>);
  }

  render() {
    return (
      <ul className="nav nav-tabs nav-justified">
        <li className="nav-item">
          {this.renderNavLink('all', 'All')}
        </li>
        <li className="nav-item">
          {this.renderNavLink('active', 'Active')}
        </li>
        <li className="nav-item">
          {this.renderNavLink('completed', 'Completed')}
        </li>
      </ul>
    );
  }
}

export default Filters;
