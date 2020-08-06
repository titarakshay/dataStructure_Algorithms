class MinHeap {
  constructor() {
    this.heap = [null];
  }
  getMin() {
    return this.heap[1];
  }
  insert(node) {
    // insert node into array at last
    this.heap.push(node);
    if (this.heap.length > 1) {
      let current = this.heap.length - 1;
      // transversing up the parent node untile current node is greater than parents
      while (
        current > 1 &&
        this.heap[Math.floor(current / 2)] > this.heap[current]
      ) {
        // Swapping the two nodes by using the ES6 destructuring syntax
        [this.heap[Math.floor(current / 2)], this.heap[current]] = [
          this.heap[current],
          this.heap[Math.floor(current / 2)],
        ];
        current = Math.floor(current / 2);
      }
    }
  }
}
