"use strict"

const net = require('net'), client = net.connect({port: 5342});

client.on('data', function(data){
  let message = JSON.parse(data)

  if(message.type === 'watching'){
    console.log('now watching: ' + message.file);
  }else if(message.type === 'changed'){
    let date = Date.now()
    console.log("File: " + message.file + 'changed')
  } else {
    throw Error("HA!")
  }
})
