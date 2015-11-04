"use strict";
const
  zmq = require('zmq');

const
  subscriber = zmq.socket('sub');
//passando "" puro, eu digo que quero receber todos os tipos de mensagem
//eu poderia filtrar o tipo de mensagem que quero receber
// eu SEMPRE VOU PRECISAR chamar o subscribe em algum lugar do meu codigo, senao nao vou receber as mensagems
subscriber.subscribe("");

subscriber.on('message', function(data){
  let
    message = JSON.parse(data),
    date = new Date(message.timestamp);
  console.log("teste de subscriber: ", message, date)
})

subscriber.connect('tcp://localhost:5432')
