const { Router } = require("express")
const express = require("express")
const router = express.Router()
router.get("/",(req,res)=>
{
    res.send("welcome to contact page ")
})
module.exports= router;