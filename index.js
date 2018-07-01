"use strict";
exports.__esModule = true;
var game_1 = require("./src/game");
var express = require('express');
var app = express();
var PORT = process.env.PORT || 5000;
var socketIO = require('socket.io');
var server = app
    .use(express.static('dist/hnefatafl/'))
    .listen(PORT, function () { return console.log("Example app listening on port " + PORT + "!"); });
var socket = socketIO(server);
var players = [];
var game = game_1.getNewHnefataflGame();
socket.on('connection', function (client) {
    console.log('A user connected');
    players.push(client);
    client.on('move', function (data) {
        if (game.moveUsingNotation(data)) {
            players.forEach(function (player) {
                if (player != client) {
                    player.emit('move', data);
                }
            });
        }
    });
    client.on('disconnect', function () {
        console.log('A user disconnected');
    });
});
