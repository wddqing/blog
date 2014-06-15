module.exports = {
	"dev" : {
		"view_engine" : "jade",
		
		"methods" : ["get","post","put","del","head"],

		"server":{
			"port" : 3000
		}
	},
	"global" : {
		//init中配置在全局初始化的模块，这些模块可以在全局中使用，模块存放于boot文件夹
		"init" : ["log","use","notice"],
		//run中配置默认运行的模块
		"run":["load"],
		//use 模块会自动导入的文件夹
		"loads" : ["model","storage"]
	},
	"storage":{
		"mysql":{
			"db_name":"blog",
			"host":"127.0.0.1",
			"port":3306,
			'user':"root",
			"password":"wddqing123"
		}
	},
	"notice":{
		"title":"系统通知",//通知模块的默认标题
		"content":"系统跟您开了个小小的玩笑",//通知模块的默认内容
		"level":"notice",//通知模块的默认级别，包括warning，danger，notice
		"url":"/",//默认跳转的地址
		"waiting":"4000"//通知页面的默认停留时间单位：ms
	}

}