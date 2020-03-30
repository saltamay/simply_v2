import { gql } from 'apollo-server-express';

export const typeDefs = gql`
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

  type Query {
    listings: [Listing!]!
  }

  type Mutation {
    deleteListing(id: ID!): Listing
  }
`;
