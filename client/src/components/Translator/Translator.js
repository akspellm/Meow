import React, { Component } from 'react';
import { connect } from 'react-redux';
import TranslationBox from "../../components/TranslationBox";
import Button from "../../components/Button";


class Translator extends Component {

  render() {
    return (
      <div>
        <TranslationBox>
          <h2 className="translation-text">{this.props.chat}</h2>
        </TranslationBox>
        <Button />
      </div>
      )}
};

function mapStateToProps({ chat }) {
  return { chat };
}

export default connect(mapStateToProps)(Translator);
