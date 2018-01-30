import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import TranslationBox from "./components/TranslationBox";
import Button from "./components/Button";

const App = () =>

  <div>
    <Nav />
    <Jumbotron />
    <TranslationBox>
      <h2 className="translation-text">Hello!</h2>
    </TranslationBox>
    <Button />
  </div>

export default App;
