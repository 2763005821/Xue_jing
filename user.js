let http = require("http")
const url = require("url")
// 1 引入mysql模块
const mysql = require('mysql');
var user=0;
// 2 配置连接信息
const connection = mysql.createConnection({
  host: '127.0.0.1', // IP地址
  user: 'root', // 用户名 默认root
  password: '2314499817', // 自己在MySQL中设置的密码
  database: 'mydb', // 数据库名字（不是表名）
})

var server=http.createServer(function(req, res) {		
	res.setHeader("Access-Control-Allow-Origin","*");
	let func=url.parse(req.url, true).query.func;
	let id=url.parse(req.url, true).query.count;
	let pwd=url.parse(req.url, true).query.pwd;
	console.log(func,id,pwd);
// 3 建立连接
connection.connect((err) => {
  // 连接失败
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  // 连接成功
  console.log('connected as id ' + connection.threadId);
});
// 4 增删改查
//从前端传递的func用来判断登录还是注册
if(func==1){
	var i ="SELECT * FROM mydb.user WHERE id="+id+" and pwd="+pwd+";";
	connection.query( i, (error, results, fields) => {
	  if (error) throw error;
	  if(results[0]){					/*如果查询到用户*/
		  var status=1;
		  console.log("数据库检测到用户");
		  console.log('The result is: ', results);
		  results.forEach((row)=>{
			  console.log("id: ",row.id);
			});
			/************************/
			let values={status:1,data:[12,34,89]}
			user=1;
			console.log("user状态:");
			console.log(user);
			console.log("登陆成功\n**************************************************\n");
			res.end(JSON.stringify(values));
	  }
		else{					/*未查询到用户*/
			var status=0;
			let values={status:0,data:[12,34,89]}
			console.log("未查询到用户，抱歉账号或密码输入错误");
			res.end(JSON.stringify(values));
			return 0;
	}})}
else if(func==2){
	var i ="INSERT INTO user VALUES ("+id+","+pwd+",null,null,null,null)"
	connection.query( i, (error, results, fields) => {
	  if (error) {
			var status=0;				/*status用来返回查询状态*/
			let values={status:0,data:[12,34,89]}
			console.log("创建失败，已经存在账号");
			res.end(JSON.stringify(values));;
			return 0;
		  throw error;
	  }
	  else{					
		  var status=1;
		  console.log("用户创建成功");
		  console.log('The result is: ', results);
			/************************/
			let values={status:1,data:[12,34,89]}
			user=1;
			console.log("user状态:");
			console.log(user);
			console.log("登陆成功\n**************************************************\n");
			res.end(JSON.stringify(values));
	  }
	})
}
 
//调试：当id=0时，断开连接
if(id==0)
	connection.end(); 

console.log('连接结束');

	console.log(url.parse(req.url, true).query);
/*
		console.log("status: ",status);
/*	if(count_p[0]==id && count_p[1]==pwd)  if(status==1){
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
	}**/

});
server.listen(8976)
