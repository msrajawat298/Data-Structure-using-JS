### 1. **Advantages and Disadvantages of Indexes**
   - **Advantages**:
     - Speeds up retrieval operations.
     - Enhances performance for SELECT queries.
   - **Disadvantages**:
     - Slows down `INSERT`, `UPDATE`, and `DELETE` operations because the index must be updated.
     - Consumes additional disk space.

### 2. **Will it slow down `DELETE` and `UPDATE` queries if we create indexes?**
   - **Yes**, creating indexes can slow down `DELETE` and `UPDATE` queries since every index associated with the table must be updated when a record is modified or deleted.

### 3. What is store Procedure?