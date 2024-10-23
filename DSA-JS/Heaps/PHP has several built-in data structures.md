PHP has several built-in data structures available through the Standard PHP Library (SPL). These include `SplPriorityQueue`, as well as classes for stacks, queues, and other useful structures. Below is a list of the most commonly used built-in SPL data structures and functions:

### **SPL Data Structures in PHP**

1. **SplStack (Stack - LIFO)**
   - Implements a stack (Last In First Out).
   - Methods:
     - `push($value)` – Adds an element to the stack.
     - `pop()` – Removes and returns the last added element.
     - `top()` – Peeks at the top element without removing it.
   
   ```php
   $stack = new SplStack();
   $stack->push('element1');
   $stack->push('element2');
   echo $stack->pop(); // Outputs 'element2'
   ```

2. **SplQueue (Queue - FIFO)**
   - Implements a queue (First In First Out).
   - Methods:
     - `enqueue($value)` – Adds an element to the queue.
     - `dequeue()` – Removes and returns the first added element.
     - `bottom()` – Peeks at the first element.
   
   ```php
   $queue = new SplQueue();
   $queue->enqueue('task1');
   $queue->enqueue('task2');
   echo $queue->dequeue(); // Outputs 'task1'
   ```

3. **SplPriorityQueue (Priority Queue)**
   - Implements a priority queue where each element is associated with a priority.
   - Methods:
     - `insert($value, $priority)` – Inserts an element with a specified priority.
     - `extract()` – Removes and returns the element with the highest priority.
     - `setExtractFlags()` – Controls what gets extracted (data, priority, or both).
   
   ```php
   $queue = new SplPriorityQueue();
   $queue->insert('task1', 1);
   $queue->insert('task2', 2);
   echo $queue->extract(); // Outputs 'task2'
   ```

4. **SplDoublyLinkedList**
   - Implements a doubly linked list (each node has references to the next and previous nodes).
   - Methods:
     - `push($value)` – Adds an element to the end of the list.
     - `unshift($value)` – Adds an element to the front of the list.
     - `pop()` – Removes the element from the end of the list.
     - `shift()` – Removes the element from the front of the list.
   
   ```php
   $list = new SplDoublyLinkedList();
   $list->push('item1');
   $list->unshift('item0');
   echo $list->pop(); // Outputs 'item1'
   ```

5. **SplFixedArray**
   - Implements an array with a fixed size.
   - Methods:
     - `fromArray($array, $save_indexes = true)` – Creates a fixed array from a standard array.
     - `toArray()` – Converts the fixed array back to a regular array.
     - `count()` – Returns the number of elements in the array.
   
   ```php
   $array = new SplFixedArray(5);
   $array[0] = 'item1';
   echo $array[0]; // Outputs 'item1'
   ```

6. **SplObjectStorage**
   - A special data structure to store objects as keys and associate data with them.
   - Methods:
     - `attach($obj, $data = null)` – Adds an object with optional associated data.
     - `detach($obj)` – Removes an object.
     - `contains($obj)` – Checks if an object is in the storage.
   
   ```php
   $storage = new SplObjectStorage();
   $obj1 = new stdClass();
   $obj2 = new stdClass();
   $storage->attach($obj1, 'data1');
   echo $storage[$obj1]; // Outputs 'data1'
   ```

7. **SplMinHeap / SplMaxHeap**
   - Implements a min-heap (smallest element first) and max-heap (largest element first).
   - Methods:
     - `insert($value)` – Adds an element to the heap.
     - `extract()` – Removes and returns the root (min or max) element.
   
   ```php
   $minHeap = new SplMinHeap();
   $minHeap->insert(10);
   $minHeap->insert(5);
   echo $minHeap->extract(); // Outputs 5
   ```

### **Other SPL Classes**

- **SplHeap** – The abstract class that `SplMinHeap` and `SplMaxHeap` inherit from.
- **SplFileObject** – Provides an object-oriented interface for reading and writing files.
- **SplObserver / SplSubject** – Used for implementing the Observer design pattern.

### **Summary of SPL Data Structures:**

| **Data Structure**       | **SPL Class**          |
|--------------------------|------------------------|
| Stack                    | `SplStack`             |
| Queue                    | `SplQueue`             |
| Priority Queue           | `SplPriorityQueue`     |
| Doubly Linked List       | `SplDoublyLinkedList`  |
| Fixed-size Array         | `SplFixedArray`        |
| Object Storage           | `SplObjectStorage`     |
| Min-Heap                 | `SplMinHeap`           |
| Max-Heap                 | `SplMaxHeap`           |
| Heap (abstract)          | `SplHeap`              |
| File Handling            | `SplFileObject`        |
| Observer Pattern         | `SplObserver` / `SplSubject` |

These data structures are directly available in PHP, and you can use them for various tasks involving efficient data manipulation. Let me know if you need help with specific functions or examples!