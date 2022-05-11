#!/usr/bin/env node
// Include Nodejs' net module.
import Net from 'net'
import {SplitQueries} from './parser/SplitQueries.mjs';
import {select,from,outerJoin,innerJoin,orderBy,groupBy,insert,deleteFrom,deleteId,
    updateFrom,updateId,count,database} from './lib/fake-sql.mjs';
import {users} from './lib/users-database.mjs';
import {heroes} from './lib/heroes-database.mjs';
database['users'] = users
database['heroes'] = heroes

const parseScriptWithSplitQueries = (script) => {
    return SplitQueries(script)
}

// The port on which the server is listening.
const port = 4000;

// Use net.createServer() in your code. This is just for illustration purpose.
// Create a new TCP server.
const server = new Net.Server();
// The server listens to a socket for a client to make a connection request.
// Think of a socket as an end point.
server.listen(port, function() {
    console.log(`Stupid Server listening on socket localhost:${port}.`);
});

// When a client requests a connection with the server, the server creates a new
// socket dedicated to that client.
server.on('connection', function(socket) {
    console.log('A new stupid connection has been established.');

    // The server can also receive data from the client by reading from its socket.
    socket.on('data', function(chunk) {
        const script = chunk.toString();
        const parsed = parseScriptWithSplitQueries(script);
        parsed.forEach(query => {
            console.log(`running: ${query}`);
            try {
                const result = JSON.stringify(eval(query));
                console.log(`result: ${result}`);
                socket.write(result);
            } catch(e) {
                console.log(`Error: ${e}`);
                socket.write(`Error: ${e.message}`);
            }
            
        })
    });

    // When the client requests to end the TCP connection with the server, the server
    // ends the connection.
    socket.on('end', function() {
        console.log('Closing connection with the client');
    });

    // Don't forget to catch error, for your own sake.
    socket.on('error', function(err) {
        console.log(`Error: ${err}`);
    });
});