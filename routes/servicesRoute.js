const express = require('express')
const app = express();
const data = require('./serviceList.js')
const router = express.Router();

router.get('/:id',(req,res)=>{
    var id = Number(req.params.id);
    const result = data.find((ser)=>{
        return ser.id === id;
    })
    if(!result){
        res.status(500).send("Error finding service");
    }
    else{
        res.status(200).send(result.name);
    }
})

router.get('/',(req,res)=>{
    res.status(200).json({
        "message":"This is services page"
    });
})

router.get('/:id',(req,res)=>{
    var id = Number(req.params.id);
    const result = data.find(ser => ser.id === id)
    if(!result){
        res.status(500).send("Error finding service");
    }
    else{
        res.status(200).send(result.id.name);
    }
})


module.exports = router;