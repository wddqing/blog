module.exports ={
	'get':{
		"*":function(req,res,next){
			res.render('common/404.jade',{title:"404 Error!"});
		}
	},
	'post':{

	}
}