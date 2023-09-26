/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
  console.log(`hello ${name}`);
}
greet("hamza");

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */

function isOdd(n) {
  return n % 2 !== 0;
  true;
}
console.log(isOdd(3));
/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  let numS = 0;
  for (numS = 1; numS < n; numS += 2) {
    numS++;
  }
  return n - 2;
}

console.log(oddsSmallerThan(7));

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  const square = 0;
  const double = 0;
  if (n % 2 !== 0) {
    return n * 2;
  } else {
    return n * n;
  }
}
console.log(squareOrDouble(4));
