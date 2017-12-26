// Sum Array
// Given an array of numbers, calculate the greatest contiguous sum of numbers in it. A single array item will count as a contiguous sum.

// Input : [1,2,3] Output: 6 
// Input : [ 1, 2, 3, -6, 4, 5, 6 ] Output: 15

function sumArray (arr) {
  // Write your code here, and
  // return your final answer.
    var sum = arr[0],
        currentSum = 0,
        i = 0,
        arrLength = arr.length;
    
    
   if (arrLength > 0) {

    for (i = 0; i < arrLength; i++) {
       currentSum = Math.max((currentSum + arr[i]), arr[i]);
        sum = Math.max(currentSum, sum);
    }
    return sum
   }
  
  return;
       
}