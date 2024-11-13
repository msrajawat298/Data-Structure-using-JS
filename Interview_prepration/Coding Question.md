### Find the duplicates in the array
```
Input : var arr = [1,2,3,4,5,6,2,1];
Output : [1,2]
```
### Find the anagram?
### Count the number of triangle in the output
    arr = [1,3,4,6,5,2,4,9,6,4]
    Output  => 2
### Remove the duplicates?
    Example input  =   [1,1,2,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6]
    Example output = [1,2,3,4,5,6,0,0,0,0,0,0,0,0,0,0,0,0]

### Print prime numbers 
### Design a Digital Clock in HH: MM: SS format in react.
    - Live clock, that means seconds, minutes and hours are updating as the clock.
    - The text in the clock text gets printed in the center of the screen, horizontally and vertically.
    - Whole Background needs to in Black color, and Text needs to be in Green color.

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

- If you had to start a fresh project on your own, how would you approach it? Basically, what things would you choose in your React application? How would you structure it?
- How do you debug the bug in react js?


### What would be the output of the following code?
```js
var languages = ['Java', 'php', 'TypeScript'];
languages.length = 0;
languages.push('Golang'); 
console.log(languages);
```

What would be the output of the following code?
```ts
class TuringQueue<T>{
    private data = [];
    push = (item: T) => this.data.push(item);
    pop = (): T = this.data.shift();
}
const turingQueue = new TuringQueue<number>();
turingQueue.push(0) ; turingQueue.push("1"); console.log(turingQueue);
```