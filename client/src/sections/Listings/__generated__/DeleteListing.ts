/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteListing
// ====================================================

export interface DeleteListing_deleteListing {
  __typename: "Listing";
  id: string;
  address: string;
  price: string;
  imgSrc: string;
}

export interface DeleteListing {
  deleteListing: DeleteListing_deleteListing | null;
}

export interface DeleteListingVariables {
  id: string;
}
