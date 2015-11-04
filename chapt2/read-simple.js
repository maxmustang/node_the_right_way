const fs = require('fs')
fs.readFile('target', function(err, data){
	if(err) throw err
	console.log(data.toString())
})