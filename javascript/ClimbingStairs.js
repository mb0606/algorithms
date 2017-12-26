
// Climbing Stairs
// You are climbing a stair case. It takes n steps to reach to the top. Your solution will need to be optimized to run in O(n) time complexity.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


function climbStairs (n) {
  if( n <=3 ) return n
  let low =1, high = 2, temp;
  while(n-2){
    temp = high;
    high += low;
    low = temp
    n--
  }
  return high
}