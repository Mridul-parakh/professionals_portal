import axios from 'axios';
import {GET_ERROR,GET_CHAT, CHAT_LOADING} from './types';

export const secretChat=chatData=>dispatch=>{
    axios.post('/api/chat',chatData)
    .then(res=>dispatch({
        type:GET_CHAT,
        payload:res.data
    }))
    .catch(err=>dispatch({
        type:GET_ERROR,
        payload:err.response.data
    }))
}

export const getChat=()=>dispatch=>{
    dispatch(setChatLoading());
    axios.get('/api/chat')
    .then(res=>dispatch({
        type:GET_CHAT,
        payload:res.data
    }))
    .catch(err=>dispatch({
        type:GET_ERROR,
        payload:err.response.data
    }))
}

export const setChatLoading=()=>{
    return{
        type:CHAT_LOADING
    }
}