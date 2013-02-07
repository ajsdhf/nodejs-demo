/**
 * @author szy
 */
 
//��ҳ
exports.index = function(req,res,next){
	res.render("home/index",{error:""});
}
//�ϻ���
exports.tiger = function(req,res,next){
	res.render("home/tiger",{error:""});
}
//ץȡ
exports.catchOne = function(req,res,next){
	res.render("home/catch",{error:""});
}
//�˿�
exports.poker = function(req,res,next){
	res.render("home/poker",{error:""});
}
//ת��
exports.draw = function(req,res,next){
	res.render("home/draw",{error:""});
}

// private
function gen_session(user,res) {
	var auth_token = encrypt(user._id + '\t'+user.name + '\t' + user.pass +'\t' + user.email, config.session_secret);
	res.cookie(config.auth_cookie_name, auth_token, {path: '/',maxAge: 1000*60*60*24*7}); //cookie ��Ч��1��			
}
function encrypt(str,secret) {
   var cipher = crypto.createCipher('aes192', secret);
   var enc = cipher.update(str,'utf8','hex');
   enc += cipher.final('hex');
   return enc;
}
function decrypt(str,secret) {
   var decipher = crypto.createDecipher('aes192', secret);
   var dec = decipher.update(str,'hex','utf8');
   dec += decipher.final('utf8');
   return dec;
}