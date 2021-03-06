'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3306 });

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server is running at: ${server.info.url}`);
});