'use strict';

const fs = require('fs'), net = require('net'), filename = process.argv[2];{}

const server = net.createServer(function(connection){
	console.log('subscriber connected')
	connection.write("Now watching file")

	let watcher = fs.watch(filename, function(){
		connection.write("file '" + filename + "'changed '")

		connection.on('close', function(){
			console.log("subscriber closed the connection!");
			watcher.close();
		})
	})
})

if(!filename) throw Error("no file")

server.listen('/tmp/watcher.sock', function(){
	console.log("linstening")
})