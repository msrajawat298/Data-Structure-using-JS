- **What is Node js ?**
        - **Node.js:** An open-source, cross-platform runtime environment for running JavaScript on the server side.
        - **Event-Driven Architecture:** Uses an event-driven, non-blocking I/O model for high efficiency and performance.
        - **Single-Threaded:** Operates on a single-threaded event loop, handling many connections simultaneously.
        - **V8 JavaScript Engine:** Built on the V8 engine, which compiles JavaScript into machine code.
        - **NPM:** Comes with Node Package Manager, the largest ecosystem of open-source libraries and packages.
 
- **What is Node red ?**
- **What do you mean by I/O?**
- **What is middleware in node js ?**
- **What types of middleware have you used in Express?**
- **What is CORS (Cross-Origin Resource Sharing)?**
        - CORS is a security feature implemented in web browsers to control how resources on a web server can be accessed by a web page from a different origin (domain, protocol, or port). 
        - It is a mechanism to allow or restrict cross-origin HTTP requests.
        - **If two services are running on different ports but on the same server, will a CORS issue still occur? : Yes**
        - **If the backend service is running on HTTPS and the frontend is on HTTP, will a CORS issue occur? : Yes**
        - CORS Response Headers: 
                - ```Access-Control-Allow-Origin: domain```
                - ```Access-Control-Allow-Methods: POST, GET```
                - ```Access-Control-Allow-Headers: Content-Type, Authorization``` \\ Specifies which headers can be used in the request.
                - ```Access-Control-Allow-Credentials: true``` \\Indicates whether credentials (e.g., cookies, HTTP authentication) can be sent with the request.
                - ```Access-Control-Max-Age: 3600``` \\ Specifies how long the response can be cached.
        - **Types of CORS Requests**
                - Simple Requests:
                        - For GET or POST requests with standard headers (e.g., Content-Type: application/json).
                        - Handled directly by the server with appropriate CORS headers in the response.
                - Preflight Requests:
                        - For non-simple requests (e.g., PUT, DELETE, custom headers).
                        - The browser sends an OPTIONS request to check if the actual request is allowed.
                        - Example of a preflight OPTIONS request:
                                ```
                                        OPTIONS /api/resource
                                        Origin: https://example-client.com
                                        Access-Control-Request-Method: PUT
                                        Access-Control-Request-Headers: Content-Type
                                ```

