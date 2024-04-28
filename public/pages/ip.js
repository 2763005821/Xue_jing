
function ip(){
fetch('https://api.ipify.org?format=json')
.then(response => response.json())
.then(json => {
	console.log(json.ip);
	getIPLocation(json.ip);

	return json.ip;
});
}

function getIPLocation(ip) {
  const url = `https://ipinfo.io/${ip}/json`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data.city); // 城市
      console.log(data.region); // 区域
      console.log(data.country); // 国家
      // 更多信息可以通过data对象访问，例如data.loc
    })
    .catch(error => console.error('Error fetching IP location:', error));
}
 
// 使用示例
