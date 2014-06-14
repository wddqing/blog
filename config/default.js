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
		"init" : ["log","use"],
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
	}

}