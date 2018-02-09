import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchChatList } from '../../actions';

import "./ChatList.css";

class ChatList extends Component {
  componentDidMount() {
    this.props.fetchChatList();
  }

  renderChatList() {
    console.log(this.chatList)
    return this.props.chatList.reverse().map(chat => {
      return (
        <div>
          <tr>
            <td>{chat.date}</td>
            <td>{chat.chat}</td>
          </tr>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Chat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wed Feb 09 2018</td>
              <td>Hello!</td>
            </tr>
            <tr>
              <td>Wed Feb 09 2018</td>
              <td>Scratch my head!</td>
            </tr>
            <tr>
              <td>Wed Feb 09 2018</td>
              <td>Im hungry!</td>
            </tr>
            <tr>
              <td>Wed Feb 09 2018</td>
              <td>Scratch my head!</td>
            </tr>
            <tr>
              <td>Wed Feb 09 2018</td>
              <td>Lets cuddle!</td>
            </tr>
            <tr>
              <td>Wed Feb 09 2018</td>
              <td>Hello!</td>
            </tr>
            <tr>
              <td>Wed Feb 09 2018</td>
              <td>Lets cuddle!</td>
            </tr>
            <tr>
              <td>Wed Feb 09 2018</td>
              <td>Bow before me human</td>
            </tr>
            <tr>
              <td>Wed Feb 09 2018</td>
              <td>Hello!</td>
            </tr>
            <tr>
              <td>Wed Feb 09 2018</td>
              <td>Im hungry!</td>
            </tr>
            <tr>
              <td>Wed Feb 09 2018</td>
              <td>Bow before me human</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}


function mapStateToProps({ chatList }) {
  return { chatList };
}

export default connect(mapStateToProps, { fetchChatList })(ChatList);
