/*
Mark Ziecina
SENG 691Z Agile Software Development
Spring 2015
Assignment 1
*/

function fibonacci(n) {
	if (n < 0) return "Error";
	else if (n == 0 || n == 1) return 0;
	else if (n == 2) return 1; 
	else return fibonacci(n - 1) + fibonacci(n - 2);
}