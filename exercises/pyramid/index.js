// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  // outer iteration for the rows
  // inner iteration for the columns

  for (let i = 0; i < n; i++){
    let stairs = ''
    const numOfCol = (n * 2 - 1)
    // fill up a step with pound or empty
    for (let x = 0; x < numOfCol; x++){
      // if the current position is within this range, add a pound
      const mid = n - 1
      if (x <= mid + i && x >= mid - i){
        stairs += '#'
      }else{
        stairs += ' '
      }
    }
    console.log(stairs)
  }
}


module.exports = pyramid;
