import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchChatList } from '../../actions';

import "./ChatList.css";

class ChatList extends Component {
  componentDidMount() {
    this.props.fetchChatList();
  }

  renderChatList() {
    console.log(this.props.chatList)
    return this.props.chatList.reverse().map(chat => {
      return (
        <div className="container">
          <h4> <strong>{chat.date}: </strong> <span className="chat-text">{chat.chat}</span></h4>
          <hr></hr>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="container">
            {this.renderChatList()}
      </div>
    );
  }
}


function mapStateToProps({ chatList }) {
  return { chatList };
}

export default connect(mapStateToProps, { fetchChatList })(ChatList);
