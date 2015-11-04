const fs = require('fs')
fs.writeFile('target', 'malu menina', function(err){
	if(err) throw err;
})