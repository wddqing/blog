

module.exports = {
	"get":{
		"/":function(req,res,next){
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
				res.render("admin/index",{passages:results.rows,title:"Wddqing的网络日志",pages:pages});
				
			});
			
		},
		"/view":function(req,res,next){
			var id = parseInt(req.query.id,10);
			var Passage = use("passage");
			Passage.find({where:{id:id}}).complete(function(err,passage){
				if(err){
					console.log(err);
					res.send("Sorry,something wrong happen");
				}
				if(passage){
					res.render("passages/view",{passage:passage,title:passage.title});	
				}else{
					res.send("Sorry,something wrong happen");	
				}
				
			});
		}
	},

	"post":{

	}
}