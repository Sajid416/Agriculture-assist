const express=require("express");
const Router=express.Router();
const contactSchema=require("../models/contactSchema")

Router.post('/',(req,res)=>{
  res.status(200).json('contact connected')
})

 Router.post('/contacts',async(req,res)=>{
  const data = req.body;
    try{  
      const userData =  new contactSchema(data);   
      await userData.save(err=>{
            if(err){
              const status = {    
                success:false,
                message:'an unwanted error occured.'
            }
            res.status(400).json(status);
          }else{
            const status = {
              success:true,
              message:'Successfully saved your comment'
          }
             res.status(200).json(status)
          }
      })
    }catch(error){
      res.status(404).json({
        success:false,
        message:"save failed"
      })
    }
 })

 module.exports=Router;
 