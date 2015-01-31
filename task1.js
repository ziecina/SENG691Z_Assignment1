function fibonacci(n) {
	if (n < 0) return "Error";
	else if (n == 0 || n == 1) return n;
	else fibonacci(n - 1) + fibonacci(n - 2);
}