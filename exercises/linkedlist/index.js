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
}




module.exports = { Node, LinkedList };
