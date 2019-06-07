// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
// check if properly committed

function reverse(str) {
  let newStr = ''

  for (let i = 0; i < str.length; i++){
    newStr += str[str.length - 1 - i]
  }

  return newStr
}

module.exports = reverse;
