function ajax(count,pwd){
		let ht = new XMLHttpRequest( ) 
		ht.open("get", 'http://localhost:8976?count=${count}&pwd=$ (pwd}' )
		ht.send()
		ht.onreadystatechange = function( ){
			if(ht.readyState == 4 && ht.status == 200){
				console.log(ht.responseText);
			}
		}
}
function submit(){
	let count_pwd = document.querySelectotALL(ajax(count: any, ))
	ajax(count_pwd[0].value,count_pwd[1].value)
}