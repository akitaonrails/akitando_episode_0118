#!/usr/bin/env node
import Net from 'net'
import promptSync from 'prompt-sync'

// The port number and hostname of the server.
const port = 4000;
const host = 'localhost';
const prompt = promptSync({sigint: true});

// Create a new TCP client.
const client = new Net.Socket();
// Send a connection request to the server.
client.connect({ port: port, host: host }, () => {
    // If there is no error, the server has accepted the request and created a new 
    // socket dedicated to us.
    console.log('TCP connection established with the Stupid Server.');

    const query = prompt('stupid query > ')
    client.write(query.trim());
});

// The client can also receive data from the server by reading from its socket.
client.on('data', chunk => {
    console.table(chunk.toString());
    
    const query = prompt('stupid query > ')
    client.write(query.trim());
});

client.on('end', () => {
    console.log('Requested an end to the TCP connection');
});