import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../Spinner/spinner';
import LinkItems from './LinkItems';

class Link extends Component {
    constructor(props){
        super(props);
        this.state={
            links:null
        }
    }
    componentDidMount(){
        // var =this.state.link;
        axios.get('https://api.telegram.org/bot761372645:AAGT6qA3LNdDemSODmDkC-Ev3AXf9DEvhTM/getUpdates')
        .then(res=>{
          this.setState({
            links:res.data.result
          })
          // console.log(res.data.result);
          // var linkdata=this.state.links;
          // const datas=res.data.result.map(link=>
           
          //   console.log(link)
          //   );
          // console.log(res.data.result[0].message.text);
          
         
        })
        
        
    }
  render() {
    let datalink;
    const links=this.state.links;
    if(this.state.links===null){
      datalink=<Spinner/>
    }
    else{
      
     datalink=links.map(link=><LinkItems text={link.message.text} key={link.message.message_id} caption={link.message.caption}/>);
    }
    let check;
    if(links!==null)
    check=<h1  style={{color:"green"}} className="ml-4">  Links will be updated every 24 hours! <b  style={{color:"red"}}>Do it Fast!</b></h1>
   else{
    check= <h1 style={{color:"green"}} className="ml-4">  Links will be updated Soon...</h1>
   }
    return (
      
      <div>
        {check}
        {datalink}
      </div>
    )
  }
}


export default Link;