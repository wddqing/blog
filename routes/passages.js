module.exports = {
	"get":{
		"/":function(req,res,next){
			res.render("passages/index",{title:"首页"});
		}
	},

	"post":{}
}