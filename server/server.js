const express = require("express");
const path = require("path");
const db = require("../database/database.js").db;
const { graphql, buildSchema } = require("graphql");
// GraphQLString, GraphQLObjectType, GraphQLSchema
const { ApolloServer, gql } = require("apollo-server-express");
const port = process.env.PORT || 3000;

const DIST_DIR = path.join(__dirname, "dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../client/dist")));

// A schema is constructed using GraphQL schema language
// The root provides a resolver function for each API endpoint
// Run the GraphQL query '{ hello }' and print out the response

const typeDefs = gql`
  scalar Date

  type Query {
    getRestaurant(name: String!): Restaurant
    getAllRestaurant: [Restaurant!]!
  }

  type Restaurant {
    id: Int!
    name: String!
    email: String!
    address: String!
    city: String!
    state: String!
    zipcode: Int!
    review_id: Int!
    phone_number: String!
    menu_id: Int!
    created_at: Date
  }

  type Mutation {
    registerRestaurant(input: registerRestaurantInput!): InsertValuePayload!
  }

  input registerRestaurantInput {
    name: String!
    email: String!
    address: String!
    city: String!
    state: String!
    zipcode: Int!
    phone_number: String!
    created_at: Date
  }

  type InsertValuePayload {
    success: Boolean!
    message: String
  }
`;

const resolvers = {
  Query: {
    getRestaurant: async (_) => {
      // getRestaurant: async (_, { name }) => {
      try {
        const query = `SELECT * FROM restaurant`;
        // const query = `SELECT * FROM restaurant WHERE name = $1`;
        // const values = [name];
        const { rows } = await db.query(query);
        // const { rows } = await db.query(query, values);
        // console.log("Rows from database111:", rows); // Log the rows retrieved from the database
        // return rows;
        if (rows.length > 0) {
          return rows[0]; // Return the name property of the first row
        } else {
          return null; // No restaurant found with the specified name
        }
      } catch (error) {
        console.error("Error from database query:", error);
        throw error; // Throw the error to be caught by Apollo Server
      }
    },
    getAllRestaurant: async (_) => {
      // getRestaurant: async (_, { name }) => {
      try {
        const query = `SELECT * FROM restaurant`;
        // const query = `SELECT * FROM restaurant WHERE name = $1`;
        // const values = [name];
        const { rows } = await db.query(query);
        // const { rows } = await db.query(query, values);
        // console.log("Rows from database222:", rows); // Log the rows retrieved from the database
        // return rows;
        if (rows.length > 0) {
          return rows; // Return the name property of the first row
        } else {
          return null; // No restaurant found with the specified name
        }
      } catch (error) {
        console.error("Error from database query:", error);
        throw error; // Throw the error to be caught by Apollo Server
      }
    },
  },

  // ************************************
  // Insert Values into the Database
  Mutation: {
    registerRestaurant: async (_, { input }) => {
      try {
        const query = `INSERT INTO restaurant(name, email, address, city, state, zipcode, phone_number, created_at)
        VALUES ($1,$2,$3,$4,$5,$6,$7,NOW())`;
        const values = [
          input.name,
          input.email,
          input.address,
          input.city,
          input.state,
          input.zipcode,
          input.phone_number,
        ];
        const { rows } = await db.query(query, values);

        return {
          success: true,
          message: "Restaurant is registered successfully!",
        };
      } catch (error) {
        return {
          success: false,
          message: "Failed to insert value",
        };
      }
    },
  },
  // ************************************
};

app.listen(port, () => {
  console.log(`The app server is running on port: ${port}`);
});

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  // const app = express();
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
    // console.log(`Server ready at http://localhost:4000`);
  });
};

startServer().catch((error) => {
  console.error("Error starting server:", error);
});
