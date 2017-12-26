
// Character Frequency
// Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency and then by ascending order by character.

Input : "aaabbc" Output: [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]


function characterFrequency (string) {
  var newArr = [];
  var arrayOfString = string.split("");
  console.log(arrayOfString);
  if(string === "") return newArr;
  
  for(var i = 0 ; i < arrayOfString.length; i++){
    var found = false;
    for(var j = 0;  j < newArr.length; j++){
      if(newArr[j][0] === arrayOfString[i]){
        newArr[j][1] += 1;
        found = true;
      }
    }
    if(!found){
      var key = arrayOfString[i];
      var count = 1;
      newArr.push([key,count]);
    }
  }
  
  newArr.sort(function(a, b) { 
      if(a[1] === b[1]){
        return b[0].charCodeAt(0) < a[0].charCodeAt(0) ? 1 : -1;
      }
      return a[1] < b[1] ? 1 : -1;
    
  });
  
  return newArr;
}