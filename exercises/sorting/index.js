// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {

  for (let i = 0; i < arr.length; i++) {
    for (let x = 0; x < arr.length - i; x++) {
      if (arr[x] > arr[x + 1]){
        const temp = arr[x + 1]
        arr[x + 1] = arr[x]
        arr[x] = temp
      }
    }
  }

  return arr
}

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
