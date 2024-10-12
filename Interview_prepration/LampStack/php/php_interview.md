### 1. **What is the configuration file for Apache and PHP?**
   - **Apache Configuration File**: The main Apache configuration file is `httpd.conf`, but depending on the installation, you may also use `.htaccess` files for per-directory configurations.
   - **PHP Configuration File**: The PHP configuration file is `php.ini`, which controls settings like memory limits, error reporting, and file upload sizes.

### 2. **Can we start a session without user login?**
   - **Yes**, sessions can be started without a user login. In PHP, you can use `session_start()` to initiate a session even if the user is not logged in. Sessions are typically used to track user data across pages regardless of login status.

### 3. **Can we redirect the page in PHP without `header()` function?**
   - Yes, but it's not ideal. Alternatives include using:
     - JavaScript: `echo "<script>window.location.href='newpage.php';</script>";`
     - HTML meta tag: `echo '<meta http-equiv="refresh" content="0;url=newpage.php">';`
   
   However, the `header()` function is the preferred and cleaner method for redirection.

### 4. **Can we write JS, CSS code inside PHP syntax?**
   - **Yes**, you can write JavaScript and CSS inside PHP files, but they should be inside HTML tags. PHP can output JavaScript and CSS like any other HTML content:
     ```php
     echo "<script>alert('Hello');</script>";
     echo "<style>body { background-color: red; }</style>";
     ```

### 5. **Can we use sessions without cookies?**
   - **Yes**, you can use sessions without cookies by passing the session ID in the URL (known as URL rewriting). This is controlled by setting `session.use_cookies` to `0` in `php.ini` and using `SID` constant in links to maintain the session.

### 6. **Can we define multiple indexes in MySQL?**
   - **Yes**, you can define multiple indexes in MySQL. You can create indexes on multiple columns and also create multiple indexes on a single column or across different columns to optimize queries.

### 7. What is Namespace ?
### 8. Create a two class with the name of transaction that have function with the name of handel  (one will handel the paypal transaction and other razaorpay). Use Transaction class such a way that we will call the handel function it should work for paypal as well as razaorpay without modification into the existing class.
- What are d/f b/w php-7 and php-8?
- D/f b/w print and echo?
- Array combine & Array merge?
- What is abstract class in php?
- What is interface?
- how to implement multiple inheritance in php?
- How to use interface in php?
- what is PSR-12 ?
- what is traits?
- If cookie is used client side how php server side script handel the cookie?
- How to implement cache in php?
- What is SRO operator and what is it use?
- What is the use of final keyword?
- Implement the SOLID principle in php.
- Implement the Singleton Design pattern.
- How many class will you create in you project how will you decided if we take an example of atm machine.