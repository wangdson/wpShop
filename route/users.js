/**
 * Created by Administrator on 2015/11/24.
 */
var express = require("express");
var router = express.Router();
var crypto = require("crypto");
var User = require("../modules").User;

//º”√‹À„∑®
function encrypt(str)
{
   return crypto.createHash("md5").update(str).digest('hex');
}

router.post("/reg",function(req,res){
    var user = req.body;
    var md5Email = user.email;
});