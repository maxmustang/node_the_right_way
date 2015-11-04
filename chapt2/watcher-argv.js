const fs = require('fs')
filename = process.argv[2]
if(!filename){
	throw Error("a file to watch must be especified!")
}

fs.watch(filename, function(){
	console.log('file has changed')
})

console.log('watching file')