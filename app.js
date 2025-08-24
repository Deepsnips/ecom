const dotenv=require('dotenv')
const express=require('express');
const app=express();
const path=require('path');
dotenv.config({path:path.join('__dirname__','config','config.env')});
const products=require('./routes/product');
const orders=require('./routes/order');
app.use('/api/v1/',orders);
app.listen(process.env.PORT,()=>{
    console.log(`server running`)
})