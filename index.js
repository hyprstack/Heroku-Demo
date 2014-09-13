var Hapi = require('hapi');
var cool = require('cool-ascii-faces');

var server = Hapi.createServer('localhost', 8080);

var routes = [
  {
    path: '/',
    method: 'GET',
    handler: function(req, reply){
      reply("Hello World");
    }
  },
  {
    path:'/smiles',
    method: "GET",
    handler: function(req, reply){
      reply(cool());
    }
  }
];

server.route(routes);

server.start(function(){
  console.log("Server info " + server.info.uri);
});
