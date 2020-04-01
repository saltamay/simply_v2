/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Listings
// ====================================================

export interface Listings_listings {
  __typename: "Listing";
  id: string;
  address: string;
  price: string;
  imgSrc: string;
}

export interface Listings {
  listings: Listings_listings[];
}
