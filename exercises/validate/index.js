// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  // if (!!node){
  //   if (node.data > max && node.data < min ){
  //     return false
  //   } else {
  //     validate(node.left, min, node.data)
  //     validate(node.right, node.data, max)
  //   }
  // }
  // return true

  //node must not be greater than max
  if (!!max && !(node.data < max) ){
    return false
  }

  if( !!min && !(node.data > min)){
    return false
  }

  // check left side must be less than current node data
  if(!!node.left && !validate(node.left, min, node.data)){
    return false
  }

  // check right side must be greater than current node data
  if(!!node.right && !validate(node.right, node.data, max)){
    return false
  }

  return true

}

module.exports = validate;
