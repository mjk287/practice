// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const strN = '' + n
  let revN = strN.split('').reverse()

  // clean up the reversed array of negative sign
  if (revN[revN.length - 1] === '-'){
    revN.unshift(revN.pop())
  }

  return parseInt(revN.join(''))
}

module.exports = reverseInt;
