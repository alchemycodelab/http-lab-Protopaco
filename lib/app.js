const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');
const { create } = require('domain');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());
    if (request.method === 'GET') {

      if (request.path === '/') socket.end(createResponse({ body: 'hi' }));
      if (request.path === '/red') socket.end(createResponse({ body: '<h1>red</h1>' }))
      if (request.path === '/green') socket.end(createResponse({ body: '<h1>green</h1>' }))
      if (request.path === '/blue') socket.end(createResponse({ body: '<h1>blue</h1>' }))

    } else if (request.method === 'POST' && request.path === '/echo') {
      socket.end(createResponse({ body: request.body }));
    } else {
      socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
  });
});

module.exports = app;
