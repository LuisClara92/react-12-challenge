import React, { Component } from 'react';

export default class TabSelector extends Component {
 
  // handleChangeTab = (event) => {
  //   const buttonId = event.target.id;
  //   this.setState({ activeId: buttonId });
  // }

  render() {
    const { activeId } = this.props;
    return (
      <div className="TabSelector">
        <button
          id="home"
          onClick={this.props.handleChangeTab}
          className={activeId === 'home' ? 'active' : ''}
        >
          Home
        </button>
        <button
          id="about"
          onClick={this.props.handleChangeTab}
          className={activeId === 'about' ? 'active' : ''}
        >
          About
        </button>
        <button
          id="contact"
          onClick={this.props.handleChangeTab}
          className={activeId === 'contact' ? 'active' : ''}
        >
          Contact
        </button>
      </div>
    );
  }
}
