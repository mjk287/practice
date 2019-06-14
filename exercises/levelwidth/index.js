// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let arr = [root]
  let widths = [1]
  let level = []

  while(!!arr.length){
    const currentNode = arr.shift()

    level.push(...currentNode.children, )

    if(!arr.length && !!level.length){
      arr.push(...level)
      widths.push(level.length)
      level = []
    }
  }

  return widths.filter(width => width !== 0)
}

module.exports = levelWidth;
