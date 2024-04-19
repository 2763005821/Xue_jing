var http=require('http');				//内置的http模块提供了HTTP服务器和客户端功能
var fs=require('fs');						//内置的http模块提供了HTTP服务器和客户端功能
var path=require('path');				//内置的path模块提供了与文件系统路径相关的功能
var mime=require('mime');			//附加的mime模块有根据文件扩展名得出MIME类型的能力
var cache={};								//cache是用来缓存文件内容的对象
var parse=require('url').parse;
var join=require('path').join;

var root=__dirname;


function send404(response){		//错误响应函数404
	response.writeHead(404, {'Content-Type': 'text/plain'});
	response.write('Error 404: resourse not found.');
	response.end();
}

/*接收http响应和地址，返回指定文件*/
function sendFile(response, filePath, fileContents) {					
	response.writeHead (
		200,
		{ "content-type": mime. lookup (path. basename(filePath) ) }
	);
	response.end(fileContents) ;
}
/*第二*/
function serveStatic (response, cache, absPath) {					//静态文件服务器，当接收到url后浏览器动作
	if (cache[absPath]) {															
		sendFile(response, absPath, cache [absPath]) ;
	}   else{
		fs.exists(absPath, function(exists) { 
			if (exists) {																	//存在
				fs.readFile(absPath, function(err, data) {				//根据路径读取文件，文件读取完成之后，通过此回调函数拿到读取结果
					if (err) {
						send404(response);										//回调函数失败，不改动cache
					} else {
						cache[absPath] = data;									//成功，写入到cache中
						sendFile(response, absPath, data) ;				//发送文件
					}
				});
			} else {
				send404 (response) ;
			}
		});
	}
}

/*第一&设置HTTP服务器逻辑*/
/*接收请求储存于回调函数request中，返回response*/
var server=http.createServer(function(request, response) {			//从http请求中分解动作与url
	var filePath=false;
	
	if(request.url=='/') {
		filePath='public/pages/index.html';
	} else {
		filePath='public' +request.url;
		console.log(filePath);
	}
	var absPath='./' + filePath;
	serveStatic(response, cache, absPath);
});

server.listen(3000,function() {
	console.log("Server listening on port 3000.");
});