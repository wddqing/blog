//管理mysql操作
var config = require("config").storage.mysql;
module.exports = function mysql(option){
	if(option){
		this.host = option.host;
		this.port = option.port;
		this.user = option.user;
		this.pass = option.pass;
	}else{
		this.host = config.host;
		this.port = config.port;
		this.user = config.user;
		this.pass = config.pass;
	}
}