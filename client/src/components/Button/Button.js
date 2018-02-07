import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import "./Button.css";


class Button extends Component {

  handleChange(e) {
    e.preventDefault();
    this.props.fetchChat();
  };

  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary center-block" onClick={this.handleChange.bind(this)}>Meow</button>
        <p className="explain">Press and hold to capture your furry friends message</p>
      </div>
      )}
};


export default connect(null, actions)(Button);
