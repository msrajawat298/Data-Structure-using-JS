class HashTable {
    constructor(size = 50) {
      this.buckets = new Array(size);
      this.size = size;
    }
  
    // Simple hash function to convert keys into an index
    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.size;
    }
  
    // Insert or update a key-value pair
    set(key, value) {
      const index = this._hash(key);
      
      if (!this.buckets[index]) {
        this.buckets[index] = [];
      }
  
      // Check if key already exists, update if it does
      const existing = this.buckets[index].find(item => item[0] === key);
      if (existing) {
        existing[1] = value; // Update value for the same key
      } else {
        this.buckets[index].push([key, value]); // Add new key-value pair
      }
    }
  
    // Retrieve a value by key
    get(key) {
      const index = this._hash(key);
      if (!this.buckets[index]) return undefined;
  
      // Find the key-value pair in the bucket
      const item = this.buckets[index].find(item => item[0] === key);
      return item ? item[1] : undefined;
    }
  
    // Remove a key-value pair
    remove(key) {
      const index = this._hash(key);
      if (!this.buckets[index]) return false;
  
      // Find the key-value pair in the bucket and remove it
      const itemIndex = this.buckets[index].findIndex(item => item[0] === key);
      if (itemIndex !== -1) {
        this.buckets[index].splice(itemIndex, 1); // Remove the key-value pair
        return true;
      }
  
      return false;
    }
  
    // Show all key-value pairs in the hash table
    display() {
      this.buckets.forEach((bucket, index) => {
        if (bucket) {
          console.log(`Bucket ${index}: `, bucket);
        }
      });
    }
  }
  
  // Usage example
  const hashTable = new HashTable();
  
  hashTable.set('name', 'John');
  hashTable.set('age', 30);
  hashTable.set('city', 'New York');
  
  console.log('Retrieve "name":', hashTable.get('name'));  // Output: John
  console.log('Retrieve "age":', hashTable.get('age'));    // Output: 30
  
  hashTable.set('name', 'Jane'); // Updating 'name' key
  
  console.log('Updated "name":', hashTable.get('name'));   // Output: Jane
  
  hashTable.remove('city');  // Removing 'city' key
  
  hashTable.display();  // Displays the hash table contents
  