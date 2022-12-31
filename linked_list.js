// Linked List
// Type of data structure that contains data and points to the next node in the list
// Can easily add or remove node from the list without reorganizing the entire list, unlike arrays
// Search operations are slow (no random access, have to start search from first node)
// Uses more memory than array because of pointer storage
// Singly linked (points to next), Doubly linked (points to previous and next), Circular linked (last node points to first node)
//
// Linked lists need four helper methods: size, clear, getLast, getFirst

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  // Returns the number of nodes present in the linked list
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  // Empties the list
  clear() {
    this.head = null;
  }

  // Returns the last node
  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }

    return lastNode;
  }

  // Returns the first node
  getFirst() {
    return this.head;
  }
}

let node1 = new ListNode(2); // Create new node which stores value of 2
let node2 = new ListNode(5); // Create new node which stores value of 5
let node3 = new ListNode(10); // Create new node which stores value of 10
node1.next = node2; // Points node1 to node2
node2.next = node3; // Points node2 to node3

let list = new LinkedList(node1); // Create linked list with a head of node1
console.log(list.head.next.data); // Access data stored in node2

console.log('List size: ', list.size());

console.log('First node: ', list.getFirst());
console.log('Last node: ', list.getLast());

list.clear();
console.log('List size after clearing: ', list.size());
