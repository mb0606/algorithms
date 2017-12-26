// Rock Paper Permutation
// Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.

// Examples
// Input: 1 Output: ["r","p","s"]
// Input: 2 Output: 	[ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ]

var rockPaperPermutation = function (countRounds) {

  var newArr = [];
  var array = ['r', 'p', 's'];
  
  if(countRounds !== 0){
	  var traverse = function(value) {
	    if(value.length === countRounds) {
	      newArr.push(value);
	      return;
	    } else {
	      for(var i = 0; i < array.length; i++) {
	        traverse(value + array[i]); 
	      }
	    }
	  }
	  traverse("");
  
  }
  return newArr;
}