// first-class functions
// sao funcoes que podem ser associadas a uma variavel e, podem ser passadas como parametros
// funcoes anonimas sao funcoes sem nome.. como essa de callback

const fs = require('fs')

fs.watch('target', function(){
	console.log('file changed')
})

console.log("now watching file")