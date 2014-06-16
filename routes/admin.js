
module.exports = {
	"get":{
		"/admin/":function(req,res,next){
			var currentPage = req.query.page || 1;
			var pageSize = 10;
			var Passage = use("passage");
			var offset = (currentPage - 1) * pageSize;
			Passage.findAndCountAll({
				limit:pageSize,
				offset:offset,
				order:[['modify_time','DESC']]
			}).complete(function(err,results){
				if(err){
					console.log(err);
					res.send("Sorry,something wrong happen");
				}
				var _ =require("underscore");
				var allPages = _.range(1,results.count/pageSize+1);
				var pages = {
					url:"/admin/",
					allPages:allPages,
					currentPage:currentPage,
					totalPages:Math.ceil(results.count/pageSize)
				}
				var passages = results.rows;
				res.render("admin/index",{passages:passages,title:"后台管理",pages:pages});
			});
		},
		"/admin/edit":function(req,res,next){
			var id = parseInt(req.query.id,10);
			var Passage = use("passage");
			Passage.find({where:{id:id}}).complete(function(err,passage){
				if(err){
					console.log(err);
					res.send("Sorry,something wrong happen");
				}
				if(passage){
					//console.log(passage.content);
					res.render("admin/edit",{passage:passage,title:passage.title});	
				}else{
					res.send("Sorry,something wrong happen");	
				}
				
			});
		},
		"/admin/add":function(req,res,next){
			res.render("admin/add",{title:"添加文章"});
		},
		"/admin/del":function(req,res,next){

		}
	},
	"post":{
		"/admin/save":function(req,res,next){
			var title = req.body.title;
			if(!title) 
				return res.send("no title");
			var tags = req.body.tags || "";

			var content = req.body.content;
			if(!content)
				return res.send("no content");
			var moment = require("moment");
			var modify_time = moment().format("YYYY-MM-DD HH:mm:ss").toString();
			var original = 1;
			var Passage = use("passage");
			var id = req.body.id || null;
			var passage = null;
			if(id){
				Passage.find({where:{id:id}}).complete(function(err,result){
					if(err) log(err);
					if(result){
						passage = result;
						console.log(passage);
					}else{
						notice({
							res:res,
							content:"无法保存",
							url:"/admin/"
						});
						return ;
					}
					
				});
			}else{
				passage = Passage.build({
					title:title,
					tags:tags,
					content:content,
					author:"wddqing",
					modify_time:modify_time,
					original:original
				});	
			}
			
			// passage.save().success(function(){
			// 	log("successful add a passage");
			// 	notice({
			// 		content:"保存成功",
			// 		res:res,
			// 		url:"/admin/"
			// 	});
			// }).error(function(){
			// 	log("failed to add a passage");
			// 	notice({
			// 		content:"保存失败",
			// 		res:res,
			// 		url:"/admin/"
			// 	});
			// });
		}
	}
};