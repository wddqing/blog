/**
* 	文章模型
*/
var mysql = use("mysql");
var table = "passage";
var Sequelize = require("sequelize");


var Passage = mysql.define(
	"Passage",
	{
		id:{type : Sequelize.INTEGER, autoIncrement : true, primaryKey : true, unique : true},
		title:{type : Sequelize.STRING},
		author:{type : Sequelize.STRING},
		content:{type : Sequelize.STRING},
		tags:{type : Sequelize.STRING},
		original:{type : Sequelize.INTEGER},
		modify_time:{type : Sequelize.DATE,defaultValue : Sequelize.NOW},
	},
	{
		tableName:table,
		timestamps:false
	}
);




module.exports = Passage;