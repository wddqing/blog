//管理mysql连接和操作
var config = require("config").storage.mysql;
var Sequelize = require("sequelize");
var sequelize = new  Sequelize(
		config.db_name,
		config.user,
		config.password,
		{
			dialect:"mysql",
			port:config.port,
			host:config.host
		}
);
sequelize.authenticate().complete(function(err){
	if(err){
		console.log("unable connect to mysql ",err);
	}else{
		console.log("connection has been established successfully");
	}
});

module.exports = sequelize;