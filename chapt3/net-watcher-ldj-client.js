"use strict"
const
  net = require('net'),
  ldj = require('./networking/LDJClient.js');
const
  netClient = net.connect({port: process.argv[2] || 5342}),
  ldjClient = ldj.connect(netClient);

ldjClient.on('message', function(message){
  if(message.type === 'watching'){
    console.log("Now my watch begins")
  }else if(message.type ==='changed'){
    console.log("File has been changed");
  }else{
    throw Error("chora nenem")
  }
})
