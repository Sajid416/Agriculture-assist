const mongoose=require('mongoose');

const schema=mongoose.Schema;
const userSchema=new schema({
     email:{
        type:String,
        required:true,
        unique:true

     },
     password:{
        type:String,
        required:true
     },
     
     phn:{
        type:Number,
        required:true
     },
     fname:{
        type:String,
        required:true
     },
     lname:{
        type:String,
        required:true
     },
     gender:{
        type:String,
     },
     country:{
        type:String,
     },
    
})


module.exports=mongoose.model('user',userSchema);
