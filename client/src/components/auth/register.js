import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import propTypes from 'prop-types';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {registeruser} from '../../actions/authActions';

class register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        }
        this.submitHandler=this.submitHandler.bind(this)
    }
    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    submitHandler(event) {
        event.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }
        this.props.registeruser(newUser,this.props.history);
       
     
    }
    componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/dashboard');
        }
    }
    componentWillReceiveProps(nextProps){
        
        if(nextProps.error){
            this.setState({errors:nextProps.error});
        }
    }
    render() {
       
        const errors = this.state.errors;
     

        return (
            <div className="register">
           
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                        <i style={{color:"red"}}>(GUIDLINE : This website Only for students...)</i>
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">Create your DevConnector account</p>
                            <form noValidate onSubmit={this.submitHandler}>
                                <div className="form-group">
                                    <input type="text" className={classnames('form-control form-control-lg', {
                                        'is-invalid': errors.name
                                    })}
                                        placeholder="Name" name="name"
                                        value={this.state.name}
                                        onChange={(event) => this.changeHandler(event)}
                                    />
                                    {errors.name && (
                                        <div className="invalid-feedback">{errors.name}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input type="email" className={classnames('form-control form-control-lg', { 'is-invalid': errors.email })}
                                        placeholder="Email Address" name="email"
                                        value={this.state.email}
                                        onChange={(event) => this.changeHandler(event)} />
                                    {errors.email && (
                                        <div className="invalid-feedback">{errors.email}</div>
                                    )}
                                    {/* <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small> */}
                                </div>
                                <div className="form-group">
                                    <input type="password" className={classnames('form-control form-control-lg', { 'is-invalid': errors.password })}
                                        placeholder="Password" name="password"
                                        value={this.state.password}
                                        onChange={(event) => this.changeHandler(event)} />
                                    {errors.password && (
                                        <div className="invalid-feedback">{errors.password}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input type="password" className={classnames('form-control form-control-lg', { 'is-invalid': errors.password2 })}
                                        placeholder="Confirm Password" name="password2" value={this.state.password2}
                                        onChange={(event) => this.changeHandler(event)} />
                                    {errors.password2 && (
                                        <div className="invalid-feedback">{errors.password2}</div>
                                    )}
                                </div>
                                <input type="submit" className="btn btn-success btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
                <i style={{color:"red"}}>If u want an profile image then signup in GRAVATAR and upload yr image </i><a href="http://en.gravatar.com/">here</a>
            </div>
        )
    }
}

register.propTypes={
    registeruser:propTypes.func.isRequired,
    auth:propTypes.object.isRequired,
    error:propTypes.object.isRequired
}
const mapStateToProps=(state)=>({
   auth:state.auth,
   error:state.error
});


export default connect(mapStateToProps,{registeruser})(withRouter(register));