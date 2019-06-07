// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // start by removing extraneous characters and capitalizations

  const strA = stringA.replace(/[^\w]/g, '').toLowerCase().split('')
  const strB = stringB.replace(/[^\w]/g, '').toLowerCase().split('')

  if (strA.length !== strB.length){
    return false
  }

  const strAHash = {}
  const strBHash = {}

  for (let char of strA) {
    !strAHash[char] ? strAHash[char] = 1 : strAHash[char]++
  }

  for (let char of strB) {
    !strBHash[char] ? strBHash[char] = 1 : strBHash[char]++
  }

  for (let char in strAHash) {
    if (strAHash[char] !== strBHash[char]){
      return false
    }
  }

  return true
}

module.exports = anagrams;
