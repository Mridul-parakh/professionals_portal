import React, { Component } from 'react'
import propTypes from 'prop-types';
import classnames from 'classnames';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/authActions';

class login extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            password:'',
            password2:'',
            errors:{}
        }
    }
    changeHandler=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    submitHandler=(event)=>{
        event.preventDefault();
        const userData={
            email:this.state.email,
            password:this.state.password           
        }
        this.props.loginUser(userData);
    }
    componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/dashboard');
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.auth.isAuthenticated){
            this.props.history.push('/dashboard');
        }
        if(nextProps.errors){
            this.setState({errors:nextProps.errors});
        }
    }
    render() {
        const errors = this.state.errors;
        return (
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                        <i style={{color:"red"}}>(GUIDLINE : This website Only for students...)</i>
                            <h1 className="display-4 text-center">Log In</h1>
                            <p className="lead text-center">Sign in to your DevConnector account</p>
                            <form onSubmit={(e)=>this.submitHandler(e)}>
                                <div className="form-group">
                                    <input type="email" className={classnames('form-control form-control-lg', { 'is-invalid': errors.email })} 
                                    placeholder="Email Address" name="email"
                                    value={this.state.email}
                                    onChange={(event)=>this.changeHandler(event)} />
                                    {errors.email && (
                                        <div className="invalid-feedback">{errors.email}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input type="password" className={classnames('form-control form-control-lg', { 'is-invalid': errors.password })} 
                                    placeholder="Password" name="password" 
                                    value={this.state.password}
                                    onChange={(event)=>this.changeHandler(event)}/>
                                    {errors.password && (
                                        <div className="invalid-feedback">{errors.password}</div>
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


login.propTypes={
    loginUser:propTypes.func.isRequired,
    auth:propTypes.object.isRequired,
    errors:propTypes.object.isRequired
}
const mapStateToProps=(state)=>({
   auth:state.auth,
   errors:state.error
});


export default connect(mapStateToProps,{loginUser})(withRouter(login));