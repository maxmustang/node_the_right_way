"use strict";

const
  fs = require('fs'),
  zmq = require('zmq');

const
  publisher = zmq.socket('pub'),
  filename = process.argv[2];

fs.watch(filename, function(){
  publisher.send(
    JSON.stringify({
      type:'changed',
      file: filename,
      timestamp: Date.now()
    })
  )
});


publisher.bind('tcp://*:5432', function(err){
  console.log("listening for zqm Subscribers...")
})
