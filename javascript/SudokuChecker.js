
// Sudoku Checker
// Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

// A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9. 
// More information here.

// (!!!) NOTICE: Newline characters in the inputs have been replaced with <br /> tags to make the value easier to read. In other words, when you see a break, it's actually a

// \n
// character. Check your console when submitting to see the input for yourself.



function sudokuCheck (boardStr) {
    var valid = true, temp = [], side, slot;
    var data = boardStr.split("\n")
    
    var data = data.map(function(arrPos){
      return arrPos.split("");
    }).map(function(arr){
      return arr.map(function(strToNum){
        return Number(strToNum);
      })
    })
    
   console.log("this is data",data)
   
   if (data[0].length !== data.length) valid = false;

    slot = Math.sqrt(data.length);

    data.forEach(function(arr) {
        valid = valid && arr.every(function(val, i) { return arr.indexOf(i + 1) > -1; });
    });


    data.forEach(function(arr, i) {
        temp  = data.map(function(val) { return val[i]; });
        valid = valid && arr.every(function(val, i) { return temp.indexOf(i + 1) > -1; });
    });


    for (var i = 0; i < slot; i++) {

        data.forEach(function(val, e) {
            side  = val.slice(slot * i, slot * i + slot);
            temp  = temp.concat(side);

            if ((e+1) % slot == 0 && e > 0) {
                for (var j = 1; j <= data.length; j++)
                    if (temp.indexOf(j) < 0) valid = false;                 
                temp = [];
            }

        });

    }
    if(valid) {
      return "solved";
    }else {
      return "invalid"
    }
    
}
