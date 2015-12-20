/**
 * Created by Administrator on 2015/11/24.
 */
var mongoose = require("mongoose");
module.exports = mongoose.model('User',new mongoose().schema({
    username:String,//用户名
    email:String,//邮箱
    password:String,//密码
    avatar:String//头像
}))