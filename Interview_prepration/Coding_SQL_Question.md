# SQL Query Challenges

### Create a two component one parent and one child. In child component Create input text box where user can enter the color name pass this color to parent component and change the background color of the body
### Read 3 json files, events.json, users.json, event-user.json
 - event { id, name, country, city, date } (given)
 - user {id, name, country, city} (given)
 - event-user (not given you you have to predict your schema what it should be? )
 - For a given date range - identify the users coming from different cities than event is hosted in.
 - Do using any programming and consider file is already import data in the 3 variables.
    - such as eventsData, usersData, eventUsers.
    - or for Sql you can consider there are three tables users, event, event_user

 - ***ANSWER*** 
    - Using Sql
    ```sql
    SELECT 
        e.id AS event_id,
        e.name AS event_name,
        e.city AS event_city,
        u.id AS user_id,
        u.name AS user_name,
        u.city AS user_city
    FROM 
        events e
    JOIN 
        event_user eu ON e.id = eu.event_id
    JOIN 
        users u ON eu.event_userId = u.id
    WHERE 
        e.date BETWEEN '2024-10-01' AND '2024-10-31' -- specify the date range here
        AND e.city != u.city;
    ```
  
---

### Problem 1: Get Flavors and Their Length (Asked in Cigna HealthCare)

### Problem Statement
Given a table named `Cakes` with the following columns:

- `Cake_Id` (int)
- `Flavor` (varchar)
- `Cost` (int)
- `Type` (varchar)

You are tasked with writing a query to:
1. Display the **Flavor** and the **length of the Flavor**.
2. Sort the results alphabetically by the **Flavor**.
3. Each flavor should only be displayed once.

### Input
The `Cakes` table contains the following sample data:

| Cake_Id | Flavor    | Cost | Type  |
|---------|-----------|------|-------|
| 1002    | Vanilla   | 20   | Cake  |
| 1003    | Chocolate | 15   | Cake  |
| 1004    | Varila    | 18   | Cake  |
| 1005    | Strawberry| 25   | Cake  |

### Output
Your query should return the flavor and its length, ordered alphabetically:

| Flavor     | FlavorLength |
|------------|--------------|
| Chocolate  | 9            |
| Strawberry | 10           |
| Vanilla    | 7            |
| Varila     | 6            |

### SQL Query

```sql
SELECT DISTINCT Flavor, LENGTH(Flavor) AS FlavorLength
FROM Cakes
ORDER BY Flavor;
```


### Problem 2: Concatenate Name and Age (Asked in Cigna HealthCare)

### Problem Statement
Given a table named `PersonalDetails` with the following columns:

- `Id` (int)
- `Name` (varchar)
- `Age` (int)
- `MaritalStatus` (varchar)

Write a query that concatenates the `Name` and `Age` columns with a space in between. Each person's information should be displayed as a single line.

### Input
The `PersonalDetails` table contains the following sample data:

| Id    | Name       | Age | MaritalStatus |
|-------|------------|-----|---------------|
| 1001  | Kyla       | 52  | Single        |
| 1002  | Elaine     | 70  | Married       |
| 1003  | MacKensie  | 71  | Divorced      |
| 1004  | Jermaine   | 42  | Single        |
| 1005  | Zahir      | 55  | Divorced      |
| 1006  | Xaviera    | 23  | Married       |
| 1007  | Yasir      | 47  | Married       |
| 1008  | Rebekah    | 60  | Single        |

### Output
The query should return a concatenated `Name` and `Age` for each person:

```
Kyla 52
Elaine 70
MacKensie 71
Jermaine 42
Zahir 55
Xaviera 23
Yasir 47
Rebekah 60
```

### SQL Query

```sql
SELECT CONCAT(Name, ' ', Age) AS Name_Age
FROM PersonalDetails;
```
