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