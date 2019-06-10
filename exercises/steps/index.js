// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, rows = 0, stairs = '') {
  // base case should compare current row with num of steps
  if (rows === n ){
    return;
  }

  // need to move on to next step
  if (stairs.length === n){
    console.log(stairs)
    return steps(n, ++rows, stairs = '')
  }

  if (rows < stairs.length){
    stairs += ' '
  } else {
    stairs += '#'
  }

  return steps(n, rows, stairs)
}

// function steps(n) {
//   for (let i = 1; i <= n; i++){
//     // number of punds to do
//     let step = ''
//     for (let x = 0; x < i; x++){
//       step += '#'
//     }
//     for (let y = 0; y < (n - i); y++){
//       step += ' '
//     }
//
//   console.log(step)
//   }
//
//
// }


module.exports = steps;
