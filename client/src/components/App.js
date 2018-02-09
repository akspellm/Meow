import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions';

import Nav from "./Nav";
import Jumbotron from "./Jumbotron";
import Main from "../pages/Main";
import About from "../pages/About";
import Profile from "../pages/Profile";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav />
            <Jumbotron />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/login" component={Main} />
              <Route exact path="/about" component={About} />
              <Route exact path="/profile" component={Profile} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
};

export default connect(null, actions)(App);