- **REST API is stateless; what does stateless mean?**
- **If someone hits the endpoint with 1000 requests per second using a script, how will you restrict them?**
- **What is a rate limiter, and how does it work?**
- **If the rate limit is reached, what will be the status of the response?**
- **What do the different HTTP status codes mean (1XX, 2XX, 3XX, 4XX, 5XX) in general?**
- **Node.js is single-threaded, and other technologies are multi-threaded. Then how is Node.js still fast?**
- **What is the event loop?**
- **If you have an EC2 instance with a 4-core CPU and want to run a Node.js application on all CPUs, how can you assign all CPUs to the Node.js application?**
- **What is master-slave in Node.js?**
- **What is PM2?**
- **Have you developed a microservice in Node.js?**
- **How to do unit testing in node js?**
- **How to test api performance ?**
- **What is Preflight Requests?**
- **[Load Testing in Node.js](https://youtu.be/emFT-S8GAOk?si=g9JaidvA2QN9W4Xe)**
- **What is d/f b/w req.param and req.query?**
- **What is body Parser?**
- **WHAT security mechanisms ARE AVAILABLE IN NODE?**
    - **Input Validation and Sanitization:** Prevent injection attacks by validating and sanitizing user inputs.
    - **Authentication and Authorization:** Implement robust mechanisms to control access to resources.
    - **HTTPS:** Encrypt data transmitted between the client and server.
    - **Helmet:** Secure Express apps by setting various HTTP headers.
    - **Rate Limiting:** Protect against DoS attacks by limiting the number of requests a client can make.
    - **Data Encryption:** Encrypt sensitive data before storing it in the database.
    - **Environment Variables:** Store sensitive configuration data in environment variables.
    - **Content Security Policy (CSP):** Prevent XSS attacks by specifying allowed content sources.
    - Implementing these security mechanisms and best practices will help protect your Node.js applications from common security threats and vulnerabilities.
-   **Why Node js is single Thread ?**
        - Node JS works on the single threaded model to support the asynchronous processing which provides high performance and efficiency to its applications under high amount of load.
-   **In node js what http modules does?**
        - It is handel request and response server.
-   **Explain node js architecture? how is it working?**
        - **Single-Threaded Event Loop:** Node.js operates on a single-threaded event loop, allowing it to handle multiple concurrent operations efficiently.
        - **Non-Blocking I/O:** Node.js uses non-blocking I/O operations to handle many I/O operations concurrently.
        - **Event-Driven:** Node.js follows an event-driven architecture, where events are emitted and listeners handle these events.
        - **V8 JavaScript Engine:** Node.js is built on the V8 JavaScript engine, which compiles JavaScript code into machine code for fast execution.
- **How is operational error different from programming error?**
        - **Operational Errors:**
                - **Definition:** Runtime errors caused by external factors or conditions.
                - **Examples:** Network issues, file system errors, database errors, resource exhaustion.
                - **Handling:** Anticipate and handle gracefully, allowing the application to recover or provide meaningful feedback.
        - **Programming Errors:**
                - **Definition:** Bugs or mistakes in the code due to incorrect logic, syntax errors, or misuse of APIs.
                - **Examples:** Syntax errors, reference errors, type errors, logic errors.
                - **Handling:** Identify and fix during development and testing.

- **D/f b/w ASYNC and AWAIT**
        - **async Keyword:**
                - Declares an asynchronous function.
                - Ensures the function returns a promise.
                - Allows the use of await inside the function.
        - **await Keyword:**
                - Pauses the execution of an async function until a promise is resolved or rejected.
                - Can only be used inside an async function.
                - Returns the resolved value of the promise or throws an error if the promise is rejected.

- **describes the event-driven nature of Node.js?**
        - **Event-Driven Architecture:** Node.js is designed around an event-driven architecture, where the flow of the program is determined by events.
        - **Event Loop:** The core of Node.js's event-driven architecture, continuously checking for events and executing corresponding event handlers.
        - **EventEmitter:** A class that allows objects to emit events and register listeners for those events.
        - **Non-Blocking I/O:** Node.js uses non-blocking I/O operations, allowing it to handle other tasks while waiting for I/O operations to complete.
        - The event-driven nature of Node.js, combined with its non-blocking I/O model, makes it highly efficient and suitable for building scalable network applications.

- **How do you implement JWT for secure api can you provide an example what are the step we need to implement JWT?**
        - Implementing JWT (JSON Web Tokens) for securing an API involves the following steps:
                - 1. **User Authentication (Login)**: The user sends their credentials (e.g., username/password) to the API, and the server validates them.
                - 2. **Generate JWT Token**: Once authenticated, the server generates a JWT token with a payload containing user information and signs it with a secret key.
                - 3. **Send JWT to the client**: The JWT token is returned to the client (usually in the response body).
                - 4. **Client Sends JWT for Subsequent Requests**: For subsequent requests to protected routes, the client includes the JWT token in the `Authorization` header (`Bearer <token>`).
                - 5. **Verify JWT**: On the server side, for each protected request, the API verifies the JWT by checking its signature and validity (e.g., expiration).
                - 6. **Grant Access if Valid**: If the token is valid, the server grants access to the requested resource. Otherwise, it returns an error (e.g., 401 Unauthorized).

- **Best Practices for Implementing JWT**
        - **Store JWT securely**: On the client side, store JWTs in a secure location, like `localStorage` (for frontend) or in an HTTP-only cookie (to prevent XSS attacks).
        - **Use HTTPS**: Always use HTTPS to prevent man-in-the-middle attacks where tokens could be intercepted.
        - **Set token expiration**: Always set an expiration for the token (`expiresIn`), and use refresh tokens to allow users to get a new JWT after expiration.
        - **Secure your secret key**: The secret key used for signing the JWT should be kept safe and not hardcoded in your codebase. You can use environment variables or AWS Secrets Manager for secure storage.

- **Which method is used to create a server in Node.is?**
- **What is type of Kubernetes, it’s StatefulSet or Deployment**
- **Have you worked on CI/CD pipeline for node js ?**
- **How you have implemented unit test cases? Recent challenge have you faced while doing in test ?**
        - Mocking Database Connections:
        - Testing Asynchronous Code:
        - Flaky Tests:
        - Code Coverage:
        - Testing CORS and Security Headers:

- **In which scenario we can use sql and no sql for better performance?**
- **Do you know about CORS concept can you explain ?**

- **There are basically two main types of tokens that are related to identity: ID Tokens and Access Tokens. ID tokens are JSON web tokens meant for use by the application only.**
- **Have you worked on Oauth Authentication**
## Reference Link
- [Node JS 50 MCQ Questions and Answers for BEGINNERS](https://youtu.be/omXqa2XGoWI?si=QNIIl2Oc_gYLVB7H)
- [NodeJS Interview Questions](./NodeJS%20Interview%20Questions.pdf)