import {combineReducers} from 'redux';
import chatReducer from './chatReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';
import postReducer from './postReducer';



export default combineReducers({
    chat:chatReducer,
    auth:authReducer,
    error:errorReducer,
    profile:profileReducer,
    post:postReducer
});