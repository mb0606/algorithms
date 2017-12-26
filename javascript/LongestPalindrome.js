// Longest Palindrome
// Implement a function that finds the longest palindrome in a given string. For example, in the string “My dad is a racecar athlete”, the longest palindrome is “a racecar a”. Count whitespaces as valid characters. Other palindromes in the above string include “dad”, “ete”, “ dad “ (including whitespace on each side of dad).

Input 
"aibohphobia"
Output 
"aibohphobia"

Input 
"My dad is a racecar athlete"
Output 
"a racecar a"

function longestPalindrome(string){
  var maxPalLength = 0,
	  maxPal = '';
	
  for(var i=0; i < string.length; i++) {
	var substring = string.substr(i, string.length);
	  
	for(var j= substring.length; j>=0; j--) {
	  var subOfsubstring = substring.substr(0, j);
		
      console.log("substring to check", subOfsubstring);
      
      if (isPalindrome(subOfsubstring)) {
        
        console.log("If it passes the step ", subOfsubstring);
        
		if (subOfsubstring.length > maxPalLength) {
			maxPalLength = subOfsubstring.length;
			maxPal = subOfsubstring;
		}
	  }
	}
  }
	
  console.log("return the maxPal", maxPalLength, maxPal);
  return maxPal;
}

function isPalindrome(string) {
  var rev = string.split("").reverse().join("");
  return string === rev;
}