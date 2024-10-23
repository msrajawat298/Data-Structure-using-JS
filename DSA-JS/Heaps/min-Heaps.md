### Min-Heap Implementation in JavaScript:

```javascript
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Helper method to swap two elements
  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  // Get the parent index of a given node
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // Get the left child index
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  // Get the right child index
  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  // Peek the top element (minimum) without removing it
  peek() {
    return this.heap[0];
  }

  // Insert a new element into the heap
  insert(value) {
    this.heap.push(value);  // Add at the end
    this.heapifyUp();       // Restore heap property
  }

  // Remove and return the minimum element
  extractMin() {
    if (this.heap.length === 0) return null;
    
    const min = this.heap[0];                  // Get the min (root)
    this.heap[0] = this.heap.pop();            // Replace root with last element
    this.heapifyDown();                        // Restore heap property
    
    return min;
  }

  // Heapify up: move the last element up to its correct position
  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      index > 0 &&
      this.heap[index] < this.heap[this.getParentIndex(index)]
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  // Heapify down: move the root down to its correct position
  heapifyDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[smallerChildIndex]
      ) {
        smallerChildIndex = rightChildIndex;
      }

      if (this.heap[index] < this.heap[smallerChildIndex]) break;

      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }

  // Display the heap elements
  display() {
    console.log(this.heap);
  }
}

// Example Usage
const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(2);
minHeap.insert(8);

console.log("Heap Elements:");
minHeap.display();  // Output: [2, 5, 3, 10, 8]

console.log("Extract Min:", minHeap.extractMin()); // Output: 2
console.log("After Extracting Min:");
minHeap.display();  // Output: [3, 5, 8, 10]
```
