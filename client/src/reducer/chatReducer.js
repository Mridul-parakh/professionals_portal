import {CHAT_LOADING, GET_CHAT} from '../actions/types';

const initialiState={
    chats:[],
    chat:{},
    loading:false
}

export default function(state=initialiState ,action){
    switch(action.type){
        case GET_CHAT:
        return{
            ...state,
            chat:action.payload,
            loading:false
        }
        case CHAT_LOADING:
        return{
            ...state,
            loading:true
        }
        
        default:
        return{
            ...state
        }
    }
}