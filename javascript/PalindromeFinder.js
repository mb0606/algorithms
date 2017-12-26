
// examples:
// palindromeFinder("bcdsdkabbajgrebbyu")
// => [ 'dsd', 'abba' ]
// palindromeFinder("A Toyota. Race fast, safe car. A Toyota")
// => [ 'atoyota', 'ara', 'atoyotaracefastsafecaratoyota', 'ara', 'atoyota' ]
// palindromeFinder("aibohphobia")
// => [ 'aibohphobia' ]
//complexity: O(n^2) worst-case

var palindromeFinder = function(str) {
  if(typeof str !== "string") throw "Argument must be string.";
  var str = str.toLowerCase();
  str = str.replace(/[^\w\s]|_/g, "");
  var palindromes = [];
  for (var i = 1; i < str.length-1; i++) {
    var candidate = str[i];
    var offset = 1;
    // find cases of "aba"
    while(str[i-offset] && str[i+offset] && str[i-offset] === str[i+offset]) {
      candidate = str[i-offset] + candidate + str[i+offset];
      offset++;
    }
    if(candidate.length > 1) palindromes.push(candidate);

    // find cases of "abba"
    var candidate = "";
    var offset = 0;
    while(str[i-offset-1] && str[i+offset] && str[i-offset-1] === str[i+offset]) {
      candidate = str[i-offset-1] + candidate + str[i+offset];
      offset++;
    }
   if(candidate.length > 2) palindromes.push(candidate);
  }
  return palindromes;
}


