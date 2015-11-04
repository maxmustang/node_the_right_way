const fs = require('fs'), stream = fs.createReadStream(process.argv[2]);

stream.on('data', function(chunck){
	process.stout.write(chunck)
})

stream.on('error', function(err){
	process.stderr.write("error " + err.message)
})