function letterToNumber(letter : string) : number {
	let start = 'a'.charCodeAt(0);
	return 1+ letter.charCodeAt(0) - start;
}

export function getNewHnefataflGame() : Game {
	let game = new Game();
	// Place the King and his knights
		game.placePiece(new Piece(5, 5, "king"));
		game.placePiece(new Piece(4, 5, "knight"));
		game.placePiece(new Piece(6, 5, "knight"));
		game.placePiece(new Piece(5, 4, "knight"));
		game.placePiece(new Piece(5, 6, "knight"));
		game.placePiece(new Piece(4, 4, "knight"));
		game.placePiece(new Piece(4, 6, "knight"));
		game.placePiece(new Piece(6, 4, "knight"));
		game.placePiece(new Piece(6, 6, "knight"));
		game.placePiece(new Piece(3, 5, "knight"));
		game.placePiece(new Piece(5, 7, "knight"));
		game.placePiece(new Piece(7, 5, "knight"));
		game.placePiece(new Piece(5, 3, "knight"));

	// Place the Bandits
		game.placePiece(new Piece(5, 1, "bandit"));
		game.placePiece(new Piece(3, 0, "bandit"));
		game.placePiece(new Piece(4, 0, "bandit"));
		game.placePiece(new Piece(5, 0, "bandit"));
		game.placePiece(new Piece(6, 0, "bandit"));
		game.placePiece(new Piece(7, 0, "bandit"));

		game.placePiece(new Piece(5, 9, "bandit"));
		game.placePiece(new Piece(3, 10, "bandit"));
		game.placePiece(new Piece(4, 10, "bandit"));
		game.placePiece(new Piece(5, 10, "bandit"));
		game.placePiece(new Piece(6, 10, "bandit"));
		game.placePiece(new Piece(7, 10, "bandit"));

		game.placePiece(new Piece(1, 5, "bandit"));
		game.placePiece(new Piece(0, 3, "bandit"));
		game.placePiece(new Piece(0, 4, "bandit"));
		game.placePiece(new Piece(0, 5, "bandit"));
		game.placePiece(new Piece(0, 6, "bandit"));
		game.placePiece(new Piece(0, 7, "bandit"));

		game.placePiece(new Piece(9, 5, "bandit"));
		game.placePiece(new Piece(10, 3, "bandit"));
		game.placePiece(new Piece(10, 4, "bandit"));
		game.placePiece(new Piece(10, 5, "bandit"));
		game.placePiece(new Piece(10, 6, "bandit"));
		game.placePiece(new Piece(10, 7, "bandit"));

	return game;
}

export class Game {
	pieces : Piece[] = [];

	readonly width = 11;
	readonly height = 11;

	readonly typesOfPieces : string[] = [
		"king",
		"knight",
		"bandit",
	];

	readonly teams : string[][] = [
		["bandit"],
		["king", "knight"],
	]

	teamToMove : number = 0;

	move(oldPiece : Piece, newPiece : Piece) : boolean {
		if (oldPiece == null || newPiece == null) {
			return false;
		} else if (oldPiece == undefined || newPiece == undefined) {
			return false;
		} if (oldPiece.type != newPiece.type) {
			return false;
		}
		for (let i = 0; i < this.teams[this.teamToMove].length; i++) {
			if (this.teams[this.teamToMove][i] === oldPiece.type) {
				this.placePiece(newPiece);
				this.removePiece(oldPiece);
				this.teamToMove = (this.teamToMove + 1)%this.teams.length;
				return true;
			}
		}
		return false;
	}

	moveUsingNotation(move : string) : boolean {
		console.log(move);
		const notationMask = /([a-zA-Z])(\d\d?)\:([a-zA-Z])(\d\d?)/;
		const tokenisedNotation = move.toLowerCase().match(notationMask);
		if (tokenisedNotation) {
			let oldPiece = this.getPiece(letterToNumber(tokenisedNotation[1])-1, +tokenisedNotation[2]-1);
			let newPiece = new Piece(letterToNumber(tokenisedNotation[3]) - 1, +tokenisedNotation[4] - 1, oldPiece.type);
			return this.move(oldPiece, newPiece);
		} else {
			return false;
		}
	}

	placePiece(piece : Piece) : boolean {
		return this.ifIsPiece(piece, 
			_ => {
				this.pieces[piece.y*this.width + piece.x] = piece; 
				return true;
			},
			_ => { 
				return false
			});
	}

	getPiece(x : number, y : number) : Piece {
		let type = this.pieces[y*this.width + x];
		return this.ifIsPiece(type,
			_ => {
				return type;
			},
			_ => {
				return null;
			});
	}

	removePiece(piece : Piece) {
		this.pieces[piece.y*this.width + piece.x] = null;
	}

	ifIsPiece(piece : Piece, callback_true:Function, callback_false:Function) {
		if (piece === undefined || piece === null) {
			return callback_false();
		}
			for (let i = 0; i<this.typesOfPieces.length; i++) {
				if (piece.type === this.typesOfPieces[i]) {
					return callback_true();
				}
			}
			return callback_false();
	}
}

export class Piece {
	constructor(pX : number, pY : number, pType : string) {
		this.type = pType;
		this.x = pX;
		this.y = pY;
	}
	type : string;
	x : number;
	y : number;
}