/**
*
*	use函数，包含入自定义模块
*/
var _ = require("underscore");
module.exports = function use(myModule){
	if(typeof myModule === "string"){
		var goalModule = _.find(myModules,function(module){
			return module.name == myModule;
		});
		if(goalModule){
			return require(goalModule.locate);
		}else{
			return  null;
		}
	}else{
		log("parameter must be a string not a " + typeof myModule);
	}
	
}