- **If you are working on php project which approach will you use to develop the project how will you decide how many classes should be there and which type of class?**
- **Pros and cons of Redis and Memcached?**
- **Type of array in php?**
- **Difference between composer install and update?**
- **Create a function that take input array and return type of array**
- **There is one api endpoint that call the GatewayController class. How can be implemented in such a way if any payment gate such paypal or razaorpay we are implementing or using in GatewayController should not be modified in php ?**
- **What are d/f b/w php-7 and php-8?**
- **D/f b/w print and echo?**
- **Array combine & Array merge?**
- **What is abstract class in php?**
- **What is interface?**
- **how to implement multiple inheritance in php?**
- **How to use interface in php?**
- **what is PSR-12 ?**
- **what is traits?**
- **If cookie is used client side how php server side script handel the cookie?**
- **How to implement cache in php?**
- **What is SRO operator and what is it use?**
- **What is the use of final keyword?**
- **Implement the SOLID principle in php.**
- **Implement the Singleton Design pattern.**
- **How many class will you create in you project how will you decided if we take an example of atm machine.**
- **OPPS core principles?**
- **What is the difference between class and object?**
- **What is the difference between static and non-static methods?**
- **What is the difference between public, private, and protected?**
- **What is the difference between abstract class and interface?**
- **What is the difference between method overloading and method overriding?**
- **What is the difference between class and interface?**
- **What is the difference between class and abstract class?**
- **What is the difference between abstract class and interface?**
- **Interface is not a part of OPPS principles?**
- **Do you know about the final keyword?**
- **What is the difference between self and this?**
- **What is the difference between self and parent?**
- **What is the difference between self and static?**
- **How can I access a protected or private property or method from a child class in PHP?**
- **What is Namespace ?**
- **Create a two class with the name of transaction that have function with the name of handel  (one will handel the paypal transaction and other razaorpay). Use Transaction class such a way that we will call the handel function it should work for paypal as well as razaorpay without modification into the existing class.**

- **What is the configuration file for Apache and PHP?**
   - **Apache Configuration File**: The main Apache configuration file is `httpd.conf`, but depending on the installation, you may also use `.htaccess` files for per-directory configurations.
   - **PHP Configuration File**: The PHP configuration file is `php.ini`, which controls settings like memory limits, error reporting, and file upload sizes.

- **Can we start a session without user login?**
   - **Yes**, sessions can be started without a user login. In PHP, you can use `session_start()` to initiate a session even if the user is not logged in. Sessions are typically used to track user data across pages regardless of login status.

- **Can we redirect the page in PHP without `header()` function?**
   - Yes, but it's not ideal. Alternatives include using:
     - JavaScript: `echo "<script>window.location.href='newpage.php';</script>";`
     - HTML meta tag: `echo '<meta http-equiv="refresh" content="0;url=newpage.php">';`
   
   However, the `header()` function is the preferred and cleaner method for redirection.

- **Can we write JS, CSS code inside PHP syntax?**
   - **Yes**, you can write JavaScript and CSS inside PHP files, but they should be inside HTML tags. PHP can output JavaScript and CSS like any other HTML content:
     ```php
     echo "<script>alert('Hello');</script>";
     echo "<style>body { background-color: red; }</style>";
     ```

- **Can we use sessions without cookies?**
   - **Yes**, you can use sessions without cookies by passing the session ID in the URL (known as URL rewriting). This is controlled by setting `session.use_cookies` to `0` in `php.ini` and using `SID` constant in links to maintain the session.

- **Can we define multiple indexes in MySQL?**
   - **Yes**, you can define multiple indexes in MySQL. You can create indexes on multiple columns and also create multiple indexes on a single column or across different columns to optimize queries.

---

- How can I check if a PHP function has been overridden?
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

---

- Can we override function in php if yer then how?
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

- How can I call the parent class method after overriding it in PHP?
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
