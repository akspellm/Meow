import React, { Component } from 'react';
import TranslationBox from "../../components/TranslationBox";
import Button from "../../components/Button";

class Translator extends Component {
  state = {
    chat: [];
  };

  componentDidMount() {
    this.loadChat();;
  };

  loadChat = () =>{
    API.getChat()
      .then(res =>
        this.setState({chat: res.data})
      )
      .catch(err => console.log(err))
  };

  getPhrase = () => {
    const random = 
  }

  render() {
    return (
      <div>
        <TranslationBox>
          <h2 className="translation-text">Hello!</h2>
        </TranslationBox>
        <Button />
      </div>
      )}
};

export default Translator;
