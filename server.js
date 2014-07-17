/**
 * website app start
 * wddqing@gmail.com
 */

var express = require("express");
var config = require("config");
var wrench = require("wrench");
var path = require("path");
var global = require('./boot/global.js');

function Server(){
	//初始化所有路径和配置参数
	this.httpServer = null;
	this.serverRoot = path.dirname(__dirname) + "/blog";
	this.routesPath = path.dirname(__dirname) + "/blog/routes";
	this.viewsPath  = __dirname+"/views";
	this.publicPath = path.dirname(__dirname) + "/blog/public";
	this.modelPath  = path.dirname(__dirname) + "/blog/model";
	this.configPaht = path.dirname(__dirname) + "/blog/config"; 
} 

Server.prototype.start = function(done){
	this.httpServer = this.createHttpServer();
	this.httpServer.listen(config.dev.server.port);
	done();

}

Server.prototype.createHttpServer = function(){
	var app = new express();
	var self = this;

	app.set('views',this.viewsPath);
	app.set('view engine',config.dev.view_engine);

	app.use(express.cookieParser());
	app.use(express.bodyParser());
	
	app.use(express.static(this.publicPath));
	app.use(app.router);

	
	app.use(function (req, res, next) {
		var err = req.session.error,
		       msg = req.session.success;
		delete req.session.error;
		delete req.session.success;
		res.locals.message = '';
		if (err) res.locals.message = '<p class="msg error">' + err + '</p>';
		if (msg) res.locals.message = '<p class="msg success">' + msg + '</p>';
		next();
	});



	var files = wrench.readdirSyncRecursive(this.routesPath);
	//读取路由规则
	files.forEach(function(file){
		if(file.lastIndexOf(".js") == -1) return ;

		try{
			var api = require(self.routesPath + "/" + file);
		}catch(e){
			log(e);
		}
		var methods = config.dev.methods;

		//注册路由
		methods.forEach(function(method){
			var apiFuncs = api[method];		
			if(!apiFuncs) return ;

			for(var path in apiFuncs){
				(function(p,funcs){
					app[method](p,function(req,res,next){
						funcs[p](req,res,next);
					});
					console.log('server init route [%s]: %s', method, p);
				})(path,apiFuncs);
			}
		});
	});

	return app;
}

global.init();//全局初始化


var server = new Server();

server.start(function(){
	log("server start.");
});


	