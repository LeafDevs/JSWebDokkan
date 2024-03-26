const fs = require('node:fs');
const express = require('express')
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);


app.user

const io = new Server();



io.of('/game').on('message', (message) => {
    
})