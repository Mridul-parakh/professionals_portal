const validator = require('validator');
const isEmpty =require('./is-empty') ;

module.exports=function validateProfileInput(data){
  let error={};
 
  data.handle=!isEmpty(data.handle) ?data.handle :'';
  data.status=!isEmpty(data.status) ?data.status:'';
  data.skills=!isEmpty(data.skills) ?data.skills:'';
  

  
  if(!validator.isLength(data.handle,{min:2,max:40})){
      error.handle="minimum length 6 and max 30";
  }
  if(validator.isEmpty(data.handle)){
    error.handle=" handle fielf is required"; 
  }
  if(validator.isEmpty(data.status)){
    error.status=" status fielf is required"; 
  }
  if(validator.isEmpty(data.skills)){
    error.skills=" skills fielf is required"; 
  }
  if (!isEmpty(data.website)) {
    if (!validator.isURL(data.website)) {
      errors.website = 'Not a valid URL';
    }
  
  }
 
  if(!isEmpty(data.youtube)){
    
    if(!validator.isURL(data.youtube)){
      error.youtube=" invalid youtube"; 
    }
 
}
if(!isEmpty(data.twitter)){
    if(!validator.isURL(data.twitter)){
      error.twitter=" invalid twitter"; 
    }
 
}
if(!isEmpty(data.facebook)){
    if(!validator.isURL(data.facebook)){
      error.facebook=" invalid facebook"; 
    }
 
}
if(!isEmpty(data.linkedin)){
    if(!validator.isURL(data.linkedin)){
      error.linkedin=" invalid linkedin"; 
    }
 
}
if(!isEmpty(data.instagram)){
    if(!validator.isURL(data.instagram)){
      error.instagram=" invalid instagram"; 
    }
 
}



  return{
    error,
      isValid:isEmpty(error)
  }
      
  
}