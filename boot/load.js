/**
*	生成config配置中指定的文件夹中的模块列表
*/
var config = require("config");
var path = require("path");
var wrench = require("wrench");

module.exports = {
	"do" : function(){
		var loadDirectories = config.global.loads;//配置文件信息
		var currentDirectory = path.dirname(__dirname);//当前目录
		global.myModules = [];
		loadDirectories.forEach(function(directory){
			try{
				var files = wrench.readdirSyncRecursive(currentDirectory + "/" + directory);
				files.forEach(function(file){
					if(file.lastIndexOf(".js") == -1) return -1;
					myModules.push({name:file.slice(0,file.length-3),locate:currentDirectory + "/" + directory + "/" + file});//取得模块名
				});
			}catch(e){
				console.log(e);
				return -1;
			}
		});
	}
}