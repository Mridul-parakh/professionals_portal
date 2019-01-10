import React, { Component } from 'react';
import propTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {addEducation} from '../../../actions/profileAction';

class AddEducation extends Component {
    constructor(props){
        super(props);
        this.state = {
            school: '',
            degree: '',
            fieldofstudy: '',
            from: '',
            to: '',
            current: false,
            description: '',
            errors: {},
            disabled: false
          };
      }
      submitHandler=(event) =>{
        event.preventDefault();
        const eduData = {
            school: this.state.school,
            degree: this.state.degree,
            fieldofstudy: this.state.fieldofstudy,
            from: this.state.from,
            to: this.state.to,
            current: this.state.current,
            description: this.state.description
          };
      console.log(eduData)
          this.props.addEducation(eduData, this.props.history);
       
     
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
        <div className="add-education">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <a href="dashboard" className="btn btn-success">
                Go Back
              </a>
              <h1 className="display-4 text-center">Add Your Education</h1>
              <p className="lead text-center">Add any school, bootcamp, etc that you have attended</p>
              <small className="d-block pb-3">* = required field</small>
              <form onSubmit={(e)=>this.submitHandler(e)}>
                <div className="form-group">
                  <input type="text" className={classnames('form-control form-control-lg', {
                                        'is-invalid': errors.school})}
                   placeholder="* School Or Bootcamp" name="school"
                   value={this.state.school}
                onChange={(event) => this.changeHandler(event)}
                   />
                   {errors.school && (
                     <div className="invalid-feedback">{errors.school}</div>)}
                </div>
                <div className="form-group">
                  <input type="text" className={classnames('form-control form-control-lg', {
                                        'is-invalid': errors.degree})} placeholder="* Degree Or Certificate"
                                         name="degree" 
                                         value={this.state.degree}
                onChange={(event) => this.changeHandler(event)}
                                         />
                                         {errors.degree && (
                     <div className="invalid-feedback">{errors.degree}</div>)}
                </div>
                <div className="form-group">
                  <input type="text" className={classnames('form-control form-control-lg', {
                                        'is-invalid': errors.fieldofstudy})}
                                         placeholder="Field Of Study" name="fieldofstudy"
                                         value={this.state.fieldofstudy}
                onChange={(event) => this.changeHandler(event)}
                                         />
                                         {errors.fieldofstudy && (
                     <div className="invalid-feedback">{errors.fieldofstudy}</div>)}
                </div>
                <h6>From Date</h6>
                <div className="form-group">
                  <input type="date" className={classnames('form-control form-control-lg', {
                                        'is-invalid': errors.from})} name="from"
                                        value={this.state.from}
                onChange={(event) => this.changeHandler(event)}
                                        />
                                        {errors.from && (
                     <div className="invalid-feedback">{errors.from}</div>)}
                </div>
                <h6>To Date</h6>
                <div className="form-group">
                  <input type="date" className={classnames('form-control form-control-lg', {
                                        'is-invalid': errors.to})}
                                        disabled={this.state.disabled?'disabled':''}
                                        name="to" 
                                        value={this.state.to}
                onChange={(event) => this.changeHandler(event)}
                                        />
                                        {errors.to && (
                     <div className="invalid-feedback">{errors.to}</div>)}
                </div>
                <div className="form-check mb-4">
                  <input className="form-check-input" type="checkbox" name="current" 
                  onChange={()=>this.onchangedHandler()}
                  id="current" />
                  <label className="form-check-label" >
                    Current Job
                  </label>
                </div>
                <div className="form-group">
                  <textarea className={classnames('form-control form-control-lg', {
                                        'is-invalid': errors.description})}
                                         placeholder="Program Description" name="description"
                                         value={this.state.description}
                onChange={(event) => this.changeHandler(event)}
                                         ></textarea>
                                         {errors.description && (
                     <div className="invalid-feedback">{errors.description}</div>)}
                  <small className="form-text text-muted">Tell us about your experience and what you learned</small>
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

AddEducation.propTypes={
    addEducation:propTypes.func.isRequired,
    errors:propTypes.object.isRequired
  }
  
  const mapStateToProps=state=>({
    profile:state.profile,
    errors:state.error
  })

export default connect(mapStateToProps,{addEducation})(withRouter(AddEducation));