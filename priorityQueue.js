class Element {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor(maxSize) {
    if (!maxSize) {
      maxSize = 10;
    }
    this.maxSize = maxSize;
    this.container = [];
  }
  // add new element  in container upon priority
  add(data, priority) {
    if (this.container >= this.maxSize) return "Container is full!!";
    let element = new Element(data, priority);
    let addFlag = false;
    for (let i in this.container) {
      if (element.priority < this.container[i].priority) {
        this.container.splice(i, 0, element);
        addFlag = true;
        break;
      }
    }
    if (!addFlag) {
      this.container.push(element);
    }
  }
  // remove element with highest priority
  remove() {
    if (this.container === 0) return "Container is Empty";
    return this.container.pop();
  }
  peek() {
    if (this.container === 0) return "Container is Empty";
    return this.container[this.container.length - 1];
  }
  clear() {
    this.container = [];
  }
}
