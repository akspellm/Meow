import React, { Component } from 'react';
import { connect } from 'react-redux';

import Translator from "../../components/Translator"
import Login from "../../components/Login"

import "./main.css";

class Main extends Component {


  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <Login />;
      default:
        return <Translator />;
    }
  }

  render() {
    return (
      <div>
        {this.renderContent()};
      </div>
  )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Main)
