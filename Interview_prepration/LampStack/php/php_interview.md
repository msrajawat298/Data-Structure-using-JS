1. **Asked By Property Share**

    1. **If we have multiple services and one goes down, how will other services know?**
        - Use a **health check mechanism** (e.g., heartbeat monitoring) with a service discovery tool like **Consul**, **Eureka**, or Kubernetes.
        - Implement a **circuit breaker pattern** to detect and handle service failures.
        - Use monitoring tools like **Prometheus**, **Grafana**, or **Datadog** for real-time alerts.

    1. **A user registers, and the communication service should trigger a welcome event. How will it know?**
        - Use an **event-driven architecture**:
        - After user registration, an event like `UserRegistered` is published to a **message broker** (e.g., RabbitMQ, Kafka, or AWS SNS).
        - The **communication service** subscribes to the event and triggers the welcome email.

    1. **Difference between Job and Event**
        1. **Event**:
            - Represents something that happened in the system (e.g., `UserRegistered`).
            - Typically used for **real-time notifications**.
        1. **Job**:
            - A specific task that needs to be executed (e.g., sending a welcome email).
            - Used for **background processing** or delayed execution.

    1. **What are Facades?**
        - In PHP (Laravel context), a **Facade** provides a **static-like interface** to classes in the service container.
        - They act as a proxy to underlying classes, allowing easier usage of services.

    1. **What is a Rate Limiter?**
        - A mechanism to **control the rate of requests** sent to a system.
        - Commonly used to:
        - Prevent **DDoS attacks**.
        - Ensure fair resource distribution.
        - Implemented via algorithms like **Token Bucket** or **Leaky Bucket**.
    1. **What is CSRF (Cross-Site Request Forgery)?**
        - A web security vulnerability where an attacker tricks a user into performing actions without their consent.
        - Prevented using:
        - 1. **CSRF tokens**.
        - Checking the **Referer** header.
        - Enforcing **same-origin policies**.

    1. **How many types of inheritance in PHP?**
        1. **Single Inheritance** (A class inherits from one parent).
        2. **Multilevel Inheritance** (A class inherits from a class, which inherits from another).
        3. **Hierarchical Inheritance** (Multiple classes inherit from one parent).
        4. PHP does not support **multiple inheritance**, but this can be achieved using **traits**.

    1. **Advantages of Interface and Abstract Class**
        1. **Interface**:
            - Allows **multiple inheritance**.
            - Defines a **contract** without implementation.
        1. **Abstract Class**:
            - Allows shared **default implementation**.
            - Used when classes share some common functionality.


    1. **Types of Access Modifiers in PHP**
        1. **public**: Accessible everywhere.
        2. **protected**: Accessible within the class and child classes.
        3. **private**: Accessible only within the class.

    1. **How can we access private property of a class?**
        - Through **getter** and **setter methods**.
        - Using **Reflection API** (not recommended for production code).

    1. **Have you used transactions in PHP?**
        - Yes, transactions are used with database operations to ensure **atomicity**, **consistency**, **isolation**, and **durability** (ACID).
        - Example:
            ```php
            $pdo->beginTransaction();
            try {
                // Execute queries
                $pdo->commit();
            } catch (Exception $e) {
                $pdo->rollBack();
            }
            ```

    1. **Advantages and Disadvantages of Using Transactions**
        - 1. **Advantages**:
            - Ensures **data integrity**.
            - Allows **rollback** in case of failure.
        - 1. **Disadvantages**:
            - Slower due to **locking mechanisms**.
            - Increased **resource usage**.

    1. **Query to Select the 2nd Last Record**
    - Using MySQL:
    ```sql
    SELECT * 
    FROM table_name 
    ORDER BY id DESC 
    LIMIT 1 OFFSET 1;
    ```
    - Replace `id` with the appropriate column for ordering.

---

1. **If you are working on php project which approach will you use to develop the project how will you decide how many classes should be there and which type of class?**
1. **Pros and cons of Redis and Memcached?**
1. **Type of array in php?**
1. **Difference between composer install and update?**
1. **Create a function that take input array and return type of array**
1. **There is one api endpoint that call the GatewayController class. How can be implemented in such a way if any payment gate such paypal or razaorpay we are implementing or using in GatewayController should not be modified in php ?**
1. **What are d/f b/w php-7 and php-8?**
1. **D/f b/w print and echo?**
1. **Array combine & Array merge?**
1. **What is abstract class in php?**
1. **What is interface?**
1. **how to implement multiple inheritance in php?**
1. **How to use interface in php?**
1. **what is PSR-12 ?**
1. **what is traits?**
1. **If cookie is used client side how php server side script handel the cookie?**
1. **How to implement cache in php?**
1. **What is SRO operator and what is it use?**
1. **What is the use of final keyword?**
1. **What is SOLID principles?**
1. **Implement the SOLID principle in php**
1. **Implement the Singleton Design pattern.**
1. **How many class will you create in you project how will you decided if we take an example of atm machine.**
1. **OPPS core principles?**
1. **What is the difference between class and object?**
1. **What is the difference between static and non-static methods?**
1. **What is the difference between public, private, and protected?**
1. **What is the difference between abstract class and interface?**
1. **What is the difference between method overloading and method overriding?**
1. **What is the difference between class and interface?**
1. **What is the difference between class and abstract class?**
1. **What is the difference between abstract class and interface?**
1. **Interface is not a part of OPPS principles?**
1. **Do you know about the final keyword?**
1. **What is the difference between self and this?**
1. **What is the difference between self and parent?**
1. **What is the difference between self and static?**
1. **How can I access a protected or private property or method from a child class in PHP?**
1. **What is Namespace ?**
1. **Create a two class with the name of transaction that have function with the name of handel  (one will handel the paypal transaction and other razaorpay). Use Transaction class such a way that we will call the handel function it should work for paypal as well as razaorpay without modification into the existing class.**

