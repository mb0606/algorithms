Even Occurrence

Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

Input: [ 1, 3, 3, 3, 2, 4, 4, 2, 5 ] Output: 2

function evenOccurrence (arr) {
  var obj = {};
  var allEvens = [];
  for(var i = 0; i < arr.length ; i++){
    if(obj[arr[i]] === undefined){
      obj[arr[i]] =  0;
    }
    obj[arr[i]] = obj[arr[i]] + 1;
  }
  
  for(var key in obj){
    if(obj[key] % 2 === 0){
      allEvens.push(key);
    }
  }
  
  if(allEvens.length !== 0){
  
    if(isNaN(arr[0])){
      return allEvens[0];
    } else {
      return parseInt(allEvens[0]);
    }
  }
  return null
 
}