/**
* 	文章模型
*/
var mysql = use("mysql");
var table = "blog_passage";
module.exports = function passage(){
	this.id = "";
	this.title = "";
	this.author = "";
	this.content = "";
	this.updateTime = "";
	this.order = 0;
}

passage.prototype.save = function(){

}

passage.prototype.del = function(pid){
	
}

passage.prototype.modify = function(pid){
	
}
//根据文章id获取一篇文章
passage.prototype.find = function(pid){
	
}
//根据页数获取文章列表
passage.prototype.list = function(page,pagesize){
	
}
//返回文章总数
passage.prototype.count= function(){
	
}