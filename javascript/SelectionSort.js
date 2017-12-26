function selectionSort(arr) {
      var length = arr.length;
      
      for (var i = 0; i < length-1; i++) { 
        var min = i; 
        for (var j = i+1; j < length; j++) { 
          if(arr[j] < arr[min]) { 
            min = j; 
          }
        }
        if(min != i) { 
          var tmp = arr[i];
          arr[i] = arr[min];
          arr[min] = tmp;
        }
      }
      return arr
}