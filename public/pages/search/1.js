const express = require('express');
const app = express();
const port = 3004;
 
// 假设这是一个模拟的数据库搜索函数
function searchDatabase(searchTerm) {
  // 这里应该是查询数据库的代码
  // 为了示例，我们将使用一个简单的内存数据库
  const data = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
  return data.filter(item => item.name.includes(searchTerm));
}
 
app.use(express.urlencoded({ extended: true })); // 支持URL编码的表单数据
 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/1.html');
});
 
app.post('/search', (req, res) => {
  const searchTerm = req.body.search;
  const results = searchDatabase(searchTerm);
  res.json(results); // 返回JSON格式的搜索结果
});
 
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});