import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/isEmpty';
import './ProfileItems.css';
import propTypes from 'prop-types';

class ProfileItem extends Component {
  constructor(props){
    super(props);
    this.state={
      online:false
    }
  }
  componentDidMount(){
    if(this.props.auth.isAuthenticated){
       if(this.props.auth.user.id===this.props.profile.user._id)
        this.setState({online:true})
    }
}
  render() {
    const { profile } = this.props;
  let online;
  let k="";
  if(this.state.online){
    online=<h1 className='dot'>{k}</h1>
  }
    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-2">
            <img src={profile.user.avatar} alt="" className="rounded-circle" />
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{profile.user.name}</h3>
            <p>
              {profile.status}{' '}
              {isEmpty(profile.company) ? null : (
                <span>at {profile.company}</span>
              )}
            </p>
            <p>
              {isEmpty(profile.location) ? null : (
                <span>{profile.location}</span>
              )}
            </p>
            <Link to={`/profile/${profile.handle}`} className="btn btn-success">
              View Profile
            </Link>
          </div> 
          <div className="col-md-4 d-none d-md-block">
            <h4>Skill Set</h4> 
            <ul className="list-group">
              {profile.skills.slice(0, 4).map((skill, index) => (
                <li key={index} className="list-group-item">
                  <i className="fa fa-check pr-1" />
                  {skill}
                </li>
              ))}
            </ul>
          
          </div>
         
        </div>
        { online}
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile:propTypes.object.isRequired,
  auth:propTypes.object.isRequired
};



export default ProfileItem;
