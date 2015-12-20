/**
 * Created by Administrator on 2015/11/24.
 */
var express = require('express');
var path = require('path');
//接收body的中间件
var bodyParser = require('body-parser');

var app = express();
//dirname当前文件夹
//使用静态文件服务器中间件
app.use(express.static(path.join(__dirname,'app','public')));
app.use(bodyParser.json);//请求解析content-type application/json
app.use(bodyParser.urlencoded({extended:false})); //application/x-form-urlencoded body对象放到bodyParser
app.use("/users",users);
app.listen(8085,function(){console.log("server start")});