class Stack {
  constructor() {
    this.items = [];
  }

  add(data) {
    this.items.push(data);
  }
  remove() {
    if (this.items.length) {
      return this.items.pop();
    }
    return "Stack is Empty";
  }
  peek() {
    if (this.items.length) {
      return this.items[0];
    }
    return "Stack is Empty";
  }

  display() {
    if (this.items.length) {
      return this.items.map((e) => {
        return e;
      });
    }
    return "Stack is Empty";
  }
}
