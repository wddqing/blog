/**
*   提供消息通知模块
*/
var config = require("config").notice;
module.exports = function notice(message){
	var notice = {};
	notice.title = message.title || config.title;
	notice.content = message.content || config.content;
	notice.level = message.level || config.level;
	notice.url = message.url || config.url;
	notice.waiting = message.url || config.waiting;
	message.res.render("system/notice/notice",{notice:notice,title:notice.title}); 
}