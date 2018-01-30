import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Translator from "./pages/Translator";

const App = () =>

  <div>
    <Router>
      <div>
        <Nav />
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={Translator} />
          <Route exact path="/Translator" component={Translator} />
        </Switch>
      </div>
    </Router>;
  </div>

export default App;
