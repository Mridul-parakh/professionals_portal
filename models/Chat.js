const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ChatSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
    name:{
        type:String,
        required: true,  
        
    },
    message:{
        type:String,
        required: true
    } ,
    date: {
        type: Date,
        default: Date.now
      }
})

module.exports = chat = mongoose.model('chat', ChatSchema);