1. **What is the configuration file for Apache and PHP?**
   - 1. **Apache Configuration File**: The main Apache configuration file is `httpd.conf`, but depending on the installation, you may also use `.htaccess` files for per-directory configurations.
   - 1. **PHP Configuration File**: The PHP configuration file is `php.ini`, which controls settings like memory limits, error reporting, and file upload sizes.

1. **Can we start a session without user login?**
   - 1. **Yes**, sessions can be started without a user login. In PHP, you can use `session_start()` to initiate a session even if the user is not logged in. Sessions are typically used to track user data across pages regardless of login status.

1. **Can we redirect the page in PHP without `header()` function?**
   - Yes, but it's not ideal. Alternatives include using:
     - JavaScript: `echo "<script>window.location.href='newpage.php';</script>";`
     - HTML meta tag: `echo '<meta http-equiv="refresh" content="0;url=newpage.php">';`
   
   However, the `header()` function is the preferred and cleaner method for redirection.

1. **Can we write JS, CSS code inside PHP syntax?**
   - 1. **Yes**, you can write JavaScript and CSS inside PHP files, but they should be inside HTML tags. PHP can output JavaScript and CSS like any other HTML content:
     ```php
     echo "<script>alert('Hello');</script>";
     echo "<style>body { background-color: red; }</style>";
     ```

1. **Can we use sessions without cookies?**
   - 1. **Yes**, you can use sessions without cookies by passing the session ID in the URL (known as URL rewriting). This is controlled by setting `session.use_cookies` to `0` in `php.ini` and using `SID` constant in links to maintain the session.

1. **Can we define multiple indexes in MySQL?**
   - 1. **Yes**, you can define multiple indexes in MySQL. You can create indexes on multiple columns and also create multiple indexes on a single column or across different columns to optimize queries.

1. **How can I check if a PHP function has been overridden?**
    ```php
    <?php
    class ParentClass {
        public function displayMessage() {
            echo "This is the parent class message.\n";
        }
    }

    class ChildClass extends ParentClass {
        public function displayMessage() {
            echo "This is the child class message.\n";
        }
    }

    function isMethodOverridden($childClass, $methodName) {
        $parentClass = get_parent_class($childClass);
        if ($parentClass === false) {
            return false; // No parent class
        }

        $childMethod = new ReflectionMethod($childClass, $methodName);
        $parentMethod = new ReflectionMethod($parentClass, $methodName);

        return $childMethod->getDeclaringClass()->getName() !== $parentMethod->getDeclaringClass()->getName();
    }

    $child = new ChildClass();
    $methodName = 'displayMessage';

    if (isMethodOverridden($child, $methodName)) {
        echo "The method '$methodName' has been overridden in the child class.\n";
    } else {
        echo "The method '$methodName' has not been overridden in the child class.\n";
    }
    ?>
    ```

1. **Can we override function in php if yer then how?**
    ```php
    <?php
    class ParentClass {
        public function displayMessage() {
            echo "This is the parent class message.\n";
        }
    }

    class ChildClass extends ParentClass {
        public function displayMessage() {
            echo "This is the child class message.\n";
        }
    }

    $parent = new ParentClass();
    $parent->displayMessage(); // Outputs: This is the parent class message.

    $child = new ChildClass();
    $child->displayMessage(); // Outputs: This is the child class message.
    ?>
    ```

1. **How can I call the parent class method after overriding it in PHP?**
    ```php
    <?php
    class ParentClass {
        public function displayMessage() {
            echo "This is the parent class message.\n";
        }
    }

    class ChildClass extends ParentClass {
        public function displayMessage() {
            // Call the parent class method
            parent::displayMessage();
            
            // Additional functionality in the child class
            echo "This is the child class message.\n";
        }
    }

    $child = new ChildClass();
    $child->displayMessage();
    ?>
    ```
