// Good things
var http = require("http");

var PORT = 7000;

function handleRequest(request, response) {


  response.end("I bet the sun shines a little brighter, just for you. " + request.url);
}

var server = http.createServer(handleRequest);


server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});



// Bad things

var PORT2 = 7500;

function handleRequest2(request, response) {
  response.end("You smell like broken promises. " + request.url);
}

var server2 = http.createServer(handleRequest2);

server2.listen(PORT2, function() {
  console.log("Server listening on: http://localhost:" + PORT2);
});

