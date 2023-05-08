const express = require('express')
const app = express();
const data = require('./serviceList.js')
const router = express.Router();


router.get('/',(req,res)=>{
    res.send(data);

})


router.get('/newroute',(req,res)=>{
    res.render('index')
    
})

router.post('/',(req,res)=>{
    const serviceToAdd = req.body.serviceName;
    const serviceCost = req.body.serviceCost;
    const serviceTime = req.body.serviceTime;
    console.log(serviceToAdd);
    data.push({name:serviceToAdd, cost:serviceCost, time:serviceTime});
    res.redirect(`/services/${data.length-1}`)
})

router.get('/:id',(req,res)=>{
    res.send(req.service);
 })

router.param('id',(req,res,next,id)=>{
    req.service = data[id];
    next();
})

module.exports = router;