// use strick desabilita algumas funcoes problematicas do javascritp
// variaveis com let podem ser associadas com mais de um valor

"use strict";
const fs = require('fs'), spawn = require('child_process').spawn, filename = process.argv[2];

if(!filename){
	throw Error("A file to watch must be espeficied!")
}

fs.watch(filename, function(){
	let ls = spawn("ls", ['-lh', filename]);
	ls.stdout.pipe(process.stdout)
})

console.log('now watching')