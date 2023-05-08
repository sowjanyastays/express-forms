const express = require('express')
const app = express();
const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200).json({
        "message":"This is feedback page"
    });
})

module.exports = router;