const express=require('express');
const app=express();
const port =3000;

app.get('/',(req,resp)=>{
    resp.status(200).json({message:'success'});
});

app.listen(port,()=>{
    console.log('server started and runing on port 3000');
});
