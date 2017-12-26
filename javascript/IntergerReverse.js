// Integer Reverse
// Given a positive integer n, return its digits reversed. DO NOT CONVERT n INTO A STRING OR ARRAY. Only use integers and math in your solution.

// n = 1234 output = 4321

function reverseInteger (n) {

  var newNum = 0;
  while (n > 0){
    var mod = n % 10;
		n = Math.floor(n / 10);
		newNum = (newNum + mod )* 10 ;

  }
  
  return newNum/10
}
