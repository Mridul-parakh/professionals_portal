import React, { Component } from 'react';
import propTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {getCurrentProfile,createProfile} from '../../../actions/profileAction';
import isEmpty from '../../../validation/isEmpty';

 class EditProfile extends Component {
   constructor(props){
     super(props);
    this.state={
      displaySocialInputs: false,
      handle: '',
      company: '',
      website: '',
      location: '',
      status: '',
      skills: '',
      githubusername: '',
      bio: '',
      twitter: '',
      facebook: '',
      linkedin: '',
      youtube: '',
      instagram: '',
      errors: {}
    }
    this.submitHandler=this.submitHandler.bind(this);
   }
   changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
}
   submitHandler(event) {
    event.preventDefault();
    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    }
    // this.props.registeruser(newUser,this.props.history);
    this.props.createProfile(profileData,this.props.history);
   console.log(profileData);
 
}
componentWillReceiveProps(nextProps){
        
  if(nextProps.errors){
      this.setState({errors:nextProps.errors});
      
  }
  if(nextProps.profile.profile){
      const profile=nextProps.profile.profile;
        const skillsCSV=profile.skills.join(',');
        profile.company=!isEmpty(profile.company)?profile.company:'';
        profile.website=!isEmpty(profile.website)?profile.website:'';
        profile.location=!isEmpty(profile.location)?profile.location:'';
        profile.githubusername=!isEmpty(profile.githubusername)?profile.githubusername:'';
        profile.bio=!isEmpty(profile.bio)?profile.bio:'';
        profile.social=!isEmpty(profile.social)?profile.social:{};
        profile.twitter=!isEmpty(profile.social.twitter)?profile.social.twitter:'';
        profile.facebook=!isEmpty(profile.social.facebook)?profile.social.facebook:'';
        profile.linkedin=!isEmpty(profile.social.linkedin)?profile.social.linkedin:'';
        profile.youtube=!isEmpty(profile.social.youtube)?profile.social.youtube:'';
        profile.instagram=!isEmpty(profile.social.instagram)?profile.social.instagram:'';

        this.setState({
            handle: profile.handle,
      company: profile.company,
      website: profile.website,
      location: profile.location,
      status: profile.status,
      skills: skillsCSV,
      githubusername: profile.githubusername,
      bio: profile.bio,
      twitter: profile.twitter,
      facebook: profile.facebook,
      linkedin: profile.linkedin,
      youtube: profile.youtube,
      instagram: profile.instagram
        })
  }
}
componentDidMount(){
    this.props.getCurrentProfile();
}
  render() {

    const {errors,displaySocialInputs} = this.state;
    var display="";
    if(displaySocialInputs){
       display=(<div><div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fab fa-instagram"></i>
                </span>
              </div>
              <input type="text" className={classnames('form-control form-control-lg', {
                                        'is-invalid': errors.instagram
                                    })} placeholder="Instagram Page URL" name="instagram"
                                    value={this.state.instagram}
                                        onChange={(event) => this.changeHandler(event)}
                                    />{errors.instagram && (
                                      <div className="invalid-feedback">{errors.instagram}</div>)}
            </div>
            
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fab fa-twitter"></i>
                </span>
              </div>
              <input type="text" className={classnames('form-control form-control-lg', {
                                        'is-invalid': errors.twitter
                                    })} placeholder="Twitter Profile URL" name="twitter"
                                    value={this.state.twitter}
                                        onChange={(event) => this.changeHandler(event)}
                                    />
            {errors.twitter && (
                                        <div className="invalid-feedback">{errors.twitter}</div>)}
                                        </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fab fa-facebook"></i>
                </span>
              </div>
              <input type="text" className={classnames('form-control form-control-lg', {
                                        'is-invalid': errors.facebook
                                    })} placeholder="Facebook Page URL" name="facebook"
                                    value={this.state.facebook}
                                        onChange={(event) => this.changeHandler(event)}
                                    />
            {errors.facebook && (
                                        <div className="invalid-feedback">{errors.facebook}</div>)}
                                    </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fab fa-linkedin"></i>
                </span>
              </div>
              <input type="text" className={classnames('form-control form-control-lg', {
                                        'is-invalid': errors.linkedin
                                    })} placeholder="Linkedin Profile URL" name="linkedin"
                                    value={this.state.linkedin}
                                        onChange={(event) => this.changeHandler(event)}
                                    />
            {errors.linkedin && (
                                        <div className="invalid-feedback">{errors.linkedin}</div>)}
                                        </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fab fa-youtube"></i>
                </span>
              </div>
              <input type="text" className={classnames('form-control form-control-lg', {
                                        'is-invalid': errors.youtube
                                    })} placeholder="YouTube Channel URL" name="youtube"
                                    value={this.state.youtube}
                                        onChange={(event) => this.changeHandler(event)}
                                    />
            {errors.youtube && (
                                        <div className="invalid-feedback">{errors.youtube}</div>)}
                                        </div>
            
            </div>)
    }

    
    return (
      <div className="create-profile">
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <a href="dashboard" className="btn btn-success">
            Go Back
          </a>
          <h1 className="display-4 text-center">Create Your Profile</h1>

          <small className="d-block pb-3">* = required field</small>
          <form noValidate onSubmit={this.submitHandler}>
            <div className="form-group">
              <input type="text" className={classnames('form-control form-control-lg', {
                                        'is-invalid': errors.handle
                                    })}
               placeholder="* Profile handle" name="handle" required
               value={this.state.handle}
                                        onChange={(event) => this.changeHandler(event)}
               />
               {errors.handle && (
                                        <div className="invalid-feedback">{errors.handle}</div>)}
              <small className="form-text text-muted">A unique handle for your profile URL. Your full name, company name, nickname, etc (This CAN'T be changed later)</small>
            </div>
            <div className="form-group">
              <select className={classnames('form-control form-control-lg', {
                                        'is-invalid': errors.status
                                    })} name="status"
                                    value={this.state.status}
                                        onChange={(event) => this.changeHandler(event)}
                                    >
                <option value="0">* Select Professional Status</option>
                <option value="Developer">Developer</option>
                <option value="Junior Developer">Junior Developer</option>
                <option value="Senior Developer">Senior Developer</option>
                <option value="Manager">Manager</option>
                <option value="Student or Learning">Student or Learning</option>
                <option value="Instructor">Instructor or Teacher</option>
                <option value="Intern">Intern</option>
                <option value="Other">Other</option>
              </select>
              {errors.status && (
                                        <div className="invalid-feedback">{errors.status}</div>)}
              <small className="form-text text-muted">Give us an idea of where you are at in your career</small>
            </div>
            <div className="form-group">
              <input type="text" className="form-control form-control-lg"
              
              placeholder="Company" name="company" 
              value={this.state.company}
                                        onChange={(event) => this.changeHandler(event)}/>
              <small className="form-text text-muted">Could be your own company or one you work for</small>
            </div>
            <div className="form-group">
              <input type="text" className={classnames('form-control form-control-lg', {
                                        'is-invalid': errors.website
                                    })} placeholder="Website" name="website"
                                    value={this.state.website}
                                        onChange={(event) => this.changeHandler(event)}
                                    />
                                    {errors.website && (
                                        <div className="invalid-feedback">{errors.website}</div>)}
              <small className="form-text text-muted">Could be your own or a company website</small>
            </div>
            <div className="form-group">
              <input type="text" className="form-control form-control-lg" placeholder="Location" name="location" 
              value={this.state.location}
              onChange={(event) => this.changeHandler(event)}
              />
              <small className="form-text text-muted">City & state suggested (eg. Boston, MA)</small>
            </div>
            <div className="form-group">
              <input type="text" className={classnames('form-control form-control-lg', {
                                        'is-invalid': errors.skills
                                    })} placeholder="Skills" name="skills" 
                                    value={this.state.skills}
                                        onChange={(event) => this.changeHandler(event)}
                                    />
                                    {errors.skills && (
                                        <div className="invalid-feedback">{errors.skills}</div>)}
              <small className="form-text text-muted">Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)</small>
            </div>
            <div className="form-group">
              <input type="text" className="form-control form-control-lg" placeholder="Github Username"
               name="githubusername" 
               value={this.state.githubusername}
                                        onChange={(event) => this.changeHandler(event)}/>
              <small className="form-text text-muted">If you want your latest repos and a Github link, include your username</small>
            </div>
            <div className="form-group">
              <textarea className="form-control form-control-lg" placeholder="A short bio of yourself" name="bio"
              value={this.state.bio}
              onChange={(event) => this.changeHandler(event)}
              ></textarea>
              <small className="form-text text-muted">Tell us a little about yourself</small>
            </div>

            <div className="mb-3">
              <button type="button" className="btn btn-light" 
              onClick={() => {
                this.setState(prevState => ({
                  displaySocialInputs: !prevState.displaySocialInputs
                }));
              }}>Add Social Network Links</button>
              <span className="text-muted">Optional</span>
            </div>

            
                                    {display}
            
            <input type="submit" className="btn btn-info btn-block mt-4 bg-success" />
          </form>
        </div>
      </div>
    </div>
  </div>
    )
  }
}


EditProfile.propTypes={
getCurrentProfile:propTypes.func.isRequired,
createProfile:propTypes.func.isRequired,
profile:propTypes.object.isRequired,
errors:propTypes.object.isRequired
}

const mapStateToProps=state=>({
  profile:state.profile,
  errors:state.error
})

export default  connect(mapStateToProps,{getCurrentProfile,createProfile})(withRouter(EditProfile));
