import { getNewHnefataflGame, Game, Piece } from './src/game';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000
const socketIO = require('socket.io');

let server = app
.use(express.static('dist/hnefatafl/'))
.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

let socket = socketIO(server);

let players = [];
let game : Game = getNewHnefataflGame();

socket.on('connection', client => {
	console.log('A user connected');
	players.push(client);
	
	client.on('move', function(data : string) {
		if (game.moveUsingNotation(data)) {
			players.forEach(player => {
				if (player != client) {
					player.emit('move', data);
				}
			});
		}
	});

	client.on('disconnect', function() {
		console.log('A user disconnected');
	});
});