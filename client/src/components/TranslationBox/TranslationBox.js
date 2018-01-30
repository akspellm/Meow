import React from "react";
import "./TranslationBox.css";

const TranslationBox = ({children}) =>
  <div className="container translation-box">
    <h1 className="translation-text translation-head">Your Cat Says:</h1>
    {children}
  </div>

export default TranslationBox;
