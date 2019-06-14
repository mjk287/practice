// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  let node1 = list.head
  let node2 = list.head

  while (!!node2.next && !!node2.next.next){
      node1 = node1.next
      node2 = node2.next.next
      if (node1 === node2){
        return true
      }
  }

  return false
}

module.exports = circular;
