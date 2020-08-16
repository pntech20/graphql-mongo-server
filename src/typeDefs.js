import { gql } from "apollo-server-express"

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
  type Cat {
    id: ID!
    name: String!
  }

  type Query {
    hello: String!
    cats: [Cat!]
  }

  type Mutation {
    createCat(name: String!): Cat!
  }
`;