// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let strArray = str.split(' ')
  let newSentence = []

  for (let word of strArray) {
    const restOfWord = word.slice(1, word.length)

    newSentence.push(word[0].toUpperCase() + restOfWord)
  }

  return newSentence.join(' ')
}

module.exports = capitalize;
