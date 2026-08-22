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

//06. Merge Two Sorted Arrays into One Sorted Array
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function mergeSortedArrays(arr1, arr2) {
    const merged = [];
    let l = 0,
        r = 0;
    while (l < arr1.length && r < arr2.length) {
        if (arr1[l] < arr2[r]) {
            merged.push(arr1[l]);
            l++;
        } else {
            merged.push(arr2[r]);
            r++;
        }
    }


    return [...merged, ...arr1.slice(l), ...arr2.slice(r)];


}

//07. Find the Median of an Unsorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
function findMedian(nums) {
    nums.sort((a, b) => a - b);
    const mid = Math.floor(nums.length / 2);
    if (nums.length % 2 === 0) {
        return (nums[mid - 1] + nums[mid]) / 2;
    } else {
        return nums[mid];
    }
}

//08. Find the Second Largest Number in an Array
/**
 * @param {number[]} nums
 * @return {number|null}
 */
function findSecondLargest(nums) {
    nums.sort((a, b) => b - a);

    return nums.length >= 2 ? nums[1] : null;
}

//09. Find Most Frequent Element (Mode) in an Array
/**
 * @param {Array} arr
 * @return {*}
 */
function findMode(arr) {
    if (arr.length === 0) return null;
    const mxVal = Math.max(...arr);
    const freq = new Array(mxVal + 1).fill(0);
    let maxCount = 0;
    let mode = null;
    for (const num of arr) {
        freq[num]++;
        if (freq[num] > maxCount) {
            maxCount = freq[num];
            mode = num;
        }
    }
    return mode;
}
//10. Natural Sorting of Strings with Embedded Numbers
/**
 * @param {string[]} arr
 * @return {string[]}
 */
function naturalSort(arr) {
    return arr.sort((a, b) => {
        return a.localeCompare(b, undefined, { numeric: true })
    });
}