import React, { Component } from 'react';
import  './LinkItems.css';
import Linkify from 'react-linkify';
// import getUrl from 'get-urls';


class LinkItems extends Component {
    constructor(props){
        super(props);
        this.state={
            url:[]
        }

    }
    
  render() {
      var text=this.props.text;
      var caption=this.props.caption;
     
      // var url=getUrl(text)
     
      // console.log(url);
    //   var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    //  const url= text.replace(urlRegex, function(url) {
    //       return "---"+url+"---";
    //   });
    // console.log(this.state.url);
    
    return (
      <div  className="Post">
        {/* {url}
        {this.state.url} */}
        <Linkify>
        <b>{text}{caption}</b>
        </Linkify>
      </div>
    )
  }
}

export default LinkItems;