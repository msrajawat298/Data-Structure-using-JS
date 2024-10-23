- **Window Functions**
    Window functions perform calculations across a set of table rows that are somehow related to the current row. They do not cause rows to be grouped into a single output row, which means they can provide more granular insights without collapsing the result set.
    - **Example Use Cases:**
        - Ranking: Assigning ranks to rows within a partition.
        - Running Totals: Calculating cumulative sums or averages.
        - Moving Averages: Calculating averages over a sliding window of rows.

- **Types of Window Functions:**
    - **Ranking Functions:**
        - ROW_NUMBER(), RANK(), DENSE_RANK(), NTILE()
    - **Aggregate Functions (used as window functions):**
        - SUM(), AVG(), MIN(), MAX(), COUNT()
    - **Value Functions:**
        - LEAD(), LAG(), FIRST_VALUE(), LAST_VALUE()
    - **Cumulative and Moving Window Functions:**
        - CUME_DIST(), PERCENT_RANK()

- **Syntax:**
    ```sql
    SELECT column, 
       AGGREGATE_FUNCTION() OVER (PARTITION BY column ORDER BY column) AS alias
    FROM table;
    ```
    - **The OVER() clause can contain:**
        - PARTITION BY: Splits the data into partitions, and the window function is applied within each partition.
        - ORDER BY: Specifies the order in which rows are processed within a partition.
    - Example: 
        - Get the salary ranking of employees within each department:
        ```sql
            SELECT department, employee_name, salary,
            RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS salary_rank
            FROM employees;
        ```

- **Pros of Window Functions:**
    - **No Grouping Required:** You can perform aggregate calculations while keeping individual row details intact, avoiding the need for complex subqueries or GROUP BY.
    - **Efficient Ranking:** Window functions make ranking, cumulative, and running total calculations simple and readable.
    - **Flexible Analysis:** They allow for complex data analysis like calculating running totals, moving averages, or comparing current row values with previous or next row values (LAG(), LEAD()).
    - **Performance:** For certain analytical queries, window functions can outperform alternatives like subqueries or joins, as they're often optimized by database engines.

- **Cons of Window Functions:**
    - **Complexity:** Window functions can make queries harder to read and understand, especially for large and nested queries.
    - **Performance on Large Datasets:** While optimized, window functions may still be computationally expensive for very large datasets, especially when combined with multiple partitions or complex ordering.
    - **Not Always Supported in Older Systems:** Some older database systems may not fully support window functions or their advanced features.

- **Joins**
    Joins combine rows from two or more tables based on a related column between them. They are used to retrieve data from multiple tables and are essential for relational database operations.
    - **Example Use Cases:**
        - Combining Data: Merging data from different tables to create a comprehensive dataset.
        - Filtering: Selecting rows that meet certain criteria across multiple tables.
        - Aggregation: Summarizing data from multiple tables.
