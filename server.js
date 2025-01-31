const express =require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const homeRouter=require('./routers/homeRouter');
const contactRouter=require('./routers/contactRouter')
const port=process.env.port || 5501;
const cors = require('cors')

const app=express();
app.use(express.json());
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/farmerdata',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('connection successful'))
.catch(err=> console.log(err))
const db=mongoose.connection;


app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/',(req,res)=>{
    res.status(200).json('welcome to server')
  })

app.use('/home',homeRouter);
app.use('/contact',contactRouter);

function errorHandler(err,req,res,next){
    if(res.headersSent){
        return next(err);
    }
    res.status(503).json({error:err});
}




// app.use('/',homeRouter);

app.listen(port,()=>{
    console.log('server is running on port on http://localhost:'+port);
});


