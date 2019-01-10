const validator = require('validator');
const isEmpty =require('./is-empty') ;

module.exports=function validateExperienceInput(data){
  let error={};
 
  data.title=!isEmpty(data.title) ?data.title :'';
  data.company=!isEmpty(data.company) ?data.company:'';
  data.from=!isEmpty(data.from) ?data.from :'';
  
 
  if(validator.isEmpty(data.title)){
    error.title=" title fielf is empty"; 
  }
  if(validator.isEmpty(data.company)){
    error.company=" company fielf is empty"; 
  }
  if(validator.isEmpty(data.from)){
    error.from=" from fielf is empty"; 
  }

  return{
    error,
      isValid:isEmpty(error)
  }
      
  
}