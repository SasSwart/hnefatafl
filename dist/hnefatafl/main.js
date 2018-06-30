(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".board-container {\n\tdisplay: flex;\n\theight: 100%\n}\n\n.board-border {\n\t\tflex: 1.8;\n}\n\n.col {\n\tflex: auto;\n}\n\n.col-1 {\n\tflex: 2;\n}\n\n.col-2 {\n\tflex: 2;\n}\n\n.col-3 {\n\tflex: 3;\n}\n\n.col-5 {\n\tflex: 5;\n}\n\n.col-8 {\n\tflex: 8;\n}\n\n.col-11 {\n\tflex: 11;\n}\n\n.board {\n\tposition: relative;\n\ttop: 50%;\n\t-webkit-transform: translate(0, -50%);\n\t        transform: translate(0, -50%);\n\tdisplay: -ms-grid;\n\tdisplay: grid;\n\t-ms-grid-columns: auto auto auto auto auto auto auto auto auto auto auto;\n\t    grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto;\n\tbackground-color: #8b5a2b;\n}\n\n.square {\n  position: relative;\n  flex-basis: calc(33.333% - 10px);\n  border: 1px solid #664513;\n  margin: 3px;\n  border-radius: 3px;\n  box-sizing: border-box;\n}\n\n.square::before {\n  content: '';\n  display: block;\n  padding-top: 100%;\n}\n\n.square > * {\n  position: absolute;\n  top: 50%; left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  height: 90%;\n  width: 90%;\n}\n\n.bandit, .knight, .king {\n\tborder-radius: 50%;\n}\n\n.bandit {\n\tbackground-color: #36261B;\n\tborder: none;\n}\n\n.knight {\n\tbackground-color: #e5e5d8;\n\tborder: none;\n}\n\n.king {\n\tbackground-color: #e6be8a;\n\tborder: none;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"board-container\">\n  <div class=\"col\"></div>\n<div class=\"board-border\">\n  <div class=\"board\">\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell1\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell2\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell3\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell4\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell5\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell6\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell7\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell8\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell9\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell10\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell11\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell12\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell13\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell14\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell15\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell16\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell17\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell18\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell19\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell20\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell21\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell22\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell23\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell24\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell25\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell26\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell27\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell28\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell29\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell30\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell31\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell32\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell33\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell34\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell35\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell36\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell37\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell38\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell39\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell40\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell41\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell42\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell43\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell44\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell45\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell46\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell47\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell48\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell49\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell50\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell51\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell52\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell53\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell54\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell55\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell56\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell57\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell58\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell59\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell60\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell61\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell62\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell63\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell64\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell65\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell66\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell67\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell68\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell69\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell70\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell71\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell72\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell73\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell74\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell75\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell76\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell77\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell78\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell79\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell80\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell81\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell82\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell83\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell84\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell85\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell86\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell87\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell88\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell89\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell90\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell91\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell92\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell93\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell94\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell95\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell96\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell97\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell98\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell99\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell100\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell101\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell102\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell103\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell104\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell105\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell106\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell107\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell108\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell109\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell110\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell111\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell112\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell113\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell114\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell115\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell116\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell117\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell118\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell119\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell120\"></div>\n    <div (click)=\"selectSquare($event)\" class=\"square\" id=\"cell121\"></div>\n  </div>\n</div>\n  <div class=\"col\"></div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Game = /** @class */ (function () {
    function Game() {
        this.pieces = [];
        this.width = 11;
        this.height = 11;
        this.typesOfPieces = [
            "king",
            "knight",
            "bandit"
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
            }
        }
    };
    Game.prototype.placePiece = function (piece) {
        var _this = this;
        return this.ifIsPiece(piece, function (_) {
            _this.pieces[piece.x * _this.width + piece.y] = piece;
            return true;
        }, function (_) {
            return false;
        });
    };
    Game.prototype.getPiece = function (x, y) {
        var type = this.pieces[x * this.width + y];
        return this.ifIsPiece(type, function (_) {
            return type;
        }, function (_) {
            return null;
        });
    };
    Game.prototype.removePiece = function (piece) {
        this.pieces[piece.x * this.width + piece.y] = null;
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
var Piece = /** @class */ (function () {
    function Piece(pX, pY, pType) {
        this.type = pType;
        this.x = pX;
        this.y = pY;
    }
    return Piece;
}());
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Hnefatafl';
        this.game = new Game();
        this.board = document.querySelector(".board");
        this.selectedPiece = null;
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
    AppComponent.prototype.updateBoard = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var prospectivePiece = this_1.game.pieces[i];
            var prospectiveSquare = document.querySelector("div#cell" + (i + 1));
            this_1.game.ifIsPiece(prospectivePiece, function (_) {
                prospectiveSquare.classList.add(prospectivePiece.type);
            }, function (_) {
                _this.game.typesOfPieces.forEach(function (piece) {
                    prospectiveSquare.classList.remove(piece);
                });
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.game.width * this.game.height; i++) {
            _loop_1(i);
        }
    };
    AppComponent.prototype.selectSquare = function (event) {
        var _this = this;
        var id = +event.target.id.substring(4);
        var sourceX = Math.floor((id - 1) / this.game.width);
        var sourceY = (id - 1) % this.game.width;
        var prospectivePiece = this.game.getPiece(sourceX, sourceY);
        this.game.ifIsPiece(prospectivePiece, function (_) {
            if (_this.selectedPiece === prospectivePiece) {
                _this.selectedPiece = null;
            }
            _this.selectedPiece = prospectivePiece;
        }, function (_) {
            if (_this.selectedPiece != null) {
                _this.game.move(_this.selectedPiece, new Piece(sourceX, sourceY, _this.selectedPiece.type));
            }
            _this.selectedPiece = null;
        });
        this.updateBoard();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/user/Dropbox/Documents/Programming/JS/hnefatafl/hnefatafl/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map