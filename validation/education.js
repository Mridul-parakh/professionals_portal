const validator = require('validator');
const isEmpty =require('./is-empty') ;

module.exports=function validateEducationInput(data){
  let error={};
 
  data.school=!isEmpty(data.school) ?data.school :'';
  data.degree=!isEmpty(data.degree) ?data.degree:'';
  data.fieldofstudy=!isEmpty(data.fieldofstudy) ?data.fieldofstudy:'';
  data.from=!isEmpty(data.from) ?data.from :'';
  
 
  if(validator.isEmpty(data.school)){
    error.school=" school fielf is empty"; 
  }
  if(validator.isEmpty(data.degree)){
    error.degree=" degree fielf is empty"; 
  }
  if(validator.isEmpty(data.fieldofstudy)){
    error.fieldofstudy=" fieldofstudy fielf is empty"; 
  }
  if(validator.isEmpty(data.from)){
    error.from=" from fielf is empty"; 
  }

  return{
    error,
      isValid:isEmpty(error)
  }
      
  
}