import { Component } from '@angular/core';
import io from 'socket.io-client';
import { getNewHnefataflGame, Game, Piece } from '../game';

function numberToLetter(num : number) : string {
	let start = 'a'.charCodeAt(0);
	return String.fromCharCode(start + num);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor() {	
			this.game = getNewHnefataflGame();	

			// Update the board when the document has loaded
			document.addEventListener("DOMContentLoaded", _ => {
				this.updateBoard();
				this.socket = io.connect('https://hnefataflsa.herokuapp.com/', {reconnect: true});

				this.socket.on('move', data => {
					console.log('Someone moved');
					this.game.moveUsingNotation(data);
					this.updateBoard();
					this.assignSelectedClass();
				});
			});
	}

  	title = 'Hnefatafl';
  	game : Game = new Game();
	board: Element = document.querySelector(".board");
	selectedPiece : Piece = null;
	socket;

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

	assignSelectedClass () {
	  let currentlySelected = document.querySelector(`div.selected`);
		if (currentlySelected != null) {
			currentlySelected.classList.remove("selected");
		}
		if (this.selectedPiece != null) {
			let id = this.selectedPiece.y*this.game.width + this.selectedPiece.x + 1;
			let selectedSquare = document.querySelector(`div#cell${ id }`); 
			selectedSquare.classList.add("selected");
		}
	}

	selectSquare(event : Event) : void {
		let target = (<HTMLDivElement>event.target);
		let id : number = +target.id.substring(4);
		let sourceY : number = Math.floor((id-1)/this.game.width);
		let sourceX : number = (id-1)%this.game.width;
		let prospectivePiece : Piece = this.game.getPiece(sourceX, sourceY);
		this.game.ifIsPiece(prospectivePiece,
			_ => {
				if (this.selectedPiece === prospectivePiece) {
					this.selectedPiece = null;
				} else {
					this.selectedPiece = prospectivePiece;
				}
			},
			_ => {
				if (this.selectedPiece != null) {
					if (this.game.move(this.selectedPiece, new Piece(sourceX, sourceY, this.selectedPiece.type))) {
						let notation : string = `${numberToLetter(this.selectedPiece.x)+(this.selectedPiece.y+1)}:${numberToLetter(sourceX)+(sourceY+1)}`;
						this.socket.emit('move', notation);
					}
				}
				this.selectedPiece = null;
			}
		);
		this.updateBoard();
		this.assignSelectedClass();
	}
}