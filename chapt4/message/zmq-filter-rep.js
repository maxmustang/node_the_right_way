"use strict";

const
  fs = require('fs'),
  zmq = require('zmq');

const
  responder = zmq.socket('rep') //socket para responder os request do cliente

responder.on('message', function(data){
  let request = JSON.parse(data);
  console.log("Received request to get: ", request.path)
  fs.readFile(request.path, function(err, content){
    console.log("sending response content")
    responder.send(JSON.stringify({
      content: content.toString(),
      timestamp: Date.now,
      pid: process.pid
    }))
  })
})
responder.bind('tcp://127.0.0.1:5432', function(err){
  console.log("Initiating")
})
//fechando o responder quando desconectar do terminal
process.on("SIGINT", function(){
  console.log("Shutting down..")
  responder.close()
})
