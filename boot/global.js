/**
*	初始化全局配置参数
*/
var config = require("config");
var init = config.global.init;
var run = config.global.run;


module.exports = {
	//初始化函数
	"init":function(){
		//运行默认程序
		run.forEach(function(application){
			var app = require("./" + application);
			app.do();
		});
		//载入全局函数
		init.forEach(function(method){
			global[method]  = require("./"+method);
		});

		log("global init");
	}
}