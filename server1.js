const http = require('http')
const fs = require('fs')
const path = require("path");
var mime = require('mime');

const hostname = '127.0.0.1'
const port = 8001

const server = http.createServer((req, res) => {
  // res.statusCode = 200
  // res.setHeader('Content-Type', 'text/plain')
  // res.end('Hello World\n how to read dist file?')
  // 获取要读取的文件路径
  console.log('req', req)
  console.log('res', res)
  console.log('绝对路径', __dirname)
 var i=__dirname+'/public/page'
  let pathname = path.join(i, req.url); // request.url 返回的是/index.html
  console.log('pathname', pathname)
  readStaticFile(res, pathname)
  function readStaticFile(res, pathname) {
    var ext = path.parse(pathname).ext;
    var mimeType = mime.getType(ext);
    if (ext) {
      // 根据传入的目标文件路径来读取对应文件
      // 读取文件内容
      fs.readFile(pathname,function(err,data){
        if(err){
          res.writeHeader(404,{
            'content-type' : 'text/html;charset="utf-8"'
          });
          res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
          res.end();
        }else{
          res.writeHeader(200,{
            'content-type' : `${mimeType};charset="utf-8"`
          });
          res.write(data);//将index.html显示在客户端
          res.end();

        }
      })

      // 返回 false 表示, 客户端想要的 是 静态文件
      return true;
    } else {
      // 返回 false 表示, 客户端想要的 不是 静态文件
      return false;
    }
  }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})