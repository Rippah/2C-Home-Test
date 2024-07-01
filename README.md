# GraphQL API for User Management

## Prerequisites

Before starting the project, ensure you have the following installed:

- Node.js (recommended version 14 or later)
- npm (usually comes with Node.js)
- MongoDB (locally installed or an account on MongoDB Atlas)

## Project Setup Instructions

1. Clone the repository:
   - `git clone https://github.com/Rippah/2C-Home-Test`
   - `cd graphql-user-api`
   
2. Install dependencies:
   - `npm install`
   
3. Configure MongoDB connection:
   - If using a local MongoDB instance, ensure it is running
   - If using MongoDB Atlas, update the connection string in the `db.js` file

4. Start the server:
   - `node index.js`
   
5. Open Apollo Server Playground in your browser:
   - Typically available at http://localhost:4000

6. Test the API using queries from the `test-apollo.txt` file.

## Project Structure

- `index.js`: Main application file
- `schema.js`: GraphQL schema definition
- `resolvers.js`: GraphQL resolvers
- `db.js`: MongoDB connection configuration and model definition
- `test-apollo.txt`: Example GraphQL queries for testing

## Available Operations

- Query:
   - `users`: Retrieves a list of all users (optional filtering)
- Mutation:
   - `addUser`: Adds a new user
   - `deleteUser`: Deletes a user by ID

## Brief YouTube Tutorial for the Task

https://youtu.be/cKilNoEmstA
