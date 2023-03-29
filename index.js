function fibnacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

function factorial(n) {
  sum = 1;
  for (let i = 1; i <= 5; i++) {
    sum = sum * i;
  }
  return sum;
}
console.log(factorial(5));
