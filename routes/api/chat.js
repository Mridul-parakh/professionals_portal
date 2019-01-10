const express=require('express');
const router=express.Router();
const Chat=require('../../models/Chat');
const passport=require('passport');
const validateChatInput=require('../../validation/chat');

router.post('/',passport.authenticate('jwt',{session:false}),(req,res)=>{
    const {error,isValid}=validateChatInput(req.body);
    if(!isValid){
        return res.status(400).json(error);
    }
    Chat.findOne({user:req.user.id})
    .then(chat=>{
        const newChat={
            name:req.body.name,
            message:req.body.message
        }
       new Chat(newChat).save()
        .then(chat=>res.json(chat))
        .catch(err=>console.log(err));
    }).catch(err=>res.status(400).json(err));
    
})

router.get('/',passport.authenticate('jwt',{session:false}),(req,res)=>{
    Chat.find()
    .sort({date:-1})
    .then(chat=>{
        res.json(chat);
    })
    .catch(err=>res.status(400).json({err:"no chat found"}))
})


module.exports=router;