"use strict";

const net = require("net")
const server = net.createServer(function(connection){
  console.log("Subscriber connected")
  //envia o primeiro pedaco da mensagem imediatamente
  connection.write(
    '{"type":"changed", "file":"targ}'
  );

  //depois de um segundo, envia outro pedaco
  let timer = setTimeout(function(){
    connection.write('et.txt", "timestamp":"1233123"' + "\n")
    connection.end
  }, 1000);

  connection.on('end', function(){
    clearTimeout(timer)
    console.log("Subscriber disconnecte")
  });
});

server.listen(5432, function(){
  console.log("listening 5432")
})
