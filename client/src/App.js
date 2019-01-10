import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import PrivateRoute from './components/comman/privateRoute';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Landing from './components/Layout/Landing';
import Register from './components/auth/register';
import Login from './components/auth/login';
import CreateProfile from './components/auth/create_profile/create_profile';
import EditProfile from './components/auth/edit_profile/edit_profile';
import AddExperience from './components/auth/AddExperience/AddExperience';
import AddEducation from './components/auth/AddEducation/AddEducation';
import Profiles from './components/Profiles/Profiles';
import Profile from './components/Profile/Profile';
import Posts from './components/posts/Posts'; 
import Post from './components/Post/Post';
import Dashboard from './components/dashboard/dashboard';
import Links from './components/Links/Link';
import Chat from './components/Chat/Chat';
import './App.css';



class App extends Component {
  render() {
    return (
      
         <Router>
        <div className="">
       <Navbar/>
       <Route exact path='/' component={Landing}/>
       <div className="container">
          <Route exact path='/register' component={Register}/>
          <Route exact path='/login' component={Login}/>
          {/* <Route exact path='/profiles' component={Profiles}/> */}
          {/* <Route exact path='/profile/:handle' component={Profile}/> */}
          <Switch>
          <PrivateRoute exact path='/chat' component={Chat}/>
          </Switch>
          <Switch>
          <PrivateRoute exact path='/links' component={Links}/>
          </Switch>
          <Switch>
          <PrivateRoute exact path='/profile/:handle' component={Profile}/>
          </Switch>
          <Switch>
          <PrivateRoute exact path='/profiles' component={Profiles}/>
          </Switch>
          <Switch>
          <PrivateRoute exact path='/dashboard' component={Dashboard}/>
          </Switch>
          <Switch>
          <PrivateRoute exact path='/create-profile' component={CreateProfile}/>
          </Switch>
          <Switch>
          <PrivateRoute exact path='/edit-profile' component={EditProfile}/>
          </Switch>
          <Switch>
          <PrivateRoute exact path='/add-experience' component={AddExperience}/>
          </Switch>
          <Switch>
          <PrivateRoute exact path='/add-education' component={AddEducation}/>
          </Switch>
          <Switch>
          <PrivateRoute exact path='/feed' component={Posts}/>
          </Switch>
          <Switch>
          <PrivateRoute exact path='/post/:id' component={Post}/>
          </Switch>
          
       </div>
       <Footer/>
      </div>
      </Router>    
      
    );
  }
}

export default App;
