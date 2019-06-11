// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null){
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor(){
    this.head = null
  }

  insertFirst(data){
    this.head = new Node(data, this.head)
  }

  size(){
    let counter = 0
    let currentNode = this.head

    while (!!currentNode){
      currentNode = currentNode.next
      counter++
    }

    return counter
  }

  getFirst(){
    return this.head
  }

  getLast(){
    let currentNode = this.head

    while(!!currentNode.next){
      currentNode = currentNode.next
    }

    return currentNode
  }
}


module.exports = { Node, LinkedList };
