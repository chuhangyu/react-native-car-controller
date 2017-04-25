var net = require('net');
var client = new net.Socket();
client.setEncoding('utf8');
client.connect(8899, '10.10.100.254', function() {
  console.log('111');
  client.write('666');
});
client.on('data', function(data){
  console.log('已接收:');
  console.log(data);
  client.write('666');
});