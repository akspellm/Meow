import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions';

import Nav from "./Nav";
import Jumbotron from "./Jumbotron";
import Main from "../pages/Main";
import About from "../pages/About";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    // this.props.fetchChat();
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
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
};

export default connect(null, actions)(App);
