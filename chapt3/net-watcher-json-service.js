'use strict';

const fs = require('fs'), net = require('net'), filename = process.argv[2];{}

const server = net.createServer(function(connection){
	console.log('subscriber connected')
	connection.write(JSON.stringify(
	{
		type:'watching',
		file: filename
	}) + '\n')

	let watcher = fs.watch(filename, function(){
		connection.write(JSON.stringify(
		{
			type: 'changed',
			file: filename,
			timestamp: Date.now
		}) + '\n')

		connection.on('close', function(){
			console.log("subscriber closed the connection!");
			watcher.close();
		})
	})
})

if(!filename) throw Error("no file")

server.listen(5342, function(){
	console.log("linstening")
})
