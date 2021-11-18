# apollo-server

What is GraphQL?

GraphQL is a language that enables us to provide a complete and understandable description of the data in our API. GraphQL is a syntax that describes how to ask for data, and is generally used to load data from a server to a client. GraphQL are fast and stable because they fetch the data for required fields only, unlike the REST APIs, where REST APIs fetch data for all the fields for a specific object. A GraphQL service is created by defining types and fields on those types, then providing functions for each field on each type.

Difference between GraphQL and Rest?

GraphQL is a query language for web service APIs.GraphQL displays all logically connected resources, giving developers an efficient way to create APIs with matching data structures on the server-side and the client-side.	
RESTful API requires hitting multiple resources to get all the required data for a web application from a server.
GraphQL allows developers to create queries that tell the server how to respond with the exact data they need.	
The advantage of REST APIs is its simplicity—you have one endpoint that does one task, so it’s easy to understand and manipulate.
GraphQL API developers must create additional code or use third-party tools to make caching work.
When using a REST API to fetch information, you’ll always get back a complete dataset. For example, if you wanted to request information from two objects, you’d need to perform two REST API requests.

Write down about Schema and Resolvers?

The GraphQL schema is at the center of every GraphQL server. It defines the server's API, allowing clients to know which operations can be performed by the server. The schema is written using the GraphQL schema language (also called schema definition language, SDL). With it, you can define object types and fields to represent data that can be retrieved from the API as well as root types that define the group of operations that the API allows.

The root types are the query type, mutation type, and subscription type, which are the three types of operations you can run request from a GraphQL server. The query type is compulsory for any GraphQL schema, while the other two are optional. While we can define custom types in the schema, the GraphQL specification also defines a set of built-in scalar types. They are Int, Float, Boolean, String, and ID.

A resolver is a function that resolves a value for a type or field in a schema. Resolvers can return objects or scalars like Strings, Numbers, Booleans, etc. If an Object is returned, execution continues to the next child field. If a scalar is returned (typically at a leaf node), execution completes. If null is returned, execution halts and does not continue.
