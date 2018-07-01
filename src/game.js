"use strict";
exports.__esModule = true;
function letterToNumber(letter) {
    var start = 'a'.charCodeAt(0);
    return 1 + letter.charCodeAt(0) - start;
}
function getNewHnefataflGame() {
    var game = new Game();
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
exports.getNewHnefataflGame = getNewHnefataflGame;
var Game = /** @class */ (function () {
    function Game() {
        this.pieces = [];
        this.width = 11;
        this.height = 11;
        this.typesOfPieces = [
            "king",
            "knight",
            "bandit",
        ];
        this.teams = [
            ["bandit"],
            ["king", "knight"],
        ];
        this.teamToMove = 0;
    }
    Game.prototype.move = function (oldPiece, newPiece) {
        if (oldPiece == null || newPiece == null) {
            return false;
        }
        else if (oldPiece == undefined || newPiece == undefined) {
            return false;
        }
        if (oldPiece.type != newPiece.type) {
            return false;
        }
        for (var i = 0; i < this.teams[this.teamToMove].length; i++) {
            if (this.teams[this.teamToMove][i] === oldPiece.type) {
                this.placePiece(newPiece);
                this.removePiece(oldPiece);
                this.teamToMove = (this.teamToMove + 1) % this.teams.length;
                return true;
            }
        }
        return false;
    };
    Game.prototype.moveUsingNotation = function (move) {
        console.log(move);
        var notationMask = /([a-zA-Z])(\d\d?)\:([a-zA-Z])(\d\d?)/;
        var tokenisedNotation = move.toLowerCase().match(notationMask);
        if (tokenisedNotation) {
            var oldPiece = this.getPiece(letterToNumber(tokenisedNotation[1]) - 1, +tokenisedNotation[2] - 1);
            var newPiece = new Piece(letterToNumber(tokenisedNotation[3]) - 1, +tokenisedNotation[4] - 1, oldPiece.type);
            return this.move(oldPiece, newPiece);
        }
        else {
            return false;
        }
    };
    Game.prototype.placePiece = function (piece) {
        var _this = this;
        return this.ifIsPiece(piece, function (_) {
            _this.pieces[piece.y * _this.width + piece.x] = piece;
            return true;
        }, function (_) {
            return false;
        });
    };
    Game.prototype.getPiece = function (x, y) {
        var type = this.pieces[y * this.width + x];
        return this.ifIsPiece(type, function (_) {
            return type;
        }, function (_) {
            return null;
        });
    };
    Game.prototype.removePiece = function (piece) {
        this.pieces[piece.y * this.width + piece.x] = null;
    };
    Game.prototype.ifIsPiece = function (piece, callback_true, callback_false) {
        if (piece === undefined || piece === null) {
            return callback_false();
        }
        for (var i = 0; i < this.typesOfPieces.length; i++) {
            if (piece.type === this.typesOfPieces[i]) {
                return callback_true();
            }
        }
        return callback_false();
    };
    return Game;
}());
exports.Game = Game;
var Piece = /** @class */ (function () {
    function Piece(pX, pY, pType) {
        this.type = pType;
        this.x = pX;
        this.y = pY;
    }
    return Piece;
}());
exports.Piece = Piece;
