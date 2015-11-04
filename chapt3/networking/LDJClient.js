"use strict";

const events = require('events'), util = require('util');

const LDJClient = function(stream){
  events.EventEmitter.call(this); //chamada de 'super()'
  let self = this;
  let buffer = '';
  stream.on('data', function(data){
    buffer += data;
    let bondary = buffer.indexOf('\n');
    while(bondary !== -1){
      let input = buffer.substr(bondary + 1)
      self.emit('message', JSON.parse(input));
      bondary = buffer.indexOf('\n')
    }
  })
}

util.inherits(LDJClient, events.EventEmitter); //diz que o modulo extends EventEmiiter;

exports.LDJClient = LDJClient;
exports.connect = function(stream){
  return new LDJClient(stream)
};
