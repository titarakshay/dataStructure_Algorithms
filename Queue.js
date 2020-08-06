class Queue {
  constructor() {
    this.items = [];
  }

  add(data) {
    this.items.push(data);
  }
  remove() {
    if (this.items.length) {
      return this.items.shift();
    }
    return "Queue is Empty";
  }
  peek() {
    if (this.items.length) {
      return this.items[0];
    }
    return "Queue is Empty";
  }

  display() {
    if (this.items.length) {
      return this.items.map((e) => {
        return e;
      });
    }
    return "Queue is Empty";
  }
}
