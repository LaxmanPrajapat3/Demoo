import express from 'express';
import sum from './sum.js';
const app=express();
app.listen(8000,()=>{
    console.log("app is leasning in port")
})

app.get('/home',(req,res)=>{
    res.send("Welcome to HOme");

})

app.get('/getsum/:a/:b',async(req,res)=>{
    const {a,b}=req.params;
    res.json({

        
        ans: sum(parseInt(a),parseInt(b))
    })
  

})

