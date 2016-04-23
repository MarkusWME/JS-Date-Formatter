var hapi = require('hapi');
var inert = require('inert');
var path = require('path');
var server = new hapi.Server();
var port = process.env.PORT || 8000;
server.register(inert, function() {
    server.connection({port: port});
    server.route({
        method: 'GET', path: '/src/{param*}', handler: {
            directory: {path: path.normalize(__dirname + '/src/')}
        }
    });
    server.route({
        method: 'GET', path: '/{param*}', handler: {
            directory: {path: path.normalize(__dirname + '/test/')}
        }
    });
    server.start(function() {
        console.log('Visit: http://127.0.0.1:' + port)
    });
});