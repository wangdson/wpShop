/**
 * Created by Administrator on 2015/11/24.
 */
var express = require('express');
var path = require('path');
//����body���м��
var bodyParser = require('body-parser');

var app = express();
//dirname��ǰ�ļ���
//ʹ�þ�̬�ļ��������м��
app.use(express.static(path.join(__dirname,'app','public')));
app.use(bodyParser.json);//�������content-type application/json
app.use(bodyParser.urlencoded({extended:false})); //application/x-form-urlencoded body����ŵ�bodyParser
app.use("/users",users);
app.listen(8085,function(){console.log("server start")});