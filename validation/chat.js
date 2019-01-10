const validator = require('validator');
const isEmpty =require('./is-empty') ;

module.exports=function validateChatInput(data){
  let error={};
 
  data.name=!isEmpty(data.name) ?data.name :'';
  data.message=!isEmpty(data.message)?data.message:'';

  if(!validator.isLength(data.message,{min:2,max:300})){
    error.message="minimum length of message 2 and max 30";
}
if(validator.isEmpty(data.message)){
    error.message=" message fielf is empty"; 
  }
if(validator.isEmpty(data.name)){
    error.name=" name fielf is empty"; 
  }

  
  




  return{
    error,
      isValid:isEmpty(error)
  }
      
  
}