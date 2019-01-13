import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Spinner from '../Spinner/spinner';
import {getProfiles} from '../../actions/profileAction';
import ProfileItems from './ProfileItems';

class Profiles extends Component {
    componentDidMount(){
        this.props.getProfiles();
    }
  render() {
    const {profiles,loading}=this.props.profile;
    const {auth}=this.props;
    let profileItems;

    if(profiles===null||loading){
        profileItems=<Spinner/>
      }
      else{
       
        if(Object.keys(profiles).length>0){
            profileItems=profiles.map(profile=>(
              
                <ProfileItems key={profile._id} auth={auth} profile={profile} />
                // console.log(profile)
            ));

        }
        else{
            profileItems=<h1>profiles not found...</h1>;
        }
      }
      

     
    return (
        <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Programmers & Developers</h1>
             
              {profileItems}
              
              </div>
              </div>
              </div>
              </div>
    )
  }
}

Profiles.propTypes={
    getProfiles:propTypes.func.isRequired,
    profile:propTypes.object.isRequired,
    auth:propTypes.object.isRequired
  }
  const mapStateToProps=state=>({
    profile:state.profile,
    auth:state.auth
  })

export default connect(mapStateToProps,{getProfiles})(Profiles);