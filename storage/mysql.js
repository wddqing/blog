//管理mysql操作
var config = require("config").storage.mysql;
var mysql = require("mysql");
var conf = {};
module.exports = function mysql(option){
	if(option){
		conf.host 		= option.host;
		conf.port 		= option.port;
		conf.user 		= option.user;
		conf.password 	= option.pass;
	}else{
		conf.host 		= config.host;
		conf.port 		= config.port;
		conf.user 		= config.user;
		conf.password 	= config.pass;
	}
}

mysql.prototype.getConnection(){
	var connection = mysql.createConnection(conf);
	return connection.connect();
}