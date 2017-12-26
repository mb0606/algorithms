
// Power Set
// Return an array that contains the power set of a given string. The power set is a set of all the possible subsets, including the empty set.

// Make sure your code does the following:

// All characters in a subset should be sorted alphabetically, and the array of subsets should be sorted alphabetically.
// Sets of the same characters are considered duplicates regardless of order and count only once, e.g. ‘ab’ and ‘ba’ are the same.
// Duplicate characters in strings should be ignored; for example, ‘obama’ should be evaluated as if it only contained one ‘a’. See the result below.

function powerSet (string) {
 var copy = [];
 var results = [''];
 var temp = "";
 
 for (var i = 0; i < string.length; i++) {
   if (copy.indexOf(string[i]) === -1) {
     copy.push(string[i]);
   }
 }
 
 function recurse(input, copied) {
   if (input.length <= string.length && input.length > 0) {
     if (results.indexOf(input.split('').sort().join('')) === -1) {
       results.push(input.split('').sort().join(''));
     } 
   }
   
   if (input.length >= string.length) {
        return;
    }
   
   for (var i = 0; i < string.length; i++) {
     var temp = input;
     temp += copied[i];
     recurse(temp, copied.slice(0, i).concat(copied.slice(i + 1)));
   }
 }
 recurse('', copy);
 
 return results.sort();
}