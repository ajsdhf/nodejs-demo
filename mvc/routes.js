/**
 * @author szy
 */
var Index = require('./controller/index.js');

exports = module.exports = function(app){
	
	//首页
	app.get('/index.htm',Index.index);
	app.get('/',Index.index);

	app.get('*',function(req,res){
		res.json({res:"404"});
	})
}

