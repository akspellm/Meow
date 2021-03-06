import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import "./Nav.css";

class Nav extends Component {
  renderContent() {

    switch (this.props.auth) {
      case null:
        return;
      case false:
        return;
      default:
        return [
          <li className="profpic"><img src={this.props.auth.photo} alt="" /></li>,
          <li><Link to="/profile">Profile</Link></li>,
          <li><a href="/api/logout">Logout</a></li>
        ]
    }
  }

  render() {
    return (
    <nav className="navbar navbar-inverse navbar-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="collapsed navbar-toggle">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" /> <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a href="/" className="navbar-brand">
            Lets Chat Meow!
          </a>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
              {this.renderContent()}
          </ul>
        </div>
      </div>
    </nav>
  )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Nav)
