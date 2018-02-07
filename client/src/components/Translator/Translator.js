import React, { Component } from 'react';
import TranslationBox from "../../components/TranslationBox";
import Button from "../../components/Button";
import axios from "axios"


class Translator extends Component {
  constructor() {
    super();
      state = {
        chat: []
      };
  };
  componentDidMount() {
    // Get the data "soon
    console.log('mount');
    axios.get('/api/chat').then(res => {
      this.setState({chat: res.data});
      console.log(this.state.chat)
    });
  }

  render() {
    return (
      <div>
        <TranslationBox>
          <h2 className="translation-text">{this.state.chat}</h2>
        </TranslationBox>
        <Button />
      </div>
      )}
};

export default Translator;
