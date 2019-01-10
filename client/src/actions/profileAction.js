import axios from 'axios';
import {PROFILE_LOADING,GET_PROFILE,CLEAR_CURRENT_PROFILE,GET_ERROR, SET_CURRENT_USER,GET_PROFILES} from './types';


export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading());
    axios
      .get('/api/profile')
      .then(res =>
        dispatch({
          type: GET_PROFILE,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_PROFILE,
          payload: {}
        })
      );
  };

  export const getProfileByHandle = (handle) => dispatch => {
    dispatch(setProfileLoading());
    axios
      .get(`/api/profile/handle/${handle}`)
      .then(res =>
        dispatch({
          type: GET_PROFILE,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_PROFILE,
          payload: null
        })
      );
  };


  export const createProfile=(profileData,history)=>dispatch=>{
    
    axios.post('/api/profile',profileData)
        .then(res => history.push('/dashboard'))
        .catch(err => dispatch({
            type:GET_ERROR,
            payload:err.response.data
        }))
}

export const deleteAccount=()=>dispatch=>{
    if(window.confirm('Are u sure want to delete yr account')){
      axios.delete('/api/profile')
      .then(res => {
        dispatch({
          type:SET_CURRENT_USER,
          payload:{}
        })
      })
      .catch(err => dispatch({
          type:GET_ERROR,
          payload:err.response.data
      }))
    }
  
}


export const addExperience=(expdata,history)=>dispatch=>{
    axios.post('/api/profile/experience',expdata)
    .then(res=>history.push('/dashboard'))
    .catch(err => dispatch({
        type:GET_ERROR,
        payload:err.response.data
    }))
}
export const addEducation=(expdata,history)=>dispatch=>{
    axios.post('/api/profile/education',expdata)
    .then(res=>history.push('/dashboard'))
    .catch(err => dispatch({
        type:GET_ERROR,
        payload:err.response.data
    }))
}

export const deleteExperience = id => dispatch => {
    axios
      .delete(`/api/profile/experience/${id}`)
      .then(res =>
        dispatch({
          type: GET_PROFILE,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERROR,
          payload: err.response.data
        })
      );
  };

  export const deleteEducation = id => dispatch => {
    axios
      .delete(`/api/profile/education/${id}`)
      .then(res =>
        dispatch({
          type: GET_PROFILE,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERROR,
          payload: err.response.data
        })
      );
  };

  export const getProfiles = () => dispatch => {
    axios
      .get("/api/profile/all")
      .then(res =>
        dispatch({
          type: GET_PROFILES,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type:GET_PROFILES,
          payload:null
        })
      );
  };

export const setProfileLoading=()=>{
    return{
        type:PROFILE_LOADING
    }
}

export const clearCurrentProfile=()=>{
    return{
        type:CLEAR_CURRENT_PROFILE
    }
}