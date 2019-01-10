import {GET_ERROR} from './types';
import {SET_CURRENT_USER} from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

export const registeruser=(userData,history)=>dispatch=>{
    
    axios.post('/api/users/register',userData)
        .then(res => history.push('/login'))
        .catch(err => dispatch({
            type:GET_ERROR,
            payload:err.response.data
        }))
}



export const loginUser=(userData)=>dispatch=>{
    axios.post('/api/users/login',userData)
    .then(res=>{
        const {token}=res.data;
        localStorage.setItem('jwtToken',token);

        setAuthToken(token);
        const decode =jwt_decode(token);
        
        dispatch(setCurrentUser(decode));

    }).catch(err=>dispatch({
        type:GET_ERROR,
        payload:err.response.data
    }))
}

export const setCurrentUser=(decode)=>{
   return{
    type:SET_CURRENT_USER,
    payload:decode
   }
}

export const logoutUser=()=>dispatch=>{
    localStorage.removeItem('jwtToken');

    setAuthToken(false);
    dispatch(setCurrentUser({}));
}