Design patterns are also heavily used in JavaScript to improve the architecture, reusability, and scalability of code. Here’s a breakdown of some common design patterns and their application in JavaScript:

### 1. **Singleton Pattern**
   - **Purpose:** Ensures that a class has only one instance and provides a global point of access to it.
   - **Application:** Used when you need to maintain a single instance across your app, like managing a logging service, user settings, or app configurations.
   
   ```javascript
   const Singleton = (function () {
       let instance;

       function createInstance() {
           const object = new Object("I am the instance");
           return object;
       }

       return {
           getInstance: function () {
               if (!instance) {
                   instance = createInstance();
               }
               return instance;
           },
       };
   })();

   const instance1 = Singleton.getInstance();
   const instance2 = Singleton.getInstance();
   console.log(instance1 === instance2); // true
   ```

### 2. **Factory Pattern**
   - **Purpose:** Defines an interface for creating objects but allows subclasses to alter the type of objects that will be created.
   - **Application:** Useful for creating objects when you don’t know the exact class ahead of time, like in UI component creation, user objects, or products.

   ```javascript
   class Car {
       constructor(model) {
           this.model = model;
       }
   }

   class Bike {
       constructor(model) {
           this.model = model;
       }
   }

   class VehicleFactory {
       static createVehicle(type, model) {
           switch (type) {
               case 'car':
                   return new Car(model);
               case 'bike':
                   return new Bike(model);
               default:
                   throw new Error("Vehicle type not recognized");
           }
       }
   }

   const myCar = VehicleFactory.createVehicle('car', 'Tesla');
   const myBike = VehicleFactory.createVehicle('bike', 'Ducati');
   ```

### 3. **Observer Pattern**
   - **Purpose:** Defines a one-to-many relationship where when one object changes, all dependents are notified and updated automatically.
   - **Application:** Used in event-driven architectures like in JavaScript when handling DOM events, where multiple observers listen to changes (e.g., event listeners).

   ```javascript
   class Subject {
       constructor() {
           this.observers = [];
       }

       subscribe(observer) {
           this.observers.push(observer);
       }

       unsubscribe(observer) {
           this.observers = this.observers.filter(obs => obs !== observer);
       }

       notify(data) {
           this.observers.forEach(observer => observer.update(data));
       }
   }

   class Observer {
       update(data) {
           console.log(`Observer received data: ${data}`);
       }
   }

   const subject = new Subject();
   const observer1 = new Observer();
   const observer2 = new Observer();

   subject.subscribe(observer1);
   subject.subscribe(observer2);

   subject.notify("New data available");
   ```

### 4. **Decorator Pattern**
   - **Purpose:** Adds responsibilities or behavior to individual objects dynamically without altering the class structure.
   - **Application:** Used to extend or override functionality in objects, like enhancing UI components, extending the functionality of objects in a modular way.

   ```javascript
   function coffee() {
       return "Coffee";
   }

   function addMilk(coffeeFunc) {
       return function() {
           return coffeeFunc() + " + Milk";
       };
   }

   function addSugar(coffeeFunc) {
       return function() {
           return coffeeFunc() + " + Sugar";
       };
   }

   let myCoffee = coffee;
   myCoffee = addMilk(myCoffee);
   myCoffee = addSugar(myCoffee);

   console.log(myCoffee()); // "Coffee + Milk + Sugar"
   ```

### 5. **Strategy Pattern**
   - **Purpose:** Defines a family of algorithms, encapsulates each one, and makes them interchangeable based on context.
   - **Application:** Used when you have different ways to perform an action and need to swap strategies at runtime (e.g., different payment methods, data validation strategies).

   ```javascript
   class PaymentContext {
       constructor(strategy) {
           this.strategy = strategy;
       }

       setStrategy(strategy) {
           this.strategy = strategy;
       }

       pay(amount) {
           this.strategy.pay(amount);
       }
   }

   class PayPal {
       pay(amount) {
           console.log(`Paid ${amount} using PayPal`);
       }
   }

   class CreditCard {
       pay(amount) {
           console.log(`Paid ${amount} using Credit Card`);
       }
   }

   const paymentContext = new PaymentContext(new PayPal());
   paymentContext.pay(100); // Paid 100 using PayPal

   paymentContext.setStrategy(new CreditCard());
   paymentContext.pay(200); // Paid 200 using Credit Card
   ```

### 6. **Proxy Pattern**
   - **Purpose:** Provides a surrogate or placeholder for another object to control access to it.
   - **Application:** Useful when you want to add control or delay functionality, like lazy loading images, caching, or logging requests before forwarding them to another service.

   ```javascript
   class RealImage {
       constructor(filename) {
           this.filename = filename;
       }

       display() {
           console.log(`Displaying ${this.filename}`);
       }
   }

   class ProxyImage {
       constructor(filename) {
           this.realImage = null;
           this.filename = filename;
       }

       display() {
           if (this.realImage === null) {
               this.realImage = new RealImage(this.filename);
           }
           this.realImage.display();
       }
   }

   const image = new ProxyImage("image.jpg");
   image.display(); // Loads and displays the image
   image.display(); // Directly displays the image (no loading)
   ```

### 7. **Adapter Pattern**
   - **Purpose:** Converts one interface to another that a client expects.
   - **Application:** Useful when working with legacy code or third-party libraries where you need to bridge incompatible interfaces.

   ```javascript
   class OldSystem {
       constructor() {
           this.oldRequest = function() {
               return "Old System Response";
           };
       }
   }

   class Adapter {
       constructor() {
           this.oldSystem = new OldSystem();
       }

       newRequest() {
           return this.oldSystem.oldRequest();
       }
   }

   const adapter = new Adapter();
   console.log(adapter.newRequest()); // "Old System Response"
   ```

### 8. **Command Pattern**
   - **Purpose:** Encapsulates a request as an object, allowing for the parameterization of clients with queues, logs, and undoable operations.
   - **Application:** Common in implementing undo functionality, event-driven actions, or task queuing.

   ```javascript
   class Light {
       on() {
           console.log("Light is On");
       }

       off() {
           console.log("Light is Off");
       }
   }

   class LightOnCommand {
       constructor(light) {
           this.light = light;
       }

       execute() {
           this.light.on();
       }
   }

   class LightOffCommand {
       constructor(light) {
           this.light = light;
       }

       execute() {
           this.light.off();
       }
   }

   class RemoteControl {
       constructor() {
           this.commands = [];
       }

       press(command) {
           this.commands.push(command);
           command.execute();
       }
   }

   const light = new Light();
   const lightOn = new LightOnCommand(light);
   const lightOff = new LightOffCommand(light);

   const remote = new RemoteControl();
   remote.press(lightOn); // Light is On
   remote.press(lightOff); // Light is Off
   ```

### 9. **Builder Pattern**
   - **Purpose:** Constructs a complex object step by step, allowing for different representations.
   - **Application:** Used when constructing complex objects with many optional parameters, like building a UI form or assembling an API request.

   ```javascript
   class Burger {
       constructor() {
           this.ingredients = [];
       }

       addIngredient(ingredient) {
           this.ingredients.push(ingredient);
           return this;
       }

       build() {
           return `Burger with ${this.ingredients.join(", ")}`;
       }
   }

   const burger = new Burger();
   console.log(burger.addIngredient("Cheese").addIngredient("Lettuce").build());
   // Burger with Cheese, Lettuce
   ```

### Conclusion
Using **design patterns in JavaScript** helps improve code readability, maintainability, and scalability. Each pattern solves a specific problem by organizing code in a reusable and efficient way. Depending on the problem at hand, you can choose the appropriate pattern to optimize your code's structure and behavior.