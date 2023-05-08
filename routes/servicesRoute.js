const express = require('express')
const app = express();
const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200).json({
        "message":"This is services page"
    });
})

module.exports = router;