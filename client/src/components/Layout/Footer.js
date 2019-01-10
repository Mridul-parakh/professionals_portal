import React,{Component} from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';

class footer extends Component{
 
    render(){
        const profile=(
            <div>
                <a href="https://www.linkedin.com/in/mridul-parakh-a49057158/" target="blank">Developer Profile</a>
            </div>
        )
        const {isAuthenticated}=this.props.auth;
        return(
            <footer className="bg-dark text-white mt-5 p-4 text-center">
     Jay maheshmati {new Date().getFullYear()}
     <div >{isAuthenticated?profile:null}</div>
  </footer>
        )
    }
//     return(
//         <footer className="bg-dark text-white mt-5 p-4 text-center">
//     Jay maheshmati {new Date().getFullYear()}
//   </footer>
//     )
}
footer.propTypes={
    auth:propTypes.object.isRequired
}

const mapStateToProps=state=>({
    auth:state.auth
})

export default connect(mapStateToProps,{})(footer);
