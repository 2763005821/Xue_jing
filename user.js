let http = require("http")
const url = require("url")
var user=0;
var server=http.createServer(function(req, res) {		
	res.setHeader("Access-Control-Allow-Origin","*");
	let count_p=[2763005821,2314499817];
	let id=url.parse(req.url, true).query.count;
	let pwd=url.parse(req.url, true).query.pwd;
	console.log(url.parse(req.url, true).query);
	
	if(count_p[0]==id && count_p[1]==pwd){
		let values={status:1,data:[12,34,89]}
		user=1;
		console.log("user状态:");
		console.log(user);
		console.log("登陆成功");
		res.end(JSON.stringify(values));
	}
	else{
		let values={status:0,data:[12,34,89]}
		console.log("抱歉账号或密码输入错误");
		res.end(JSON.stringify(values));
	}
})
server.listen(8976)
