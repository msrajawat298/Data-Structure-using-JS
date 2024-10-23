### [Why radis is fast](https://www.youtube.com/shorts/x8lcdDbKZto)
### Why http is stateless & there pros and cons?
    HTTP (Hypertext Transfer Protocol) is considered stateless because each request from a client to a server is treated as an independent transaction that is unrelated to any previous request. This means that the server does not retain any information about previous requests made by the client.
    When a client makes a request to a server, the server processes the request and sends a response. The server does not retain any information about the client or the request after the response is sent.
### What is Cookies or who are handel it? and if it is a part of client then how php able to handle client side while php is a server side ?

- Cookies are small pieces of data stored on the client's browser by the server. They are used to remember information about the user between HTTP requests. Cookies are typically used for session management, personalization, and tracking.

### Who Handles Cookies?
- Client-Side: Cookies are stored and managed by the client's web browser. The browser automatically includes relevant cookies in HTTP requests to the server.
- Server-Side: The server can set, read, and delete cookies by including specific headers in HTTP responses.

## How PHP Handles Client-Side Cookies
Although PHP is a server-side language, it can interact with client-side cookies through HTTP headers. 
Here's how PHP can handle cookies:
- Setting Cookies: PHP can set cookies by sending Set-Cookie headers in the HTTP response.
- Reading Cookies: PHP can read cookies sent by the client in the HTTP request.
- Deleting Cookies: PHP can delete cookies by setting their expiration date to a past time.