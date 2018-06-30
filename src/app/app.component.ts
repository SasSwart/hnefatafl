import { Component } from '@angular/core';

class Game {
	pieces : Piece[] = [];

	readonly width = 11;
	readonly height = 11;

	readonly typesOfPieces : string[] = [
		"king",
		"knight",
		"bandit"
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
			}
		}
	}

	placePiece(piece : Piece) : boolean {
		return this.ifIsPiece(piece, 
			_ => {
				this.pieces[piece.x*this.width + piece.y] = piece; 
				return true;
			},
			_ => { 
				return false
			});
	}

	getPiece(x : number, y : number) : Piece {
		let type = this.pieces[x*this.width + y];
		return this.ifIsPiece(type,
			_ => {
				return type;
			},
			_ => {
				return null;
			});
	}

	removePiece(piece : Piece) {
		this.pieces[piece.x*this.width + piece.y] = null;
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

class Piece {
	constructor(pX : number, pY : number, pType : string) {
		this.type = pType;
		this.x = pX;
		this.y = pY;
	}
	type : string;
	x : number;
	y : number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor() {
		// Place the King and his knights
			this.game.placePiece(new Piece(5, 5, "king"));
			this.game.placePiece(new Piece(4, 5, "knight"));
			this.game.placePiece(new Piece(6, 5, "knight"));
			this.game.placePiece(new Piece(5, 4, "knight"));
			this.game.placePiece(new Piece(5, 6, "knight"));
			this.game.placePiece(new Piece(4, 4, "knight"));
			this.game.placePiece(new Piece(4, 6, "knight"));
			this.game.placePiece(new Piece(6, 4, "knight"));
			this.game.placePiece(new Piece(6, 6, "knight"));
			this.game.placePiece(new Piece(3, 5, "knight"));
			this.game.placePiece(new Piece(5, 7, "knight"));
			this.game.placePiece(new Piece(7, 5, "knight"));
			this.game.placePiece(new Piece(5, 3, "knight"));

		// Place the Bandits
			this.game.placePiece(new Piece(5, 1, "bandit"));
			this.game.placePiece(new Piece(3, 0, "bandit"));
			this.game.placePiece(new Piece(4, 0, "bandit"));
			this.game.placePiece(new Piece(5, 0, "bandit"));
			this.game.placePiece(new Piece(6, 0, "bandit"));
			this.game.placePiece(new Piece(7, 0, "bandit"));

			this.game.placePiece(new Piece(5, 9, "bandit"));
			this.game.placePiece(new Piece(3, 10, "bandit"));
			this.game.placePiece(new Piece(4, 10, "bandit"));
			this.game.placePiece(new Piece(5, 10, "bandit"));
			this.game.placePiece(new Piece(6, 10, "bandit"));
			this.game.placePiece(new Piece(7, 10, "bandit"));

			this.game.placePiece(new Piece(1, 5, "bandit"));
			this.game.placePiece(new Piece(0, 3, "bandit"));
			this.game.placePiece(new Piece(0, 4, "bandit"));
			this.game.placePiece(new Piece(0, 5, "bandit"));
			this.game.placePiece(new Piece(0, 6, "bandit"));
			this.game.placePiece(new Piece(0, 7, "bandit"));

			this.game.placePiece(new Piece(9, 5, "bandit"));
			this.game.placePiece(new Piece(10, 3, "bandit"));
			this.game.placePiece(new Piece(10, 4, "bandit"));
			this.game.placePiece(new Piece(10, 5, "bandit"));
			this.game.placePiece(new Piece(10, 6, "bandit"));
			this.game.placePiece(new Piece(10, 7, "bandit"));		
	}

  title = 'Hnefatafl';
  game : Game = new Game();
	board: Element = document.querySelector(".board");
	selectedPiece : Piece = null;

  updateBoard() : void {
  	for (let i = 0; i < this.game.width*this.game.height; i++) {
  		let prospectivePiece : Piece = this.game.pieces[i];
  		let prospectiveSquare : Element = document.querySelector(`div#cell${ i+1 }`);
  		this.game.ifIsPiece(prospectivePiece,
  			_ => {
  				prospectiveSquare.classList.add(prospectivePiece.type);
  			},
  			_ => {
  				this.game.typesOfPieces.forEach(piece => {
  					prospectiveSquare.classList.remove(piece);
  				});
  			}
  		);
  	}
  }

  selectSquare(event : Event) : void {
  	let id : number = +(<HTMLDivElement>event.target).id.substring(4);
  	let sourceX : number = Math.floor((id-1)/this.game.width);
  	let sourceY : number = (id-1)%this.game.width;
  	let prospectivePiece : Piece = this.game.getPiece(sourceX, sourceY);
  	this.game.ifIsPiece(prospectivePiece,
  		_ => {
  			if (this.selectedPiece === prospectivePiece) {
  				this.selectedPiece = null;
  			}
  			this.selectedPiece = prospectivePiece;
  		},
  		_ => {
  			if (this.selectedPiece != null) {
  				this.game.move(this.selectedPiece, new Piece(sourceX, sourceY, this.selectedPiece.type));
  			}
  			this.selectedPiece = null;
  		}
  	);
  	this.updateBoard();
  }
}
