const { createServer } = require('http')

let server = createServer((request,response)=>{
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write('<h1>HELLO,WORD</h1>');
  response.end();
})

server.listen(3002);
console.log("iniciado")