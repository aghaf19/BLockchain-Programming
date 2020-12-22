
const express = require("express")
const router = express.Router()
router.get("/",(req,res)=>
{
    res.send("welcome to about page ")
})
module.exports= router;