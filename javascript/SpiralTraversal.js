// Spiral Traversal
// Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
// and prints out every value found, but in a spiral from the upper left in to the center.

// Examples

// Input matrix:
// [ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ], [ 11, 12, 13, 14, 15 ], [ 16, 17, 18, 19, 20 ], [ 21, 22, 23, 24, 25 ] ]

// Output:
// [ 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13 ]

function spiralTraversal (matrix) {
  // Write your code here, and
  // return your final answer.
    var result = [];
    
    if(matrix === null || matrix.length === 0 || matrix[0].length === 0){
        return result;
    }
    
    var rows = matrix.length;
    var cols = matrix[0].length;

    var x = 0;
    var y = 0;

    while(rows > 0 && cols > 0){
        if(rows === 1){
            for(var i = 0; i < cols; i++){
                result.push(matrix[x][y++]);
            }
            return result;
        } else if(cols === 1){
            for(i = 0; i < rows; i++){
                result.push(matrix[x++][y]);
            }
             return result;
        }
        
        for(i = 0; i < cols - 1; i++){
            result.push(matrix[x][y++]);
        }
        for(i = 0; i < rows - 1; i++){
            result.push(matrix[x++][y]);
        }
        for(i = 0; i < cols - 1; i++){
            result.push(matrix[x][y--]);
        }
        for(i = 0; i < rows - 1; i++){
            result.push(matrix[x--][y]);
        }
        
        x++;
        y++;
        cols -= 2;
        rows -= 2;
    }
    
    return result;
}
