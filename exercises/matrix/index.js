// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // create empty array of arrays with zeroes
  const emptyArr = []
  for (let i = 0; i < n; i++){
    const emptyRow = []
    for (let i = 0; i < n; i++){
      emptyRow.push(0)
    }
    emptyArr.push(emptyRow)
  }

  // [[0, 0, 0],
  // [0, 0, 0],
  // [0, 0, 0]]

  for (let row = 0; row < emptyArr.length; row++)
  

}

module.exports = matrix;
