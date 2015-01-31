/*
Mark Ziecina
SENG 691Z Agile Software Development
Spring 2015
Assignment 1
*/
var gameBoard = [[' ', ' ', ' '],[' ', ' ', ' '],[' ', ' ', ' ']];

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

}

function isWinner(piece) {

}

function isGameOver() {
	if (isWinner("X") || isWinner("O") || isDraw()) return true;
	else false;
}

function insertPiece(piece, x, y) {
	if ((piece == "X" || piece == "O") && gameBoard[x][y] == ' ') {
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