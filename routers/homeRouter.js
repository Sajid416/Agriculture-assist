const express=require("express");
const Router=express.Router();
const homeSchema=require("../models/homeSchema")

Router.get('/',(req,res)=>{
  res.status(200).json('welcome to home router')
})

 Router.post('/registration',async(req,res)=>{
    try{
      const data = req.body;
      const useremail=await homeSchema.findOne({email:data.email});

      if(useremail){
        res.status(403).json({
          success:false,
          message:'user already exists !!!'
        });
      }else{
        const userData =new homeSchema(data);
        if(userData){
          await userData.save(err=>{
            if(err){
              const status = {
                success:false,
                message:'an unwanted error occured.'
              }
              res.status(403).json(status);
            }else{
              const status = {
                success:true,
                message:'registration complete'
              }
              res.status(200).json(status)
            }
        })
        }
      }
    }catch(error){
      res.status(404).json({
        success:false,
        message:"registration failed"
      })
    }
 })

Router.post('/login',(req,res)=>{
  const data =req.body;
  try{
     const user = homeSchema.findOne({email:data.email},(err,result)=>{
      console.log(result);
      if(err){
        res.status(404).json({
          success:false,
          message:'error occured'
        })
      }else if(!result){
        res.status(203).json({
          success:false,
          message:'user does not found !!!'
        })
      }else{
        if(data.password===result.password){
          res.status(200).json({
            success:true,
            message:'login success'
          });
        }
        else{
          res.status(203).json({
            success:false,
            message:'password does not match'
          })
        }
      }
      
    })

    

  }catch(err){
    res.status(403).json({
      success:false,
      message:'login failed'
    })
  }
 
})
 module.exports=Router;
 