### 1. **How many maturity levels are there in REST API?**
   - REST API maturity levels are defined by **Richardson’s Maturity Model**, which includes 4 levels:
     1. **Level 0**: Plain Old XML (POX) or one URI with single method (e.g., `POST`).
     2. **Level 1**: Resources are introduced, each with a unique URI.
     3. **Level 2**: HTTP methods (GET, POST, PUT, DELETE) are used properly.
     4. **Level 3**: Hypermedia as the Engine of Application State (HATEOAS) is implemented.
     5. [Click to watch the video](https://youtu.be/IIB-WMpETls?si=VkoqSrP4UpT01j4e)


### 2. **Difference between REST and SOAP?**
   - **REST**:
     - Lightweight and uses HTTP methods (GET, POST, PUT, DELETE).
     - Generally uses JSON or XML.
     - Stateless and relies on standard web principles.
   - **SOAP**:
     - Heavier and uses XML messaging format.
     - Requires strict standards (WSDL) and includes advanced security and transaction handling.
     - Can operate over protocols other than HTTP (e.g., SMTP).

### 3. Difference Between GET and POST

#### GET

- Purpose: Used to retrieve data from a server.
- Data Transmission: Appends data to the URL as query parameters.
- Visibility: Data is visible in the URL, making it less secure for sensitive information.
- Caching: Responses can be cached by browsers and intermediate proxies.
- Idempotency: Safe and idempotent, meaning multiple identical requests have the same effect as a single request.
- Size Limit: Limited by URL length restrictions (varies by browser and server).

#### POST

- Purpose: Used to send data to a server to create/update a resource.
- Data Transmission: Sends data in the body of the HTTP request.
- Visibility: Data is not visible in the URL, making it more secure for sensitive information.
- Caching: Responses are not cached by default.
- Idempotency: Not idempotent, meaning multiple identical requests can have different effects.
- Size Limit: Generally no size limit for the data sent in the body.

### 4. Why GET is Important Even When POST Can Be Used
- Semantics: GET and POST have different semantics. GET is intended for retrieving data without side effects, while POST is intended for actions that change the state of the server.
- Caching: GET requests can be cached, improving performance and reducing server load. POST requests are not cached by default.
- Bookmarking and Sharing: URLs with GET parameters can be bookmarked and shared easily. POST data is not included in the URL.
- Idempotency: GET requests are idempotent, making them safer for repeated requests (e.g., refreshing a page). POST requests can have side effects and are not idempotent.
- Standards and Conventions: Using the correct HTTP method for the intended action adheres to web standards and conventions, making APIs more predictable and easier to understand.


### REST (Representational State Transfer)
- REST is an architectural style for designing networked applications. 
- It relies on a stateless, client-server, cacheable communications protocol, typically HTTP. - RESTful systems are characterized by how they are stateless and separate the concerns of client and server.

#### Key Principles of REST
- Stateless: 
    - Each request from a client to a server must contain all the information needed to understand and process the request. 
    - The server does not store any state about the client session.
- Client-Server Architecture: 
    - The client and server are separate entities that interact through a standardized interface. 
    - This separation allows for independent evolution of the client and server.
- Cacheable: 
    - Responses must define themselves as cacheable or not to prevent clients from reusing stale or inappropriate data.
- Uniform Interface: 
    - A consistent interface between clients and servers simplifies and decouples the architecture. 
    - This is typically achieved through standard HTTP methods (GET, POST, PUT, DELETE, etc.).
- Layered System: 
    - A client cannot ordinarily tell whether it is connected directly to the end server or to an intermediary along the way. 
    - This can improve scalability and manageability.
- Code on Demand (Optional): 
    - Servers can temporarily extend or customize the functionality of a client by transferring executable code.

### What is Restful APi ?
- RESTful APIs is an interface between two or more computer systems to exchange information securely over the Internet.
- API is a software architectural pattern which gives you a certain set of conditions or rules or protocols on how an API should work. 
- API developers follow this architecture and design their APIs.
- When Web services implement this REST architectural design. 
- This is known as RESTful web services, and when APIs follow REST architecture, these are known as REST APIs.
- A RESTful API is an API that adheres to the principles of REST. 
- It allows interaction with RESTful web services using standard HTTP methods and typically returns data in formats like JSON or XML.

#### Key Characteristics of RESTful APIs
- Resources: Everything is considered a resource, identified by a URI (Uniform Resource Identifier).
- HTTP Methods: Standard methods are used to perform operations on resources.
- GET: Retrieve a resource.
- POST: Create a new resource.
- PUT: Update an existing resource.
- DELETE: Delete a resource.
- Stateless Operations: Each request from the client to the server must contain all the information needed to understand and process the request.
- Representation: Resources are represented in a format like JSON or XML.
- Hypermedia as the Engine of Application State (HATEOAS): Clients interact with the application entirely through hypermedia provided dynamically by application servers.
