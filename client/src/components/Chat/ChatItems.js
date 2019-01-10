import React, { Component } from 'react';
import Moment from 'react-moment';


class ChatItems extends Component {
  render() {
    
        const {chat}=this.props;
        return chat.map(post=>{
            return(  
                <div key={post._id}>
                <div className="row">
                    <div className="col-md-3"><h6 style={{color:"green"}}>{post.name}</h6></div>
                    <div className="col-md-6"><b>{post.message}</b></div>
                    <div className="col-md-3"><Moment format="YYYY/MM/DD">{post.date}</Moment></div>
                </div>
                    
                </div>
            )
        })
    
  }
}

export default ChatItems;
