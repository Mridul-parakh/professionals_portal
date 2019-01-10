const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const validator = require('validator');
const passport=require('passport');
const Post=require('../../models/Post');
const Profile=require('../../models/Profile');
const validatePostInput=require('../../validation/Post');
const validateCommentInput=require('../../validation/comment');

router.get('/test',(req,res)=>{
    res.send('posts');
});

router.get('/',(req,res)=>{
    Post.find()
    .sort({date:-1})
    .then(posts=>{
        res.json(posts);
    }).catch(err=>res.status(400).json({err:"no post found"}));
});

router.get('/:id',(req,res)=>{
    Post.findById(req.params.id)
    .then(posts=>{
        res.json(posts);
    }).catch(err=>{res.status(400).json({err:"no post find with id"})});
});

router.delete('/:id',passport.authenticate('jwt',{session:false}),(req,res)=>{
  
    Profile.findOne({user:req.user.id})
    .then(profile=>{
        
        Post.findById(req.params.id)
        .then(post=>{
            
            if(post.user.toString()!==req.user.id){
                return res.status(400).json({err:"not valid user"});
            }
        
                post.remove().then(()=>res.json({success:true}))
                .catch(()=>{res.status(400).json({err:"somthing is not correct"})});
            
         
        })
    })
});

router.post('/like/:id',passport.authenticate('jwt',{session:false}),(req,res)=>{
  
    Profile.findOne({user:req.user.id})
    .then(profile=>{
        
        Post.findById(req.params.id)
        .then(post=>{
            if(post.likes.filter(like=>like.user.toString()===req.user.id).length>0){
               return res.status(400).json({alreadylike:"user already like"});
            }
            post.likes.unshift({user:req.user.id});
            post.save().then(post=>res.json(post))
            .catch(()=>res.status().json({err:"somthing is wrong"}));  
                     
         
        })
    })
});

router.delete('/unlike/:id',passport.authenticate('jwt',{session:false}),(req,res)=>{
  
    Profile.findOne({user:req.user.id})
    .then(profile=>{
        
        Post.findById(req.params.id)
        .then(post=>{
            if(post.likes.filter(like=>like.user.toString()===req.user.id).length===0){
               return res.status(400).json({unlike:"you didn't like yet"});
            }
            const removeIndex=post.likes
            .map(items=>items.user.toString())
            .indexOf(req.user.id);

            post.likes.splice(removeIndex,1);

            post.save().then(like=>res.json(like))
            .catch(()=>res.status().json({err:"somthing is wrong"}));  
                     
         
        })
    })
});


router.post('/comment/:id',passport.authenticate('jwt',{session:false}),(req,res)=>{
    const {error,isValid}=validateCommentInput(req.body);
    if(!isValid){
        return res.status(400).json(error);
    }
    Profile.findOne({user:req.user.id})
    .then(profile=>{
        Post.findById(req.params.id)
        .then(post=>{
            const newComment={
                user:req.user.id,
                text:req.body.text,
                name:req.body.name,
                avatar:req.body.avatar
            };
            post.comments.unshift(newComment);
            post.save()
            .then((comment)=>res.json(comment));
        })
       // console.log(profile);
    });
});


router.delete('/comment/:id/:comment_id',passport.authenticate('jwt',{session:false}),(req,res)=>{
  
    Profile.findOne({user:req.user.id})
    .then(profile=>{
        
        Post.findById(req.params.id)
        .then(post=>{
            if(post.comments.filter(comment=>comment._id.toString()===req.params.comment_id).length===0){
               return res.status(400).json({uncomment:"there is no comment exists"});
            }
            const removeIndex=post.comments
            .map(items=>items._id.toString())
            .indexOf(req.params.comment_id);

            post.comments.splice(removeIndex,1);

            post.save().then(like=>res.json(like))
            .catch(()=>res.status().json({err:"somthing is wrong"}));  
                     
         
        })
    })
});




router.post('/',passport.authenticate('jwt',{session:false}),(req,res)=>{
    const {error,isValid}=validatePostInput(req.body);
    
    if(!isValid){
        return res.status(400).json(error);

    }
    const newPost=new Post({
            text:req.body.text,
            name:req.body.name,
            avatar:req.body.avatar,
            user: req.user.id
        });
        newPost.save().then(post=>res.json(post));

})
module.exports=router;