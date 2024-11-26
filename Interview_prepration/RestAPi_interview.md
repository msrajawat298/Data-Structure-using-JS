- **What is API?**
    - **API (Application Programming Interface):** A set of rules and protocols that allows different software applications to communicate with each other.
    - **Endpoints:** Specific URLs where requests can be made to access resources or perform actions.
    - **Requests and Responses:** Communication involves sending requests to API endpoints and receiving responses with data or results.
    - **HTTP Methods:** Common methods include GET, POST, PUT, and DELETE.
    - **Data Formats:** Standard formats like JSON and XML are used for data exchange.
    - **Authentication and Authorization:** APIs may require verifying the client's identity and determining their permissions.

- **How many maturity levels are there in REST API?**
   - REST API maturity levels are defined by **Richardson’s Maturity Model**, which includes 4 levels:
     1. **Level 0**: Plain Old XML (POX) or one URI with single method (e.g., `POST`).
     2. **Level 1**: Resources are introduced, each with a unique URI.
     3. **Level 2**: HTTP methods (GET, POST, PUT, DELETE) are used properly.
     4. **Level 3**: Hypermedia as the Engine of Application State (HATEOAS) is implemented.
     5. [Click to watch the video](https://youtu.be/IIB-WMpETls?si=VkoqSrP4UpT01j4e)


- **Difference between REST and SOAP?**
   - **REST**:
     - Lightweight and uses HTTP methods (GET, POST, PUT, DELETE).
     - Generally uses JSON or XML.
     - Stateless and relies on standard web principles.
   - **SOAP**:
     - Heavier and uses XML messaging format.
     - Requires strict standards (WSDL) and includes advanced security and transaction handling.
     - Can operate over protocols other than HTTP (e.g., SMTP).

- **Difference Between GET and POST**
    - GET
        - Purpose: Used to retrieve data from a server.
        - Data Transmission: Appends data to the URL as query parameters.
        - Visibility: Data is visible in the URL, making it less secure for sensitive information.
        - Caching: Responses can be cached by browsers and intermediate proxies.
        - Idempotency: Safe and idempotent, meaning multiple identical requests have the same effect as a single request.
        - Size Limit: Limited by URL length restrictions (varies by browser and server).

    - POST
        - Purpose: Used to send data to a server to create/update a resource.
        - Data Transmission: Sends data in the body of the HTTP request.
        - Visibility: Data is not visible in the URL, making it more secure for sensitive information.
        - Caching: Responses are not cached by default.
        - Idempotency: Not idempotent, meaning multiple identical requests can have different effects.
        - Size Limit: Generally no size limit for the data sent in the body.

- **Why GET is Important Even When POST Can Be Used?**
    - Semantics: GET and POST have different semantics. GET is intended for retrieving data without side effects, while POST is intended for actions that change the state of the server.
    - Caching: GET requests can be cached, improving performance and reducing server load. POST requests are not cached by default.
    - Bookmarking and Sharing: URLs with GET parameters can be bookmarked and shared easily. POST data is not included in the URL.
    - Idempotency: GET requests are idempotent, making them safer for repeated requests (e.g., refreshing a page). POST requests can have side effects and are not idempotent.
    - Standards and Conventions: Using the correct HTTP method for the intended action adheres to web standards and conventions, making APIs more predictable and easier to understand.


- **REST (Representational State Transfer)**
    - REST is an architectural style for designing networked applications. 
    - It relies on a stateless, client-server, Cacheable communications protocol, typically HTTP. 
    - RESTful systems are characterized by how they are stateless and separate the concerns of client and server.

- **Key Principles of REST**
    - **Stateless**: 
        - Each request from a client to a server must contain all the information needed to understand and process the request. 
        - The server does not store any state about the client session.
    - **Client-Server Architecture:** 
        - The client and server are separate entities that interact through a standardized interface. 
        - This separation allows for independent evolution of the client and server.
    - **Cacheable:**
        - Responses must define themselves as Cacheable or not to prevent clients from reusing stale or inappropriate data.
    - **Uniform Interface:** 
        - A consistent interface between clients and servers simplifies and decouples the architecture. 
        - This is typically achieved through standard HTTP methods (GET, POST, PUT, DELETE, etc.).
    - **Layered System:** 
        - A client cannot ordinarily tell whether it is connected directly to the end server or to an intermediary along the way. 
        - This can improve scalability and manageability.
    - **Code on Demand (Optional):** 
        - Servers can temporarily extend or customize the functionality of a client by transferring executable code.

- **What is Restful APi ?**
    - RESTful APIs is an interface between two or more computer systems to exchange information securely over the Internet.
    - API is a software architectural pattern which gives you a certain set of conditions or rules or protocols on how an API should work. 
    - API developers follow this architecture and design their APIs.
    - When Web services implement this REST architectural design. 
    - This is known as RESTful web services, and when APIs follow REST architecture, these are known as REST APIs.
    - A RESTful API is an API that adheres to the principles of REST. 
    - It allows interaction with RESTful web services using standard HTTP methods and typically returns data in formats like JSON or XML.

    - **Key Characteristics of RESTful APIs**
        - Resources: Everything is considered a resource, identified by a URI (Uniform Resource Identifier).
        - HTTP Methods: Standard methods are used to perform operations on resources.
        - GET: Retrieve a resource.
        - POST: Create a new resource.
        - PUT: Update an existing resource.
        - DELETE: Delete a resource.
        - Stateless Operations: Each request from the client to the server must contain all the information needed to understand and process the request.
        - Representation: Resources are represented in a format like JSON or XML.
        - Hypermedia as the Engine of Application State (HATEOAS): Clients interact with the application entirely through hypermedia provided dynamically by application servers.

- **What is the d/f b/w stateless and stateful and there pros & cons.**
- **Is Http stateless and why?**
- **What is use of preflight request?**
- **If I am hit one url on browser and it is rendering some html pages how it is happening ?**
- **How OSI layer come in the picture? APSTN-DP**
    - Physical layer 
    - Data link layer
    - Network layer
    - Transport Layer
    - Session Layer
    - Presentation Layer
    - Application Layer

- **Let you have logged in facebook how server knows the user already authenticate so not asking again login credential.**
    - **Sessions:** Server-side storage of user data to persist state across requests.
    - **Cookies:** Client-side storage of session ID, sent with every HTTP request.
    - **Login Process:**
        - User logs in and server creates a session.
        - Server sends session ID as a cookie to the client.
        - Browser includes session ID cookie in subsequent requests.
        - Server validates session ID to verify authentication.
- **Can we change the port number in apache like in listen 80 or 443 can we alter this is possible?**
- Yes, it is possible to change the port number in Apache by modifying the Listen directive in the configuration files.
    Steps:
        - Open the Apache configuration file.
        - Modify the Listen directive to the new port number.
        - Update the virtual host configuration if necessary.
        - Restart the Apache service to apply the changes.

- **OAuth stand for open authorization**
    - **OAuth 2.** 0 provides a secure and standardized way to handle authentication and authorization, making it easier to integrate third-party services and protect user data.
    - **OAuth 2.0:** An open standard for access delegation, allowing third-party services to access user information without exposing credentials.
    - **Key Concepts:** Resource Owner, Client, Authorization Server, Resource Server.
    - **Grant Types:** Authorization Code, Implicit, Resource Owner Password Credentials, Client Credentials.
    - **Example Flow:** User Authorization, Authorization Code, Access Token, Access Resource.

- **What is payload in the context of a REST API?**
- **What is the difference between PUT, POST, and PATCH?**
- **What is a REST message and the core components of an HTTP request and an HTTP response?**
    - **REST Message:** Communication between a client and a server in a RESTful architecture, consisting of HTTP requests and responses.
    - **HTTP Request:** Sent by the client to perform an operation on a resource, includes a request line, headers, and an optional body.
    - **HTTP Response:** Sent by the server with the result of the operation, includes a status line, headers, and an optional body.
    - **Components:**
        - **Request Line:** HTTP method, URI, HTTP version.
        - **Headers:** Additional information about the request or response.
        - **Body:** Data sent to or received from the server.
- **What is an idempotent method and why are they important?**
- **What's the difference between idempotent and safe HTTP methods?**
- **Explain caching in a RESTful architecture?**
- **Best practices in developing a RESTful web service**
- **RESTful APIs: Stateless or Stateful?**
    - **RESTful APIs:** Stateless by design.
    - **Stateless:** Each request is independent, containing all necessary information.
    - **Benefits:** Improved scalability, reliability, and simplicity.





## Reference Link
- [Best practices for REST API design](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/)
- [Node js api best practices](https://github.com/msrajawat298/PlannerBuddy-api)
- [What is Rest API](https://youtube.com/shorts/JwtkJDUzWis?si=KLxOtrwOPI1yd-za)
- [REST API Interview Questions (Advanced Level)](https://youtu.be/n2JQFFFEd0M?si=u0yqhzEzY0IAWuS5)