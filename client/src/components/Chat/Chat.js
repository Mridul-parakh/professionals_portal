import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import {withRouter} from 'react-router-dom';
// import Spinner from '../Spinner/spinner';
import Chats from './Chats';
import {secretChat} from '../../actions/chatAction';

class Chat extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      message:'',
      error:{}
    }
    this.submitHandler=this.submitHandler.bind(this);
    
  }

  submitHandler(event) {
    event.preventDefault();
    const newMessage = {
        name: this.state.name,
        message:this.state.message
    }
   
    this.props.secretChat(newMessage);
    window.location.reload();
    
   
 
}

changeHandler = (event) => {
  this.setState({ [event.target.name]: event.target.value })
}
  componentWillReceiveProps(nextProps){
        
    if(nextProps.error){
        this.setState({error:nextProps.error});
        
    }
}

  render() {
    const error = this.state.error;
 
    return (<div className="row">
    <div className="col-md-3">
      <h6 style={{color:"red"}}>This chat is hidden for all . U can type anything here there is no restriction.
         u can release your frustration which u r taken from your ...! U can express your feeling too(propose)</h6>
    </div>
    <div className="col-md-9">
              <div className="chat">
        <h2>Online hidden Chat</h2>
        <Chats/>
        <div className="chat-window">
            <div className="output"></div>
            <div className="feedback"></div>
        </div>
        <input className={classnames('form-control form-control-lg', {
                                        'is-invalid': error.name
                                    })} type="text" placeholder="enter yr name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={(event) => this.changeHandler(event)}
                                    /><i style={{color:"red"}}>Name cannot be empty ! U can use any name!</i>
                                    {error.name && (
                                        <div className="invalid-feedback">{error.name}</div>
                                    )}
                                    
        <input className={classnames('form-control form-control-lg', {
                                        'is-invalid': error.message
                                    })} type="text" placeholder="Type message..."
                                   name="message"
                                    value={this.state.message}
                                    onChange={(event) => this.changeHandler(event)}
                                    /><i style={{color:"red"}}>This message must be more than 2 and less than 300 charactor </i>
                                    {error.message && (
                                        <div className="invalid-feedback">{error.message}</div>
                                    )}
        <input type="submit" className="btn btn-success btn-block mt-4" onClick={this.submitHandler} />
    </div>
    </div>
    </div>
    )
  }
}

Chat.propTypes={
  secretChat:propTypes.func.isRequired,
  error:propTypes.object.isRequired
}

const mapStateToProps=state=>({
error:state.error
})

export default connect(mapStateToProps,{secretChat})(withRouter(Chat));
