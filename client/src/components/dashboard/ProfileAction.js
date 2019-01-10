import React, { Component } from 'react';
import {Link} from 'react-router-dom';
 class ProfileAction extends Component {
  render() {
    return (
      <div>
        <div className="btn-group mb-4" role="group">
            <Link to="/edit-profile" className="btn btn-light">
              <i className="fas fa-user-circle text-success mr-1"></i> Edit Profile</Link>
            <Link to="/add-experience" className="btn btn-light">
              <i className="fab fa-black-tie text-success mr-1"></i>
              Add Experience</Link>
            <Link to="/add-education" className="btn btn-light">
              <i className="fas fa-graduation-cap text-success mr-1"></i>
              Add Education</Link>
          </div>
      </div>
    )
  }
}
export default ProfileAction;
