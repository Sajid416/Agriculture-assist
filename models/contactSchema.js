const mongoose=require('mongoose');
const schema=mongoose.Schema;
const userSchema=new schema({
     name:{
        type:String,
        required:true       

     },
     email:{
        type:String,
        required:true,
        
     },
     
     comment:{
        type:String,
        required:true
     },
    
    
})

module.exports=mongoose.model('contact',userSchema);