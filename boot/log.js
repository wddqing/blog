/**
*	提供日志打印服务
*/
var moment = require("moment");

module.exports = function log(message){
	if(typeof message === "string"){
		console.log(message + " at " + moment().format("YYYY-MM-DD HH:mm:ss:S:SS:SSS"));
	}else{
		console.log("ill message,must be a string not a " + typeof message);
	}
}