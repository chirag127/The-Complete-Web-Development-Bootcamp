# HTTP Response Codes

HTTP response codes are three-digit numbers that indicate the status of an HTTP response. They are sent by a server in response to a client's request and provide information about the outcome of the request.

## Commonly Used HTTP Response Codes

Here are some commonly used HTTP response codes along with their meanings:

### 200 OK
The request was successful, and the server has returned the requested data.

### 201 Created
The request was successful, and a new resource has been created as a result.

### 204 No Content
The request was successful, but there is no additional data to return (e.g., after a successful DELETE request).

### 400 Bad Request
The server cannot understand the request due to client error or malformed syntax.

### 401 Unauthorized
The client must authenticate itself to get the requested response, typically via authentication credentials (username and password).

### 403 Forbidden
The client does not have the necessary permissions to access the requested resource.

### 404 Not Found
The requested resource could not be found on the server.

### 500 Internal Server Error
A generic error message indicating that the server encountered an unexpected condition that prevented it from fulfilling the request.

### 502 Bad Gateway
The server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed.

### 503 Service Unavailable
The server is not ready to handle the request. Commonly used during server maintenance or when the server is overloaded.

### 504 Gateway Timeout
The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server it accessed.

These are just a few examples of HTTP response codes, and there are many others that serve specific purposes in the HTTP protocol. Understanding these codes helps developers and users to diagnose and troubleshoot issues when interacting with web servers and services.

 To help remember some of the most common HTTP response codes, Here are some tricks:

## 2xx (Successful):

Think of "2xx" as "to success." All status codes in the 2xx range indicate a successful response.
## 4xx (Client Errors):

Remember "4xx" as "for client mistakes." All status codes in the 4xx range represent errors caused by the client's request.
## 5xx (Server Errors):

Think of "5xx" as "server cries." All status codes in the 5xx range indicate errors caused by the server.
