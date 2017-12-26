
// Array Zip Sum
// Given two arrays of negative/positive integers, return a new array such that each element at index n is the sum of the two elements from the other arrays at their index n’s.

// Examples

// input xs:          output [11,22,33]
// xs:
// [ 10, 20, 30 ]
// ys:
// [ 1, 2, 3 ]

function zipSum (xs, ys) {
  var newArr =[];
  var length;
  if(xs.length < ys.length){
    length = xs.length;
  }else {
    length = ys.length;
  }
  
  for(var i = 0; i < length ; i++){
    newArr.push( xs[i] + ys[i]);
  }
  return newArr;
}