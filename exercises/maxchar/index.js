// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let stringHash = {}
  let mostChar
  let prevNum = 0

  for (let char of str) {
    !stringHash[char] ? stringHash[char] = 1 : stringHash[char]++
  }

  Object.entries(stringHash).forEach((entry) => {
    if (entry[1] > prevNum){
      prevBiggestChar = entry[0]
      prevNum = entry[1]
    }
  })

  return prevBiggestChar
}

maxChar('Hello There!')

module.exports = maxChar;
