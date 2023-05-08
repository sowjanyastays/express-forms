const express = require('express')
const app = express();
const data = require('./serviceList.js')
const router = express.Router();


router.get('/',(req,res)=>{
    res.status(200).json({
        "message":"This is services page"
    });
})

router.get('/:id',(req,res)=>{
    const regex = /^[1-9]$/;
    const isValid = regex.test(req.params.id);
    if(isValid)
    res.send(req.service.name);
    else{
        res.status(500).send("Error finding service");
    }
 })

router.param('id',(req,res,next,id)=>{
    req.service = data[id];
    next();
})

module.exports = router;