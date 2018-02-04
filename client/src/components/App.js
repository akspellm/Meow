import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions';

import Nav from "./Nav";
import Jumbotron from "./Jumbotron";
import Translator from "../pages/Translator";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  };

  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav />
            <Jumbotron />
            <Switch>
              <Route exact path="/" component={Translator} />
            </Switch>
          </div>
        </Router>;
      </div>
    )
  }
};

export default connect(null, actions) (App)
