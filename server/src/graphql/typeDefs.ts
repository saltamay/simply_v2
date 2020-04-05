import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  input LogInInput {
    code: String!
  }

  type Listing {
    id: ID!
    imgSrc: String!
    price: String!
    hiResImageSrc: String!
    address: String!
    zipcode: String!
    city: String!
    state: String!
    status: String!
    bedrooms: Int!
    bathrooms: Int!
  }

  type Viewer {
    id: ID
    token: String
    avatar: String
    didRequest: Boolean!
  }

  type Query {
    listings: [Listing!]!
    authUrl: String!
  }

  type Mutation {
    deleteListing(id: ID!): Listing
    logIn(input: LogInInput): Viewer!
    logOut: Viewer!
  }
`;
