
module.exports = {
	"get":{
		"/admin/":function(req,res,next){
			var currentPage = req.query.page || 1;
			var pageSize = 1;
			var Passage = use("passage");
			var offset = (currentPage - 1) * pageSize;
			Passage.findAndCountAll({
				limit:pageSize,
				offset:offset
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
				res.render("admin/index",{passages:results.rows,title:"后台管理",pages:pages});
				
			});
		},
		"/admin/edit":function(req,res,next){

		},
		"/admin/add":function(req,res,next){
			res.render("admin/add",{title:"添加文章"});
		},
		"/admin/del":function(req,res,next){

		},
		"/admin/save":function(req,res,next){

		}
	},
	"post":{

	}
};