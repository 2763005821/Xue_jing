<?php 
$servername = " localhost" ; 
$username = " username" ;
$password = "password";
$dbname = " database_name" ;
//创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
//检查连接
if ($conn->connect_ error) {
die("连接失败:".$conn->connect_error);
}
//获取搜索关键词
$search = $_[pos](https://geek. csdn. net/educol umn/0399089ce1ac05d7729a569fd611cf73?spm=1055.2569.3001.10083)T[ 'search']
//查询数据库
$sq1 = "SELECT * FROM table_ name WHERE column name LIKE‘%$search%'";
$result = $conn->query($sq1);
//输出结果
if ($result->num_ rows > 0) {
echo "<table><tr><th>ID</th><th>Name</th><th>Age</th></tr>";
while($row = $result->fetch_ assoc()) {
echo "<tr><td>" . $row["id"]."</td><td>" .$row["name "]."</td><td>" .$row["age"]."</td></tr>";
}
echo "</table>";
} else {
echo "0结果" ;