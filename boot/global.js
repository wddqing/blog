/**
*	初始化全局配置参数
*/
var config = require("config");
var init = config.global.init;

module.exports = {
	//初始化函数
	"init":function(){
		init.forEach(function(method){
			global[method]  = require("./"+method);
		});
		log("global init");
	}
}