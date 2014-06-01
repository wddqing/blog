/**
*
*	use函数，包含入自定义模块
*/

module.exports = function use(myModule){
	if(typeof myModule === "string"){
		console.log(myModules);
	}else{
		log("parameter must be a string not a " + typeof myModule);
	}
	
}