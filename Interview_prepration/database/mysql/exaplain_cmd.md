In MySQL, you can determine whether an index is being used by examining the query execution plan using the `EXPLAIN` statement. This command shows how MySQL is executing the query, including which indexes (if any) are being utilized.

Here’s how you can check if an index is being used in MySQL:

### 1. Use the `EXPLAIN` statement

When you execute a query, use the `EXPLAIN` keyword before the query to see its execution plan. For example:

```sql
EXPLAIN SELECT * FROM my_table WHERE column1 = 'value';
```

This will provide an output that gives information about how MySQL executes the query, including whether an index is being used.

### 2. Analyze the output
The `EXPLAIN` output contains several columns. Here are the important ones to check for index usage:

- **id**: The identifier for each part of the query (useful when multiple tables are involved).
- **select_type**: Type of query (e.g., `SIMPLE`, `PRIMARY`, `SUBQUERY`, etc.).
- **table**: The table to which the row belongs.
- **type**: Type of join, indicating the performance of the query. The most common types are:
  - `ALL`: Full table scan (no index used).
  - `index`: Full scan of the index (not as bad as `ALL`, but still reads many rows).
  - `range`: Uses the index to fetch rows in a specific range.
  - `ref`, `eq_ref`: Use of the index to retrieve specific rows.
  - `const`: Very fast because MySQL knows that only one row matches.
- **possible_keys**: Shows which indexes could potentially be used.
- **key**: Shows the index that MySQL actually chose to use for this query.
- **key_len**: Length of the key that MySQL uses.
- **ref**: Which columns or constants are compared to the index.
- **rows**: Estimated number of rows that will be scanned.
- **Extra**: Additional information about the query execution.

### Example Output

```sql
EXPLAIN SELECT * FROM my_table WHERE column1 = 'value';
```

| id  | select_type | table    | type  | possible_keys | key   | key_len | ref    | rows  | Extra       |
| --- | ----------- | -------- | ----- | ------------- | ----- | ------- | ------ | ----- | ----------- |
| 1   | SIMPLE      | my_table | ref   | idx_column1   | idx_column1 | 5  | const  | 1     | Using index |

- **key**: This shows the actual index used (`idx_column1` in this case).
- **possible_keys**: Lists the indexes that could be used (based on your table structure and query).
- **type**: The `ref` type indicates an index is used to find matching rows.
- **Extra**: "Using index" suggests MySQL is able to retrieve data entirely from the index, without needing to access the actual table rows.

### 3. Use `SHOW INDEX` to list available indexes
You can also check the available indexes on a table using:

```sql
SHOW INDEX FROM my_table;
```

This will list all the indexes for the specified table, including their names, columns, uniqueness, and more.

### 4. Slow Query Log Analysis
If you're analyzing performance, enabling the MySQL slow query log and reviewing it may give insights into whether indexes are being missed or poorly utilized on slow-running queries.

By using `EXPLAIN` and analyzing the query output, you can easily check whether an index is being used and make adjustments to improve performance if necessary.