function mergeSort(arr){
    if( arr.length < 2 ) return arr;

    var midPoint = Math.round(arr.length / 2);
    return merge(
        mergeSort(arr.slice(0, midPoint)),
        mergeSort(arr.slice(midPoint))
        );
}
function merge(left, right){
    var output = [];
    while (left.length && right.length){
        output.push(left[0] < right[0] ? left.shift() : right.shift()); 
    }
    while (left.length){
        output.push(left.shift())
    }
    while (right.length){
        output.push(right.shift())
    }
  return output;
}