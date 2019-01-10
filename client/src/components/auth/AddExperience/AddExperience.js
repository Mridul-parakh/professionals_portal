import React, { Component } from 'react';
import propTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {addExperience} from '../../../actions/profileAction';

class AddExperience extends Component {
  constructor(props){
    super(props);
    this.state={
      company: '',
      title: '',
      location: '',
      from: '',
      to: '',
      current: false,
      description: '',
      errors: {},
      disabled: false
    }
  }
  submitHandler=(event) =>{
    event.preventDefault();
    const experienceData={
      company: this.state.company,
      title: this.state.title,
      location: this.state.location,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description
    }
    // console.log(experienceData);
    this.props.addExperience(experienceData,this.props.history);
   
 
}
onchangedHandler=()=>{
  this.setState({
    current:!this.state.current,
    disabled:!this.state.disabled
  })
}
  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
}
  componentWillReceiveProps(nextProps){
        
    if(nextProps.errors){
        this.setState({errors:nextProps.errors});
        
    }
  }
  render() {
    const {errors} = this.state;
    return (
      
        <div className="section add-experience">
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <a href="dashboard" className="btn btn-success">
            Go Back
          </a>
          <h1 className="display-4 text-center">Add Your Experience</h1>
          <p className="lead text-center">Add any developer/programming positions that you have had in the past</p>
          <small className="d-block pb-3">* = required field</small>
          <form onSubmit={(e)=>this.submitHandler(e)}>
            <div className="form-group">
              <input type="text" className={classnames('form-control form-control-lg', {
                                        'is-invalid': errors.title})}
               placeholder="* Job Title" name="title" 
               value={this.state.title}
                onChange={(event) => this.changeHandler(event)}
               />
               {errors.title && (
                                        <div className="invalid-feedback">{errors.title}</div>)}
            </div>
            <div className="form-group">
              <input type="text" className={classnames('form-control form-control-lg', {
                                        'is-invalid': errors.company})} placeholder="* Company"
               name="company"
               value={this.state.company}
                onChange={(event) => this.changeHandler(event)}  />
                {errors.company && (
                                        <div className="invalid-feedback">{errors.company}</div>)}
            </div>
            <div className="form-group">
              <input type="text" className={classnames('form-control form-control-lg', {
                                        'is-invalid': errors.location})}
               placeholder="Location" name="location"
               value={this.state.location}
                onChange={(event) => this.changeHandler(event)} />
                {errors.location && (
                                        <div className="invalid-feedback">{errors.location}</div>)}
            </div>
            <h6>From Date</h6>
            <div className="form-group">
              <input type="date" className={classnames('form-control form-control-lg', {
                                        'is-invalid': errors.from})} name="from"
              value={this.state.from}
              onChange={(event) => this.changeHandler(event)} />
              {errors.from && (
                                        <div className="invalid-feedback">{errors.from}</div>)}
            </div>
            <h6>To Date</h6>
            <div className="form-group">
              <input type="date" className={classnames('form-control form-control-lg', {
                                        'is-invalid': errors.to})} name="to"
              value={this.state.to}
              onChange={(event) => this.changeHandler(event)} 
              disabled={this.state.disabled?'disabled':''}
              />
              {errors.to && (
                                        <div className="invalid-feedback">{errors.to}</div>)}
            </div>
            <div className="form-check mb-4">
              <input className="form-check-input" type="checkbox" name="current" 
               id="current"
               onChange={()=>this.onchangedHandler()}
               />
              <label className="form-check-label" >
                Current Job
              </label>
            </div>
            <div className="form-group">
              <textarea className={classnames('form-control form-control-lg', {
                                        'is-invalid': errors.description})} placeholder="Job Description"
               name="description"
               value={this.state.description}
                onChange={(event) => this.changeHandler(event)}
               ></textarea>
               {errors.description && (
                                        <div className="invalid-feedback">{errors.description}</div>)}
              <small className="form-text text-muted">Some of your responsabilities, etc</small>
            </div>
            <input type="submit" className="btn btn-success btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>

      
    )
  }
}

AddExperience.propTypes={
  addExperience:propTypes.func.isRequired,
  errors:propTypes.object.isRequired
}

const mapStateToProps=state=>({
  profile:state.profile,
  errors:state.error
})

export default connect(mapStateToProps,{addExperience})(withRouter(AddExperience));