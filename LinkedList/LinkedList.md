### LinkedList class represents a linked list data structure.

- A linked list is a linear data structure where each element, called a node, contains a reference to the next node in the sequence. 
- It consists of nodes that are connected together via links or pointers.

### Applications of LinkedList:
- Storing and manipulating collections of data where the order of elements is important.
- Implementing stacks, queues, and other data structures.
- Efficiently inserting and deleting elements at any position in the list.
- Implementing hash tables and hash maps.
- Representing sparse matrices and adjacency lists in graphs.

LinkedList provides the following methods:
- `constructor()`: Initializes an empty linked list.
- `isEmpty() -> boolean`: Checks if the linked list is empty.
- `getSize() -> number`: Returns the number of elements in the linked list.
- `addFirst(data)`: Adds a new node with the given data at the beginning of the linked list.
- `addLast(data)`: Adds a new node with the given data at the end of the linked list.
- `addAtIndex(index, data)`: Adds a new node with the given data at the specified index in the linked list.
- `removeFirst()`: Removes the first node from the linked list and returns its data.
- `removeLast()`: Removes the last node from the linked list and returns its data.
- `removeAtIndex(index)`: Removes the node at the specified index from the linked list and returns its data.
- `getFirst()`: Returns the data of the first node in the linked list.
- `getLast()`: Returns the data of the last node in the linked list.
- `getAtIndex(index)`: Returns the data of the node at the specified index in the linked list.
- `contains(data) -> boolean`: Checks if the linked list contains a node with the given data.
- `clear()`: Removes all nodes from the linked list.