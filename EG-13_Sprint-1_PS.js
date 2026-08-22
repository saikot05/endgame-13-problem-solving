//01. Check if a Year is a Leap Year
/**
 * @param {number} year
 * @return {boolean}
 */
function isLeapYear(year) {
    return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
}

//02. Generate Fibonacci Sequence Up to N Terms/**
/**
 * @param {number} n
 * @return {number[]}
 */
function generateFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

//03. Calculate the Greatest Common Divisor (GCD)
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function findGCD(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
//04. Calculate the Least Common Multiple (LCM)
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function findLCM(a, b) {
    if (a === 0 || b === 0) return 0;
    return Math.abs(a * b) / findGCD(a, b);
}
//05. Check if a Number is Prime
/**
 * @param {number} num
 * @return {boolean}
 */
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}