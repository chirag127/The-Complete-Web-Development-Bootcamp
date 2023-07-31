# API Concepts in Markdown Format for GitHub

## Endpoint

An endpoint is a specific URL or URI (Uniform Resource Identifier) that a client can use to interact with a web service or API. It represents a unique location in the API where specific operations can be performed.

Example Endpoint: `/api/users`

## Query Parameters

Query parameters are additional pieces of information sent in the URL to modify the behavior of an API request. They are typically used for filtering, sorting, or specifying other criteria for data retrieval.

Example Usage: `/api/products?category=electronics&price=100`

In this example, the query parameters are `category=electronics` and `price=100`, indicating that we want to retrieve products that belong to the "electronics" category and have a price less than or equal to 100.

## Path Parameter

Path parameters are placeholders within the URL path that are used to identify a specific resource or entity. They are specified by enclosing them in curly braces {}.

Example Usage: `/api/users/{user_id}`

In this example, the path parameter is `{user_id}`, which represents a unique identifier for a user. When making a request to this endpoint with a specific user ID, the server will use that ID to identify and retrieve the corresponding user's information.

## Combining Concepts

Here's an example of how these concepts can be combined in a single API request:

**Endpoint**: `/api/products`

**Query Parameters**: `category=books&sort=price&order=asc`

**Final API Request**: `/api/products?category=books&sort=price&order=asc`

In this example, the client is making a request to the `/api/products` endpoint to retrieve a list of books. The `sort` query parameter is used to request the results to be sorted based on the `price`, and the `order` query parameter specifies an ascending order for the results.

Keep in mind that the actual syntax and usage of endpoints, query parameters, and path parameters might vary depending on the API design and technology used. Always refer to the API documentation for the specific service you are working with to understand the correct format and usage of these concepts.
