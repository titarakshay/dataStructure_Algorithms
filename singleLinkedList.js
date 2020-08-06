//user define class node

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

//linked list class
class LinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(element) {
    let newNode = new Node(element);
    var current;
    if (this.head == null) {
      this.head = newNode;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current = newNode;
    }
    this.size++;
  }

  delete(element) {
    let newNode = new Node(element);
    let current = this.head;
    if (this.head == newNode) {
      return (this.head = current.next);
    }
    while (current.next) {
      if (current.next == newNode) {
        return (current = current.next.next);
      }
      current = current.next;
    }
    x;
    this.size--;
  }
  printList() {
    var current = this.head;
    var str = "";
    while (current) {
      str = str + current.element + "here";
      current = current.next;
    }
    console.log(str);
  }
}
