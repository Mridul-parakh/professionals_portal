import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../Spinner/spinner';

import './Chats.css';
import {getChat} from '../../actions/chatAction';
import ChatItems from './ChatItems';

class Chats extends Component {
    componentDidMount(){
        this.props.getChat();
    }
  render() {
      const {chat,loading}=this.props.chat;
      let chatContent;
      if(chat===null||loading||Object.keys(chat).length===0){
          chatContent=<Spinner/>
      }
      else{
          chatContent=(
              <div style={{
                height: "300px",
                overflow: "auto",
                background: "#f9f9f9"
              }}>
                  <ChatItems chat={chat} key={chat._id}/>
                  
              </div>
          );
      }
    return (
        <div className="post">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            
            {chatContent}
            </div>
            </div>
            </div>
            </div>
    )
  }
}


Chats.propTypes={
getChat:propTypes.func.isRequired,
chat:propTypes.object.isRequired
}

const mapStateToProps=state=>({
    chat:state.chat
})

export default connect(mapStateToProps,{getChat})(Chats);
