/*
Mark Ziecina
SENG 691Z Agile Software Development
Spring 2015
Assignment 1
*/
var gameBoard = [[' ', ' ', ' '],[' ', ' ', ' '],[' ', ' ', ' ']];

var winningPositions = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6]
];

function displayBoard() {
	document.write("<pre>");
	document.writeln("-----");
	document.writeln("|"+ gameBoard[0][0] + gameBoard[0][1] + gameBoard[0][2] + "|");
	document.writeln("|"+ gameBoard[1][0] + gameBoard[1][1] + gameBoard[1][2] + "|");
	document.writeln("|"+ gameBoard[2][0] + gameBoard[2][1] + gameBoard[2][2] + "|");
	document.writeln("----");
	document.write("</pre>");
}

function isDraw() {
	if (isWinner("X") == true || isWinner("O") == true) return false;

	for (var i = 0; i < 9; i++) {
		var position = getCoordinates(winningPositions[i][0]);
		if (gameBoard[position[0]][position[1]] == ' ') return false;
	}

	return true;
}

function isWinner(piece) {
	for (var i = 0; i < winningPositions.length; i++) {
		var position1 = getCoordinates(winningPositions[i][0]);
		var position2 = getCoordinates(winningPositions[i][1]);
		var position3 = getCoordinates(winningPositions[i][2]);
		if (gameBoard[position1[0]][position1[1]] == piece &&
			gameBoard[position2[0]][position2[1]] == piece &&
			gameBoard[position3[0]][position3[1]] == piece
			) return true;
	}
	return false;
}

function getCoordinates(n) {
	var c = 3;
	return [Math.floor(n/c), n % c]
}

function isGameOver() {
	if (isWinner("X") || isWinner("O") || isDraw()) return true;
	else false;
}

function insertPiece(piece, x, y) {
	if ((piece == "X" || piece == "O") && gameBoard[x][y] == ' ' && !isGameOver()) {
		gameBoard[x][y] = piece;
		return true;
	} else {
		return false;
	}
}

function clearBoard() {
	gameBoard = [[' ', ' ', ' '],[' ', ' ', ' '],[' ', ' ', ' ']];
	return true;
}