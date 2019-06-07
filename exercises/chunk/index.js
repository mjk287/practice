// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let lastIndex = 0
  const chunked = []

  while(lastIndex < array.length){
    chunked.push(array.slice(lastIndex, lastIndex + size))
    lastIndex += size
  }

  return chunked
}

// function chunk(array, size) {
//   // iterate through array and append item to sub array based on a conditional
//   // the conditional is that its length should be less than size. if so, append
//   // sub array to origin array and empty sub array for next set of items
//   // at the end append sub array if it has any items regardless
//
//   let subArr = []
//   const newArr = []
//
//   for (let item of array){
//     if (subArr.length === size){
//       newArr.push(subArr)
//       subArr = []
//     }
//     subArr.push(item)
//   }
//
//   if (subArr.length !== 0){
//     newArr.push(subArr)
//   }
//
//   return newArr
// }

module.exports = chunk;
