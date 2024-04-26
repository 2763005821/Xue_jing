var http=require('http');				//内置的http模块提供了HTTP服务器和客户端功能
var fs=require('fs');						//内置的http模块提供了HTTP服务器和客户端功能
var path=require('path');				//内置的path模块提供了与文件系统路径相关的功能
var mime=require('mime');			//附加的mime模块有根据文件扩展名得出MIME类型的能力
var cache={};								//cache是用来缓存文件内容的对象
var parse=require('url').parse;
var join=require('path').join;
/*******************数据库********************************/
const mysql = require('mysql');
 

var root=__dirname;
var server=http.createServer(function(request, response) {		
	response.setHeader( "Access-Control-Allow-origin","*")
//	console.log(url.parse(request.url, true).query);

	// 设置数据库连接参数
const connection = mysql.createConnection({
  host     : '172.0.0.1', // 数据库服务器地址
  user     : 'root', // 数据库用户名
  password : '2314499817', // 数据库密码
  database : 'world' // 要连接的数据库名
});
// 开启数据库连接
connection.connect(function() {
  console.log('Successfully connected to the database.');
  connection.end();
  return ;
});
// 当你完成数据库操作后，可以关闭连接


})
server.listen(3002,function() {
	console.log("Server listening on port 3002.");
});