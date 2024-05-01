const os = require('os');
let localhost = ''
try {
    let network = os.networkInterfaces()
    localhost = network[Object.keys(network)[0]][1].address;
	console.log(localhost)
} catch (e) {
    localhost = 'localhost'
	console.log(localhost)
}
    let network = os.networkInterfaces()
    localhost = network[Object.keys(network)[0]][1].address;
	console.log(localhost)
