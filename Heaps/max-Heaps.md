### Max-Heap Implementation in JavaScript:

```javascript
class MaxHeap {
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

  // Peek the top element (maximum) without removing it
  peek() {
    return this.heap[0];
  }

  // Insert a new element into the heap
  insert(value) {
    this.heap.push(value);  // Add at the end
    this.heapifyUp();       // Restore heap property
  }

  // Remove and return the maximum element
  extractMax() {
    if (this.heap.length === 0) return null;
    
    const max = this.heap[0];                  // Get the max (root)
    this.heap[0] = this.heap.pop();            // Replace root with last element
    this.heapifyDown();                        // Restore heap property
    
    return max;
  }

  // Heapify up: move the last element up to its correct position
  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      index > 0 &&
      this.heap[index] > this.heap[this.getParentIndex(index)]
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  // Heapify down: move the root down to its correct position
  heapifyDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let largerChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] > this.heap[largerChildIndex]
      ) {
        largerChildIndex = rightChildIndex;
      }

      if (this.heap[index] > this.heap[largerChildIndex]) break;

      this.swap(index, largerChildIndex);
      index = largerChildIndex;
    }
  }

  // Display the heap elements
  display() {
    console.log(this.heap);
  }
}

// Example Usage
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(20);
maxHeap.insert(2);
maxHeap.insert(8);

console.log("Heap Elements:");
maxHeap.display();  // Output: [20, 8, 10, 2, 5]

console.log("Extract Max:", maxHeap.extractMax()); // Output: 20
console.log("After Extracting Max:");
maxHeap.display();  // Output: [10, 8, 5, 2]
```

### Key Operations:
1. **Insertion** (`insert(value)`):
   - Inserts an element at the bottom of the heap and then "bubbles up" to ensure the heap property (min-heap or max-heap) is maintained.

2. **Extraction** (`extractMin()` or `extractMax()`):
   - Removes the root (min or max) and replaces it with the last element, then "bubbles down" to maintain the heap property.

3. **Peek** (`peek()`):
   - Returns the root element (minimum for a min-heap, maximum for a max-heap) without removing it.

4. **Heapify Up/Down**:
   - `heapifyUp()`: Moves an element up the tree to restore the heap property after insertion.
   - `heapifyDown()`: Moves an element down the tree to restore the heap property after extraction.

This implementation shows how heaps work, ensuring efficient operations like insertions and removals in O(log n) time.