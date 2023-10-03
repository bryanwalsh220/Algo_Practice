/* 
Given a square matrix (2d array) of integers
Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/
const squareMatrix1 = [
    [1, 2, 3], //      
    [4, 5, 6], //      
    [9, 8, 9], //       
];
const expected1 = 2;
/* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
  */

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
    left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
  */
function diagonalDifference(sqrMatrix) {
    //create variables
    let rightToLeftSum = 0;
    let leftToRightSum = 0;
    const matrixSize = sqrMatrix.length

    //for loop for i from 0 to matrixsize 
    for (let i = 0; i < matrixSize; i++) {
        leftToRightSum += sqrMatrix[i][i]; //add the element on the left to right diagonal
        rightToLeftSum += sqrMatrix[i][matrixSize - i - 1]; //add the element on the right to left diagonal
    }
    
    //difference = absolute value of leftToRightSum - rightToLeftSum 
    //return absoluteDifference
    return Math.abs(leftToRightSum - rightToLeftSum)
    }




console.log(diagonalDifference(squareMatrix1))
console.log(diagonalDifference(squareMatrix2))