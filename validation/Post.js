const validator = require('validator');
const isEmpty =require('./is-empty') ;

module.exports=function validatePostInput(data){
  let error={};
 
  data.text=!isEmpty(data.text) ?data.text :'';
  
  
  if(!validator.isLength(data.text,{min:6,max:300})){
      error.text="minimum length of text 6 and max 30";
  }
  if(validator.isEmpty(data.text)){
    error.text=" text fielf is empty"; 
  }



  return{
    error,
      isValid:isEmpty(error)
  }
      
  
}