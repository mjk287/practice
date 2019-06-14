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

    if(!currentNode){
      return null
    }

    while(!!currentNode.next){
      currentNode = currentNode.next
    }

    return currentNode
  }

  clear(){
    this.head = null
  }

  removeFirst(){
    //check if there is a head so 'this.head.next' won't error out
    if (!this.head){
      return
    }

    this.head = this.head.next
  }

  removeLast(){
    //check if there is a head as well as a succeeding node

    if (!this.head){
      return
    } else if (!this.head.next){
      return this.head = null
    }

    let prevNode = this.head
    let currentNode = this.head.next

    //iterate until we hit the last node
    while(!!currentNode.next){
      prevNode = currentNode
      currentNode = currentNode.next
    }

    return prevNode.next = null
  }

  insertLast(data){
    //check to see if list is empty
    const newNode = new Node(data)

    if (!this.getLast()){
      return this.head = newNode
    }

    this.getLast().next = newNode
  }

  getAt(index){
    let counter = 0
    let currentNode = this.head

    while (!!currentNode){
      if (counter === index){
        return currentNode
      } else {
      currentNode = currentNode.next
      counter++
      }
    }

    return null
  }

  // getAt(index){
  //   let counter = 0
  //   let currentNode = this.head
  //
  //   if(!currentNode || index >= this.size()){
  //     return null
  //   }
  //
  //   while (counter < index){
  //     currentNode = currentNode.next
  //     counter++
  //   }
  //
  //   return currentNode
  // }

  removeAt(index){
    //edge cases to be weary of: first index, out of bounds index, index at size + 1, list is empty
    let prevNode

    //check for empty list
    if(!this.head){
      return null
    }

    //check for first index
    if(index === 0){
      return this.head = this.head.next
    }

    prevNode = this.getAt(index - 1)
    //out of bounds
    if (!!prevNode && !!prevNode.next){
      const nodeToDelete = prevNode.next
      prevNode.next = nodeToDelete.next
    }
  }

  insertAt(data, index){
    //check for edge cases: empty list, first index, out of bounds
    if(!this.head || index === 0){
      this.insertFirst(data)
      return
    }

    const prevNode = this.getAt(index - 1)

    if(!!prevNode && !!prevNode.next){
      const node = new Node(data, prevNode.next)
      prevNode.next = node
    } else {
      this.insertLast(data)
    }

  }

  forEach(task){
    let currentNode = this.head

    while (!!currentNode){
      task(currentNode)
      currentNode = currentNode.next
    }

    return
  }

  *[Symbol.iterator](){
    let currentNode = this.head

    while(!!currentNode){
      yield currentNode
      currentNode = currentNode.next
    }
  }
}


module.exports = { Node, LinkedList };
