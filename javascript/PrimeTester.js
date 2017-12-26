// Prime Tester
// A prime number is an integer greater than 1 that has no divisors other than itself and 1. Write a function that accepts a number and returns true if it’s a prime number, false if it’s not. The grader is looking at the efficiency of your solution (number of operations) as well as correctness! 


// Parameters:


// n (required) - a number.
// Input: 2 Output: True
// Input: 1 Output: False

function primeTester (n) {
    var start = 2;
    while (start <= Math.sqrt(n)) {
        if (n % start++ < 1) return false;
    }
    return n > 1;
}