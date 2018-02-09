import React, { Component } from 'react';
import { connect } from 'react-redux';

import ChatList from "../../components/ChatList";

class Profile extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="greeting">Hi {this.props.auth.firstName}</h1>
        <hr></hr>
        <h3>Here are some things your cat has said:</h3>
        <ChatList />
      </div>
  )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Profile)
