/**
 * website app start
 * wddqing@gmail.com
 */

var express = require("express");
var config = require("config");
var wrench = require("wrench");
var path = require("path");

function Server(){
	this.httpServer = null;
	this.serverRoot = path.dirname(__dirname) + "/blog";
	this.routesPath = path.dirname(__dirname) + "/blog/routes";
	this.viewsPath  = path.dirname(__dirname) + "/blog/views";
	this.publicPath = path.dirname(__dirname) + "/blog/public";
	this.modelPath  = path.dirname(__dirname) + "/blog/model";
	this.configPaht = path.dirname(__dirname) + "/blog/config"; 
} 

Server.prototype.start = function(done){

	done();
}

Server.prototype.createHttpServer = function(){

}

var app = new Server();

app.start(function(){
	console.log("server start.");
	console.log(app.serverRoot);
});


	