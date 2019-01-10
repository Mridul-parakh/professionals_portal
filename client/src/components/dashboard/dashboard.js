import React, { Component } from 'react';
import propTypes from 'prop-types';
import Spinner from '../Spinner/spinner';
import {Link} from 'react-router-dom';
import ProfileAction from './ProfileAction';
import Experience from './Experience';
import Education from './Education';
// import classnames from 'classnames';
// import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getCurrentProfile,deleteAccount} from '../../actions/profileAction';

class dashboard extends Component {
    componentDidMount(){
        this.props.getCurrentProfile();
    }
    deleteHandler=()=>{
      this.props.deleteAccount();
    }
  render() {
    const {user} =this.props.auth;
    const {profile,loading}=this.props.profile;
    let dashboardContent;
    if(profile===null||loading){
      dashboardContent=<Spinner/>
    }
    else{
      if(Object.keys(profile).length>0){
        dashboardContent=(
          <div>
            <p className="lead text-muted">welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link></p>
            <ProfileAction/>
            <Experience experience={profile.experience}/>
            <Education education={profile.education}/>
            <div style={{marginBottom:'60px'}}>
                <button onClick={()=>this.deleteHandler()} className="btn btn-danger">Delete My Account</button>
            </div>
          </div>
        )
      }
      else{
        dashboardContent=(
          <div>
            <p className="lead text-muted">welcome {user.name}</p>
            <p>you havn't created your profile yet</p>
            <Link to="/create-profile" className="btn btn-lg btn-success">create profile</Link>
            
           
          </div>
        )
      }
    }
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
          <div className="col-md-12">
            <h1 className="display-4">dashboard</h1>
            {dashboardContent}
          </div>
          </div>
        </div>
      </div>
    )
  }
}

dashboard.propTypes={
  getCurrentProfile:propTypes.func.isRequired,
  auth:propTypes.object.isRequired,
  profile:propTypes.object.isRequired
}
const mapStateToProps=state=>({
  profile:state.profile,
  auth:state.auth
})

export default connect(mapStateToProps,{getCurrentProfile,deleteAccount})(dashboard);